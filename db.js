const mongoose = require("mongoose");
require("dotenv").config();

// const mongoURL = process.env.DB_LOCAL;

const mongoURL = process.env.DB_URL; //online database url

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("connected", () => {
  console.log("connected");
});
db.on("error", (err) => {
  console.log("error");
});

db.on("disconnected", () => {
  console.log("disconnected");
});

module.exports = db;
