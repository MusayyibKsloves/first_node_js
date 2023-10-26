// const { MongoClient } = require('mongodb');
// // const url = 'mongodb://localhost:27017';
// const url = "mongodb+srv://mgdb:root@cluster0.hk5an6a.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(url);
// const dbName = 'test';

// async function getData() {
//     let ressult = await client.connect();
//     let db = ressult.db(dbName);
//     console.log('DB connected !');
//     //let collection = db.collection('user');
//     //let response=collection.find({}).toArray();
//     //console.log(response);
// }
// getData();


const mongoose = require('mongoose');
const express = require('express');
const app = express();

const url = "mongodb+srv://mgdb:root@cluster0.hk5an6a.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url)
    .then(() => console.log('Connected!'));

const User = require('./userModel');
app.use('/users', require('../userApi/user'));

 
async function insertData() {

      User.create({
        name: 'musa',
        mobile: '1234567890',
        email: 'musa123@gmail.com',
        address: 'mzn'
      });

      console.log('data created in the user table');
}

//insertData();

app.listen(3000, function () {
    console.log('Server running..on port:3000..!');
});


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/test')
//   .then(() => console.log('Connected!'));


