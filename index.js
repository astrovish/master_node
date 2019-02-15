const express = require("express");
const app = express();
const hostname = "localhost";
const http = require("http");
const port = 3000;
const ejs = require("ejs");
const bodyParser = require("body-parser");
const dateMod = require("./custom_modules/datemod");
const events = require("events");
const formidable = require("formidable");
const multer = require("multer");
var upload = multer({ dest: "uploads/" });

////////////////////////////////////////////
var eventEmitter = new events.EventEmitter();

var burnoutHandler = () => {
  console.log("WORK HARD!!! .......TILL YOU EXHAUSTED!!!");
};

eventEmitter.on("BurnOut", burnoutHandler);
eventEmitter.emit("BurnOut");
////////////////////////////////////////////

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const studie = [];

app.get("/", (req, res) => {
  //res.send("Home Page");
  res.render("landing", { currDateTime: dateMod.currDateTime() });
});

app.get("/about", (req, res) => {
  //res.send("You are viewing about page.");
  res.render("about");
});

app.post("/features", upload.field, (req, res) => {
  var name = req.body.featureName;
  var image = req.body.relatedImage;
  var newFeature = { name: name, image: image };
  studie.push(newFeature);
  res.render("features", { studied: studie });
});

app.listen(3000, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

/*
const url = require('url');
const fs = require('fs');

var q = url.parse(req.url, true);
fs.readFile();
fs.writeFile();
fs.appendFile();
fs.open(filename, flag);
fs.unlink();
fs.rename();
*/
