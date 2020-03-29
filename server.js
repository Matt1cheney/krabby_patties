const express = require("express");
// Set Handlebars.
const Handlebars = require('handlebars')
const exphbs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");

// reference router
const htmlRouter = require("./routes/htmlroutes");
const apiroutes = require("./routes/apiroutes")

const app = express();

const PORT = process.env.PORT || 8080;

// allows reference to sequelize
const db = require("./models");

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  })
);

app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use html router(defined in htmlroutes.js)
app.use(apiroutes)
app.use(htmlRouter);
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
