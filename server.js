var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Tells express where to read static files for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//url encoding and body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

//sets handlebars as default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

// routing system tells app what to do when you hit a certain route
//traffic managing system
//Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
