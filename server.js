var express = require('express');

var app = express();

// default run time
 app.get('/', function(req, res) {
 	res.send("Welcome");
 });

//app.use(express.static(__dirname + '/public'));

var port = 3000;

app.listen(port);

console.log("Server is runing " +port);