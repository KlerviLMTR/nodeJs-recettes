    //import de la lib express    
    const express = require('express');
    const { log } = require('console');
    const path = require("path");
    const bodyParser = require('body-parser')
    
    // Import des routeurs dont aura besoin l'application 
    // (choix de confondre routeurs et controleurs comme il s'agit d'une petite appli.)
    const indexRouter = require('./controllers/indexController');
    const ingredientRouter = require('./controllers/IngredientController');
    const recetteRouter = require('./controllers/RecetteController');
    const repasRouter = require('./controllers/RepasController');
    const coursesRouter = require('./controllers/CoursesController');
    const utilisateurRouter = require('./controllers/UtilisateurController');

    
    // demarrage d'express
    const app = express();
    
    
    //Definition du routage pour bootstrap (je le laisse pour plus tard si conception d'une appli
    // avec import de modules)
    // app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
    // app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
    // app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
    
    //Definition du routage pour les ressources internes
    app.use(express.static(__dirname + 'public'));
    app.use('/css', express.static(path.join(__dirname, 'public/css')));
    app.use('/images', express.static(path.join(__dirname, 'public/img')));
    app.use('/js_custom', express.static(path.join(__dirname, 'public/js')));

    // Definition du repertoire de reference pour les vues "dynamiques" (template ejs)
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    

    // redirection vers les bons controleurs selon l'endpoint demande
    app.use('/', indexRouter);
    app.use('/ingredients', ingredientRouter);
    app.use('/recettes', recetteRouter);
    app.use('/repas', repasRouter);
    app.use('/liste', coursesRouter);
    app.use('/utilisateur', utilisateurRouter);

    const dotenv = require('dotenv').config({
        path: path.join(__dirname, '.env')
    });
    
    //port par defaut pour nodejs
    const port = process.env.NODE_PORT;
    
    mysql = require(process.env.DB_VER);
    connexion = mysql.createConnection({
        host: 'localhost',
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWD,
        database: process.env.DB_NAME,
        multipleStatements: true // Desactive de base 

    })
    connexion.connect();
    
    app.listen(port, () => {
        log('app lancée sur le port ' + port);
    })
    
    // error handler
    app.use(function(err, req, res, next) {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });


    
    module.exports = app

   

