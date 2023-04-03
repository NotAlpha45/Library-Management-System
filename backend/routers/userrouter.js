const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");

router.post("/create-user", userController.createUser);
router.get("/get-user", userController.getUser);

module.exports = router;
