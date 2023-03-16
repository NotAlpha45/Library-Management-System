const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// Uses cross origin resource sharing for hosting
app.use(
  cors({
    origin: "*",
  })
);

const conn = mysql.createConnection({
  host: "localhost",
  user: userName,
  password: password,
});

conn.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected!");
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
