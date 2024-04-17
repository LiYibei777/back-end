const mongoose = require('mongoose');

const adminList = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const AdminList = mongoose.model('AdminList', adminList);

module.exports = AdminList;