var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Champion = require('champions/championModel.js');

var app = express();

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());

//mlab
mongoose.connect(process.env.MONGODB_URI+'@ds127439.mlab.com:27439/heroku_bhsntbw8');

//Generic error handler
function handleError(res, reason, message, code) {
  console.log("Error:", reason);
  res.status(code || 500).json({"error": message});
}

//Routes
app.get('/champs', function(req, res) {
  Champion.find({}, function(err, champions) {
    if (err) {
      handleError(res, err.message, "failed to get champions");
    } else {
      res.status(200).send(champions);
    }
  });
});

app.post('/champs', function(req, res) {
  var champion = req.body;
  Champion.create({
    name: champion.name,
    id: champion.id,
    title: champion.title,
    skins: champion.skins,
    tags: champion.tags,
    lore: champion.lore,
    image: champion.image.full
  }, function (err, data) {
    if (err) {
      handleError(res, err.message, "failed to create champion");
    } else {
      res.sendStatus(200);
    }
  });
});


//Start server
var server = app.listen(process.env.PORT || 8000, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});