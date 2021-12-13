const express = require('express');
require('dotenv').config(); //dotenv importeren
const mongoose = require('mongoose');

const app = express(); //bevat express Server
const router = require('./routes');


app.use(express.json());
app.use(router);

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Succesfully connected to the database!');
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Server is up and running on PORT ${process.env.SERVER_PORT}`)
        })
    })
    .catch((e) => console.error(`Failed to connect to database. Error: ${e}`));