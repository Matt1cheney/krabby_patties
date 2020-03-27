// define routes that i will hit in the browser to render html views

const express = require("express");
const router = express.Router();



router.get("/", function(req, res) {
 
    res.render("layouts/main");

});


// export router
module.exports = router;