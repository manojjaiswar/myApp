var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

// default run time
 app.get('/', function(req, res) {
 	res.send("Welcome");
 });

//app.use(express.static(__dirname + '/public'));

app.listen(3000);

console.log("Server is runing " +port);