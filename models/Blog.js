const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema({
    title: { type: String},
    content: { type: String},
    tag: [String],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Blog', Blog);