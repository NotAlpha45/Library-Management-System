const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookcontroller");

router.post("/post-book", bookController.createBook);
router.get("/get-book-by-name", bookController.getBookByName);
router.get("/get-book-by-author", bookController.getBookByAuthor);
router.get("/get-book-by-genre", bookController.getBookByGenre);
router.get("/get-all-books", bookController.getAllBooks);
router.post("/update-book", bookController.updateBook);
router.post("/delete-book", bookController.deleteBook);

module.exports = router;
