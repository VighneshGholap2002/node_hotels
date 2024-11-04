// var fs = require("fs");
// callback()=> {
//   console.log("afgcgfasg");
// }

// fs.appendFile("abc.txt", "hi i am vighnesh" + "\n", callback());

// const jsonString = '{"name":"vighnesh","age":30,"city":"pune"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);

// const objecctToJson = {
//   name: "vighnsshh",
//   age: 95,
//   add: "dubai",
// };

// const convert = JSON.stringify(objecctToJson);
// console.log(convert);

const express = require("express");
const app = express();

const db = require("./db");
const PORT = process.env.PORT || 3000;

require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

app.get("/", function (req, res) {
  res.send("Hello World");
});

// app.get("/ch", (req, res) => {
//   res.send("chiken is ready");
// });

// app.get("/menu", (req, res) => {
//   res.send(menucard());
// });

// app.post("/items", (req, res) => {
//   res.send("data is saves");
//   console.log("daaataa");
// });

// function menucard() {
//   return "menu_card:sambhar idli ";
// }

app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
