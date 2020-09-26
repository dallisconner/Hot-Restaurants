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



