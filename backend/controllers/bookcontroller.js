const { query } = require("express");
const bookModel = require("../models/bookmodel");
const sequelize = require("sequelize");

async function createBook(req, res) {
  const bookData = req.body;
  //   console.log(req);
  await bookModel.create({
    name: bookData.name,
    author: bookData.author,
    genre: bookData.genre,
    description: bookData.description,
  });
  res.sendStatus(200);
}

async function getBook(req, res) {
  const name = req.query.name;
  const genre = req.query.genre;
  const author = req.query.author;

  let queryResult = {};

  // By default, sequelize assumes and operation for the where clause
  //
  const orOperation = sequelize.Op.or;
  const andOperation = sequelize.Op.and;
  queryResult = await bookModel.findAll({
    where: {
      [orOperation]: [{ name: name }, { author: author }, { genre: genre }],
    },
  });

  console.log(queryResult);
  res.send(queryResult);
}

module.exports = { createBook, getBook };
