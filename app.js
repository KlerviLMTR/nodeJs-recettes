    const express = require('express');
    const createError = require('http-errors');
    const { log } = require('console');
    const path = require("path");
    const app = express();
    const bodyParser = require('body-parser')
    app.use(bodyParser.json());
    const indexRouter = require('./controllers/indexController');
    const ingredientRouter = require('./controllers/IngredientController');

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    // const router = express.Router();

    app.use('/', indexRouter);

    const dotenv = require('dotenv').config({
        path: path.join(__dirname, '.env')
    });

    //port par defaut pour nodejs
    const port = process.env.NODE_PORT;

    const mysql = require(process.env.DB_VER);
    connexion = mysql.createConnection({
        host: 'localhost',
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWD,
        database: process.env.DB_NAME
    })
    module.exports = connexion; 

    app.listen(port, () => {
        log('app lancée sur le port ' + port);
    })

    module.exports = app;
