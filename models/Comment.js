const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    target_id:{ type: mongoose.Types.ObjectId, required: true},
    content: { type: String, required: true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref:'User' ,required: true },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Comment', Comment);