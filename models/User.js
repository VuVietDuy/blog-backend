const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: { type: String},
    password: { type: String},
    fullName: { type: String},
    bio: {type: String},
    dateOfBirth: {type: Date},
    role: {type: String, enum: ['admin, user']},
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('User', User);