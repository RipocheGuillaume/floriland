const express = require("express");
const router = express.Router();
const flowers = require("../../data/flowers.js");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/fleurs", (req, res) => {
  res.render("fleurs", flowers);
});

router.get("/fleurs/:fleur", (req, res) => {
  res.locals.getFlower = req.params.fleur;
  res.render("fleurs", flowers);
});

module.exports = router;
