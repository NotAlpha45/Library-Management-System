const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const connection = require("./database/database_connection");
const bookRouter = require("./routers/bookrouter");
const userRouter = require("./routers/userrouter");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

// Uses cross origin resource sharing for hosting
app.use(
  cors({
    origin: "*",
  })
);

connection.sync();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(bookRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
