// define routes that i will hit in the browser to render html views

const express = require("express");
const router = express.Router();

const db = require("../models");

router.put("/api/Burger/:id", (req, res) => {
  console.log("condition", req.params.id);

  db.Burger.update(
    {
      eaten: true
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

router.delete("api/Burder/:id", (req, res) => {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(200).end();
  });
});

module.exports = router;
