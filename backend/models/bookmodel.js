const sequelize = require("sequelize");
const connection = require("../database/database_connection");

const book_field_attributes = {
  book_id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: sequelize.STRING,
    allowNull: false,
  },
  genre: {
    type: sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.TEXT,
  },
};

const Book = connection.define("Book", book_field_attributes);

module.exports = Book;
