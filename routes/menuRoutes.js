const express = require("express");
const router = express.Router();

const Menu = require("./../models/Menu");

router.post("/", async (req, res) => {
  try {
    const menuData = req.body;
    const newMenu = new Menu(menuData);
    const response = await newMenu.save();
    console.log("menu added successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("Data fetched suceesfully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "error ocured" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste == "spicy" || taste == "sour" || taste == "sweet") {
      const response = await Menu.find({ taste: taste });
      console.log("respose fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "error ocured" });
  }
});
module.exports = router;
