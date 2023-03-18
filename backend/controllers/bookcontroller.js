const bookModel = require("../models/bookmodel");

async function createBook(req, res) {
  const book_data = req.body;
//   console.log(req);
  await bookModel.create({
    book_id: book_data.book_id,
    name: book_data.name,
    author: book_data.author,
    genre: book_data.genre,
    description: book_data.description,
  });
  res.sendStatus(200);
}

module.exports = { createBook };
