const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const api = require('./server/routes/api')

// mongoose.connect('mongodb://localhost/nasaDB', { useNewUrlParser: true })

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ali_database:halaali107@cluster0.g6hcu.mongodb.net/nasaDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/nasaDB');


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', api)


const port = 4200;
app.listen(process.env.PORT || PORT);


