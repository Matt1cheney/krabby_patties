// define routes that i will hit in the browser to render html views

const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/", function(req, res) {
//   db.Burger.findAll({}).then((req, dbBurger) => {
//     res.json(dbBurger);
//   });
  res.render("layouts/main");
});

router.post("/api/Burger", (req, res) => {
  db.Burger.create({
    burger_name: res.body.burger_name,
    eaten: req.body.eaten
  }).then((dbBurger) => {
    res.json(dbBurger);
  });
});


// export router
module.exports = router;
