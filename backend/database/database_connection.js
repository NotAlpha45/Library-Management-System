const sequelize = require("sequelize");

const userName = "maheen";
const password = "maheen123";
const database_name = "book_database";
const database_config = {
  dialect: "mysql",
  host: "localhost",
};

const connection = new sequelize.Sequelize(
  database_name,
  userName,
  password,
  database_config
);

module.exports = connection;
