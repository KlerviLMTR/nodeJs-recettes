  const express = require('express');
  const router = express.Router();
  const bodyParser = require('body-parser');

  router.use(bodyParser.urlencoded({extended:true}));
  let ingredientService = require('../services/IngredientService');

  router.get('/', function(req, res, next) {

    let callback = (listeDesIngredients)=>{
      res.render('ingredients', { ingredients: listeDesIngredients });

      
    }

    ingredientService.voirTousLesIngredients(callback); 
  });

  router.get('/creer',function(req,res,next){
    res.render('fiche-ingredient');
  });

  router.get('/:id', function(req,res,next){
    const id = req.params.id;
    const action = req.query.action;
    
    if (action == 'DELETE') {
      let callback = (data) =>{
        res.redirect('/ingredients');
      };
      ingredientService.supprimerIngredient(id,callback); 
    }
    //Dans ce cas aperçu de la fiche ingrédient
    else {
      let callback = (ingredient) => {
        res.render('fiche-ingredient-id', {ingredient:ingredient});
      }
      ingredientService.voirFicheIngredient(id,callback);
    }
  })

  router.post('/', function(req,res,next){
    const nom = req.body.nom;
    const prix = req.body.prix;
    const unite = req.body.unitRadio;
    callback = (data) => {
      res.redirect('/ingredients');
    }
    ingredientService.ajouterIngredient(nom,prix,unite, callback)

  })

  router.post('/:id', function(req,res,next){
    const id = req.body.id;
    const nom = req.body.nom;
    const prix = req.body.prix
    const unite = req.body.unitRadio;

    callback = (data)=>{
      res.redirect('/ingredients');
    }
    ingredientService.majIngredient(id, nom, prix, unite, callback)
  })

  module.exports = router;
