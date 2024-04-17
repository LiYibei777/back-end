const mongoose = require('mongoose');

const characters = new mongoose.Schema({
  id: String,
  active: Boolean,
  name: String,
  subtitle: String,
  description: String,
  imageUrl: String,
  strength: Number,
  speed: Number,
  skill: Number,
  fearFactor: Number,
  power: Number,
  intelligence: Number,
  wealth: Number
});

const Character = mongoose.model('Character', characters);

module.exports = Character;