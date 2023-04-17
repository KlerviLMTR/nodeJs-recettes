  const express = require('express');
  const router = express.Router();

  let ingredientService = require('../services/IngredientService')

  router.get('/', function(req, res, next) {

    let callback = (listeDesIngredients)=>{
      res.send(listeDesIngredients);
    }
    ingredientService.voirTousLesIngredients(callback); 

    //  res.render('ingredients', { ingredients: ingredientTrouves });
     

  });

  module.exports = router;
