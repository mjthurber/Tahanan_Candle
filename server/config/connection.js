const mongoose = require('mongoose');
const require = require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tahanan-candle');

module.exports = mongoose.connection;
