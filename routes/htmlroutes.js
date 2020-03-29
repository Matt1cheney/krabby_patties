// define routes that i will hit in the browser to render html views

const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/", function(req, res) {
  db.Burger.findAll({}).then((dbBurger) => {
    const handlebarsObj = {
      burgers: dbBurger.map((burger)=> burger.toJSON())
    };
    console.log("get/ ",handlebarsObj);
    // res.json(handlebarsObj)
    res.render("index", handlebarsObj);
  });
});



// export router
module.exports = router;
