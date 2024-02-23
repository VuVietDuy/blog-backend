const mongoose = require('mongoose');
require('dotenv').config();

function connect() {
    mongoose.connect(process.env.MONGODB_CONNECT_URI)
    .then(() => console.log('Connected!'));
}

module.exports = {
    connect
};