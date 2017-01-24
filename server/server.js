var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Champion = require('./champions/championModel.js');
var db = require('./config/database.js');
var ObjectId = mongoose.Types.ObjectId;
var app = express();

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());

//mlab
mongoose.connect(db.url || process.env.MONGODB_URI);
//prod
//mongoose.connect(process.env.MONGODB_URI);

//Generic error handler
function handleError(res, reason, message, code) {
  console.log("Error:", reason);
  res.status(code || 500).json({"error": message});
}

//Routes
app.get('/api/champions', function(req, res) {
  Champion.find({}, function(err, champions) {
    if (err) {
      handleError(res, err.message, "failed to get champions");
    } else {
      res.status(200).send(champions);
    }
  });
});

app.get('/api/champion', function(req, res) {
  console.log('params are', req.params);
  db.url.champions.find({
    "_id": ObjectId("5886b2a8e8093171cfd7b659"), "data" : req.params
  }, function(err, data) {
    if (err) {
      handleError(res, err.message, "failed to get champions");
    } else {
      console.log('data is', data);
      res.status(200).send(data);
    }
  });
});
//Unnecesary add champion because all champions pre-populated into database
// app.post('/api/champions', function(req, res) {
//   var champion = req.body;
//   Champion.create({
//     name: champion.name,
//     id: champion.id,
//     title: champion.title,
//     skins: champion.skins,
//     tags: champion.tags,
//     lore: champion.lore,
//     image: champion.image.full
//   }, function (err, data) {
//     if (err) {
//       handleError(res, err.message, "failed to create champion");
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });


//Start server
var server = app.listen(process.env.PORT || 8000, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});