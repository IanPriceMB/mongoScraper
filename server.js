var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

//glad i deep dove on express and passport or i'd be fucked lol
//look at this sexy copy pasta 
var PORT = process.env.PORT || 3000;

var app = express();

var routes = require("./routes");

app.use(express.static("public"));

//view engines are easy for me now hurray!
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoScraper";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
