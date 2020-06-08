var express = require("express");
var router = express.Router();
let jsonData = require("../pokedex.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/pokemon/", (req, res, next) => {
  res.send(jsonData);
});

router.get("/pokemon/:id", (req, res, next) => {
  const id = req.params.id;
  res.send(jsonData.filter((x) => x.id === parseInt(id)));
});

router.get("/pokemon/:id/:info", (req, res, next) => {
  const id = req.params.id;
  const info = req.params.info;
  res.send(jsonData.filter((x) => x.id === parseInt(id)).map((e) => e[info]));
});

module.exports = router;
