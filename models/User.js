const mongoose = require('mongoose');
const User=new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: String,
    lastname: String,
    email: String,
    password: String
});

const UserModel = mongoose.model('User', User);
module.exports = UserModel;