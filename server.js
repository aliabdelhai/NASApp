const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const api = require('./server/routes/api')
URI = process.env.MONGODB_URI || 'mongodb://localhost/nasaDB',
PORT = process.env.PORT || 4200,

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, connectTimeoutMS: 5000, serverSelectionTimeoutMS: 5000 })
.then(function() {
    console.log("Successfully connected to DB.");
})
.catch(function(err) {
    console.log(err.message);
    process.exit(1);
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api', api)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, function() {
    console.log(`Server is up and running on port: ${PORT}.`);
});
