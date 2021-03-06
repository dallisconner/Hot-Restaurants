const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const path = require("path");

<<<<<<< HEAD
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")
  )
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "viewtables.html"));
});

app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

app.get("/api/reservations/:reservation", function(req, res) {
  var chosen = req.params.reservations;

  console.log(chosen);

  for (var i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }

  return res.json(false);
});

app.post("/api/reservations", function(req, res) {
  var newReservation = req.body;

  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
=======
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/makereservation", function (req, res) {
    res.sendFile(path.join(__dirname, "makereservation.html"));
});

app.get("/viewtables", function (req, res) {
    res.sendFile(path.join(__dirname, "viewtables.html"));
>>>>>>> 023eb725c217c760062a33819ce45e0bd64cf94f
});

app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.post("/api/reservations", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    characters.push(newReservation);

    res.json(newReservation);
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




