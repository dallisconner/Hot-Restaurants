const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hot Restaurants')
})

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
})

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Storing all the tables
var data = {
	reservations: [],
	waitlist: [],
};

var visitorCount = 0;

// Routing
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  visitorCount++;
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

