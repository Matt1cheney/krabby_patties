const express = require("express");
// Set Handlebars.
const exphbs = require("express-handlebars");

// reference router
const htmlRouter = require("./routes/htmlroutes");

const app = express();

const PORT = process.env.PORT || 8080;

// allows reference to sequelize
const db = require("./models");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use html router(defined in htmlroutes.js)
app.use(htmlRouter);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
