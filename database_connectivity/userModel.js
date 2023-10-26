// const { MongoClient } = require('mongodb');
// const userSchema = new MongoClient

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    address: String
});

module.exports = mongoose.model('User', userSchema);