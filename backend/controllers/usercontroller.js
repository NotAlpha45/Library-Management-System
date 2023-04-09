const userModel = require("../models/usermodel");
const sequelize = require("sequelize");
const operator = sequelize.Op;
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;
/**
 * request body format {name, email, password, phone}
 *
 * response body format {account_creatable}
 */
async function createUser(req, res) {
  const userData = req.body;

  const emptyUser = {};

  const existingUser =
    (await userModel.findOne({
      where: { email: userData.email },
    })) ?? emptyUser;

  if (existingUser !== emptyUser) {
    res.send({
      account_creatable: false,
    });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);

    const newUser = await userModel.create(userData).catch((err) => {
      res.sendStatus(500);
    });

    let userSignature = {
      user_id: newUser.dataValues.user_id,
    };

    const userToken = jsonwebtoken.sign(userSignature, secret, {
      expiresIn: "2 days",
    });

    res.send({
      account_creatable: true,
      user_token: userToken,
    });
  }
}

/**
 * request header will have the token under authtoken name
 *
 * response body format a single JSON of the user data or empty JSON
 */
async function getUser(req, res) {
  const userToken = req.headers.authtoken;

  const isValid = jsonwebtoken.verify(userToken, secret);

  if (!isValid) {
    res.send({});
    return;
  }

  const userData = jsonwebtoken.decode(userToken);
  const emptyUser = {};

  let existingUser = (await userModel.findByPk(userData.user_id)) ?? emptyUser;

  //   console.log(passwordMatched);
  if (existingUser !== emptyUser) {
    existingUser.password = undefined;
    res.send(existingUser);
  } else {
    res.send({});
  }
}

/**
 * request format : {email, password}
 *
 * response format : {user_token} on success. 404 error on failure
 */
async function loginUser(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await userModel.findOne({
    where: {
      email: email,
    },
  });

  const isVerified = bcrypt.compareSync(password, user.dataValues.password);

  if (isVerified) {

    let userSignature = {
      user_id: user.dataValues.user_id,
    };

    const userToken = jsonwebtoken.sign(userSignature, secret, {
      expiresIn: "2 days",
    });

    res.send({
      user_token: userToken,
    });
  } else {
    res.sendStatus(404);
  }
}

module.exports = { createUser, getUser, loginUser };
