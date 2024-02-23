const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://127.0.0.1:27017/demo')
    .then(() => console.log('Connected!'));
}

module.exports = {
    connect
}