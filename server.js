// Dependencies
var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var path = require("path");

// Setting up the app
var app = express();
var PORT = process.env.PORT || 3037;




// Telling the server to start listening
app.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
});