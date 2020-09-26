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


var data = {
	reservations: [],
	waitlist: [],
};

var visitorCount = 0;

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

app.post("/api/new", function(req, res) {
  var tableData = req.body;
  console.log(tableData);
  if (tableData && tableData.name) {
  	tableData.routeName = tableData.name.replace(/\s+/g, "").toLowerCase();
  }
  console.log(tableData);

  if (data.reservations.length < 5) {
  	data.reservations.push(tableData);
  } else {
  	data.waitlist.push(tableData);
  }
  

  res.json(tableData);
});

app.get("/api/remove/:id?", function(req, res) {
  var tableId = req.params.id;

  if (tableId) {
    console.log(tableId);
	for (var i = 0; i < data.reservations.length; i++) {
	  if (tableId === data.reservations[i].id) {
	  	data.reservations.splice(i, 1);
	  	if (data.waitlist.length > 0) {
	  		var tempTable = data.waitlist.splice(0, 1)[0];
	  		data.reservations.push(tempTable);
	  	}

	    return res.json(true);
	  }
	}
	for (var i = 0; i < data.waitlist.length; i++) {
	  if (tableId === data.waitlist[i].id) {
	  	data.waitlist.splice(i, 1);

	    return res.json(true);
	  }
	}
	return res.json(false);
  }
  return res.json(false);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




