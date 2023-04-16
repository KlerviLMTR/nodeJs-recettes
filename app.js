    //import de la lib express    
    const express = require('express');
    const { log } = require('console');
    const path = require("path");
    const bodyParser = require('body-parser')
    
    // Import des routeurs dont aura besoin l'application 
    // (choix de confondre routeurs et controleurs comme il s'agit d'une petite appli.)
    const indexRouter = require('./controllers/indexController');
    const ingredientRouter = require('./controllers/IngredientController');
    // const recetteRouter = require('./controllers/RecetteController');
    
    
    // demarrage d'express
    const app = express();
    
    // Pour le traitement des résultats de requêtes
    //app.use(bodyParser.json());
    
    //Definition du routage poru bootstrap
    app.use(express.static(__dirname + 'public'));
    app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
    app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
    app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
    app.use('/css-custom', express.static(path.join(__dirname, 'public/css')));
    app.use('/images', express.static(path.join(__dirname, 'public/img')));
    
    // Definition du repertoire de reference pour les vues "dynamiques" (template ejs)
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    
    
    // redirection vers les bons controleurs selon l'endpoint demande
    app.use('/', indexRouter);
    app.use('/ingredients', ingredientRouter);
    // app.use('/recettes', recetteRouter);
    
    
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
    
    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
    
    module.exports = app;
