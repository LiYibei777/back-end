const mongoose = require('mongoose');

const contributions = new mongoose.Schema({
  contributionId: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // 引用 User 模型
  action: String,
  status: String,
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminList' },  // 引用 AdminList 模型
  date: Date,
  data: {
    id: String,
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
  }
});

const Contribution = mongoose.model('Contribution', contributions);

module.exports = Contribution;