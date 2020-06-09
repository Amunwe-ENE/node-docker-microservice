'use strict';
//require express
const express = require('express');
const mongoose = require('mongoose');   //  Importing the mongoose package.
const bodyParser = require('body-parser'); // require body-parser


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//  Connect to MongoDB using Mongoose.
mongoose.connect("PLEASE INPUT YOUR MONGODB URL HERE", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
/*
*   Please NOTE in Line 11 or so, where you have => mongoose.connect("PLEASE INPUT YOUR MONGODB URL HERE"...
*   Don't forget to put in your MONGODB URL.
* */
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


global.appRoot = __dirname;

const app = express();
//  parse JSON-encoded bodies and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const base = '/api'

const routes = require('./api/routes');
routes(app,base);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);