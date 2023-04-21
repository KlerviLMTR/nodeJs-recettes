  const express = require('express');
  const router = express.Router();

  let ingredientService = require('../services/IngredientService')

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

  })

  module.exports = router;
