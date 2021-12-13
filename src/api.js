const express = require('express');
require('dotenv').config(); //dotenv importeren
const mongoose = require('mongoose');
const serverless = require('serverless-http');

const app = express(); //bevat express Server
const router = require('./routes');


app.use(express.json());
app.use('/.netlify/functions/api', router);

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.handler = serverless(app);