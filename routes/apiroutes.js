// define routes that i will hit in the browser to render html views

const express = require("express");
const router = express.Router();

const db = require("../models");

router.put("/api/Burger/:id", (req, res) => {
  console.log("condition", id);

  db.Burger.update(
    {
      eaten: req.params.update
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(() => {
    return res.status(200).end();
  });
});

router.post("/api/Burger", (req, res) => {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(() => {
    return res.status(200).end();
  });
});

router.delete("api/Burder/:id", ({ id }, res) => {
  db.Burger.destroy({
    where: {
      id: id
    }
  }).then(() => {
    res.status(200).end();
  });
});

module.exports = router;
