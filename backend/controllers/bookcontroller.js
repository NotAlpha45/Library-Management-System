const { query } = require("express");
const bookModel = require("../models/bookmodel");
const sequelize = require("sequelize");

async function createBook(req, res) {
  const bookData = req.body;
  // console.log(req.body);
  await bookModel.create({
    name: bookData.name,
    author: bookData.author,
    genre: bookData.genre,
    description: bookData.description,
  });
  res.sendStatus(200);
}

async function getAllBooks(req, res) {
  let queryResult = {},
    queryLength = 0, totalBooks = 0;

  let startBookLimit = req.body.startBookLimit ?? 0;
  let endBookLimit = req.body.endBookLimit ?? 10;

  // console.log(startBookLimit, endBookLimit);

  queryResult = await bookModel.findAll({
    offset: startBookLimit,
    limit: endBookLimit,
  });

  totalBooks = await bookModel.count({})

  res.send(
    {
      "totalBooks":totalBooks,
      "queryResult":queryResult
    }
  );
}

async function getBookByName(req, res) {
  const name = req.query.name;

  let queryResult = {};

  queryResult = await bookModel.findAll({
    where: {
      name: name,
    },
  });

  res.send(queryResult);
}

async function getBookByAuthor(req, res) {
  const author = req.query.author;

  let queryResult = {};

  queryResult = await bookModel.findAll({
    where: {
      author: author,
    },
  });

  res.send(queryResult);
}

async function getBookByGenre(req, res) {
  const genre = req.query.genre;
  let queryResult = {};
  queryResult = await bookModel.findAll({
    where: {
      genre: genre,
    },
  });
  res.send(queryResult);
}

async function updateBook(req, res) {
  const bookData = req.body;

  await bookModel
    .update(
      {
        name: bookData.name,
        author: bookData.author,
        genre: bookData.genre,
        description: bookData.description,
      },
      {
        where: {
          book_id: bookData.book_id,
        },
      }
    )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
}

async function deleteBook(req, res) {
  const bookData = req.body;

  await bookModel
    .destroy({
      where: {
        book_id: bookData.book_id,
      },
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(404);
    });
}

module.exports = {
  createBook,
  getBookByName,
  getBookByAuthor,
  getBookByGenre,
  getAllBooks,
  updateBook,
  deleteBook,
};
