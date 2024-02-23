const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: { type: String},
    password: { type: String},
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('User', User);