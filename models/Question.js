const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema({
    content: { type: String, required: true},
    tag: [String],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref:'User' ,required: true },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Question', Question);