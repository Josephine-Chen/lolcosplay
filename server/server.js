var express = require('express');
var monggose = require('mongoose');

var app = express();

app.use(express.static(__dirname + '/../client'));;

var port = process.env.PORT || 8000;

app.listen(port, function(){
  console.log('Node app is running on port', port);
});

module.exports = app;