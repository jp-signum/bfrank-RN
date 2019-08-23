const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const unless = require('express-unless')

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/raveNailz'
const path = require('path')
const PORT = process.env.PORT || 5000
const sslRedirect = require('heroku-ssl-redirect')

//cloudinary configurations
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

//set up middlewares
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp'
}));

// enable ssl redirect
app.use(sslRedirect());

//connect to db
mongoose.set('useCreateIndex', true);
mongoose.connect(url,
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log('Connected to the database');
    }
);

// //decode jwt and add a req.body on all request sent to /api
app.use('/api/store', expressJwt({ secret: process.env.SECRET }).unless({ method: 'GET' }));

//routes
app.use('/auth', require('./routes/auth'));
app.use('/api/store', require('./routes/store'));
app.use('/api/store/nails', require('./routes/store'));
app.use('/api/email', require('./routes/email'));
app.use('/api/inventory', require('./routes/inventory'));
app.use(expressJwt({ secret: process.env.SECRET }).unless({ method: 'GET' }));

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return res.send({ message: err.message });
});


//internal admin routes and SSR
app.use('/', express.static(path.join(__dirname, 'client', 'build')))
app.use('/admin', express.static(path.join(__dirname, 'admin', 'build')))

app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin', 'build', 'index.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

//start server
app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});