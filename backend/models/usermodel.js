const sequelize = require("sequelize");
const connection = require("../database/database_connection");

const userFieldAttrbutes = {
  user_id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type:sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
};

const User = connection.define("User", userFieldAttrbutes);

module.exports = User;
