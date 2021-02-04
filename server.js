const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const api = require('./server/routes/api')

// mongoose.connect('mongodb://localhost/nasaDB', { useNewUrlParser: true })

const url = "mongodb+srv://ali_database:halaali107@cluster0.g6hcu.mongodb.net/nasaDB?retryWrites=true&w=majority"
mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false }) 
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));


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
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})


