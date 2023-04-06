const express = require('express');
const { log } = require('console');
const path = require("path");
const app = express();
const routesApp = require('./routes/routes');
const router = express.Router();

const dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env')
});

//port par defaut pour nodejs
const port = process.env.NODE_PORT;

const mysql = require('mysql');
const connexion = mysql.createConnection({
    host: 'localhost',
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME
})

app.listen(port, () => {
    log('app lancée sur le port ' + port);
})

app.use(routesApp, router);
