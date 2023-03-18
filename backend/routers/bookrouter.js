const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookcontroller");

router.post("/post-book", bookController.createBook);

module.exports = router;
