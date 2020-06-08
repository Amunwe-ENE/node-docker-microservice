'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const baseURL = '/api'
const routes = require('./api/routes');
routes(app,baseURL);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);