const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const login = require(__dirname + "/components/login");

require(__dirname + "/components/register")(app);
require(__dirname + "/components/success")(app);
require(__dirname + "/components/full_details")(app);
login.login(app);

const port = 3700;
app.listen(port, function () {
  console.log("Server started on port " + port + " ............");
});
