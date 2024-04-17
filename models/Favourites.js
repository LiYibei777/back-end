const mongoose = require('mongoose');

const favorites = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  characters: [String]
});

const Favorites = mongoose.model('Favorites', favorites);

module.exports = Favorites;