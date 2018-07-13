var express = require('express');

var app = express();

app.listen(process.env.PORT || 3000)
//var port = process.env.PORT || 3000;

// default run time
//  app.get('/', function(req, res) {
//  	res.send("Welcome");
//  });

app.use(express.static(__dirname + '/public'));


console.log("Server is runing ");