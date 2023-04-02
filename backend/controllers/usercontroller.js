const userModel = require("../models/usermodel");
const sequelize = require("sequelize");
const operator = sequelize.Op;
const bcrypt = require("bcrypt");

/**
 * request body format {name, email, password, phone}
 *
 * response body format {account_creatable}
 */
async function createUser(req, res) {
  const userData = req.body;
  const existingUser =
    (await userModel.findAll({
      where: { email: userData.email },
    })) ?? [];

  if (!existingUser) {
    res.send({
      account_creatable: false,
    });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);

    await userModel.create(userData).catch((err) => {
      res.sendStatus(500);
    });

    res.send({
      account_creatable: true,
    });
  }
}

/**
 * request body format {email, password}
 *
 * response body format a single JSON of the user data or empty JSON
 */
async function getUser(req, res) {
  const userData = req.body;

  let existingUser =
    (await userModel.findOne({
      where: {
        email: userData.email,
      },
    })) ?? {};

  const passwordMatched = await bcrypt.compare(
    userData.password,
    existingUser.password
  );
  //   console.log(passwordMatched);

  if (passwordMatched) {
    existingUser.password = undefined;
    res.send(existingUser);
  } else {
    res.send({});
  }
}

module.exports = { createUser, getUser };
