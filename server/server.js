var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, databse) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  db = database;
  console.log('Database connection ready');

  var server = app.listen(process.env.PORT || 8000, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

//Generic error handler
function handleError(res, reason, message, code) {
  console.log("Error:", reason);
  res.status(code || 500).json({"error": message});
}

app.get('/champs', function(req, res) {
  db.collection(champions).find({}, function(err, data) {
    if (err) {
      handleError(res, err.message, "failed to get champs");
    } else {
      res.status(200).send(data);
    }
  });
});

// app.post('/champs', function(req, res) {
//   fs.readFile('_champion.js', function(err, data) {
//     if (err) {
//       handleError(res, err.message, "failed to post champs");
//     } else {
//       for(champs in data) {
//         db.collection(champions)
//       }
//     }
//   })
// })
// var port = process.env.PORT || 8000;

// app.listen(port, function(){
//   console.log('Node app is running on port', port);
// });

// module.exports = app;