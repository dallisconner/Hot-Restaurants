const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/makereservation", function (req, res) {
    res.sendFile(path.join(__dirname, "makereservation.html"));
});

app.get("/viewtables", function (req, res) {
    res.sendFile(path.join(__dirname, "viewtables.html"));
});

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
})



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

app.get("/makereservation", function(req, res) {
  res.sendFile(path.join(__dirname, "makereservation.html"));
});

app.get("/viewtables", function(req, res) {
  res.sendFile(path.join(__dirname, "viewtables.html"));
});

app.get("/api/", function(req, res) {
  res.json(data);
});

app.get("/api/clear", function(req, res) {
  data.reservations.length = 0;
  data.waitlist.length = 0;
  res.json(data);
});

app.get("/api/visitors", function(req, res) {
  res.json(visitorCount);
});


