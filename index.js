const express = require("express");
const app = express();
const hostname = "localhost";
const http = require("http");
const port = 3000;
const ejs = require("ejs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const studied = [];

app.get("/", (req, res) => {
  //res.send("Home Page");
  res.render("landing");
});

app.get("/about", (req, res) => {
  //res.send("You are viewing about page.");
  res.render("about");
});

app.post("/features", (req, res) => {
  var name = req.body.featureName;
  var image = req.body.relatedImage;
  var newFeature = { name: name, image: image };
  studied.push(newFeature);
  res.render("features", { studied: studied });
});

app.listen(3000, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
