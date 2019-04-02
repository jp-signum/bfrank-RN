const express = require("express")
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')
const morgan = require('morgan')
const expressJwt = require("express-jwt")
const unless = require('express-unless')

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/raveNailz'
let PORT = process.env.PORT || 5000

//cloudinary configurations
cloudinary.config({
    cloud_name: 'deur0gpls',
    api_key: '769326746159981',
    api_secret: 'PKPG9bKu07BdE4PG6R-RhXgVX_k'
})

//connect to db
mongoose.set('useCreateIndex', true);
mongoose.connect(url,
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

//set up middlewares
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use('/api', expressJwt({ secret: process.env.SECRET }));

app.use('/auth', require('./server/routes/auth'));
app.use(expressJwt({secret: process.env.SECRET}).unless({method:'GET'}));

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return res.send({ message: err.message });
});


//start server
app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});