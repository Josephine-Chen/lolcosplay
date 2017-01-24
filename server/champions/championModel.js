var mongoose = require('mongoose');

var ChampionSchema = new mongoose.Schema({
  name: String,
  id: Number,
  title: String,
  skins: [{id: Number, name: String, num: Number}],
  tags:[String],
  lore: String,
  image: String
});

module.exports = mongoose.model('Champion', ChampionSchema);