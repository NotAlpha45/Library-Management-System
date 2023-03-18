const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookcontroller");

router.post("/post-book", bookController.createBook);
router.get("/get-book", bookController.getBook);

module.exports = router;
