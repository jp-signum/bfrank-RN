const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const unless = require('express-unless')

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/raveNailz'
const path = require('path')
const PORT = process.env.PORT || 5000

//cloudinary configurations
cloudinary.config({
    cloud_name: 'deur0gpls',
    api_key: '769326746159981',
    api_secret: 'PKPG9bKu07BdE4PG6R-RhXgVX_k'
})

//set up middlewares
app.use(morgan('dev'))
app.use(bodyParser.json());

//connect to db
mongoose.set('useCreateIndex', true);
mongoose.connect(url,
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

//decode jwt and add a req.body on all request sent to /api
app.use('/api', expressJwt({ secret: process.env.SECRET }));
app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return res.send({ message: err.message });
});

//routes
app.use('/auth', require('./routes/auth'));
app.use(expressJwt({ secret: process.env.SECRET }).unless({ method: 'GET' }));

//internal admin routes
app.use('/', express.static(path.join(__dirname, "client", "build")))
app.use('/admin', express.static(path.join(__dirname, "admin", "build")))

app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, "admin", "build", "index.html"))
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


//start server
app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});