const sequelize = require("sequelize");
require("dotenv").config();

const userName = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database_name = process.env.DB_NAME;
const database_config = {
  dialect: "mysql",
  host: process.env.HOST,
};

const connection = new sequelize.Sequelize(
  database_name,
  userName,
  password,
  database_config
);

module.exports = connection;
