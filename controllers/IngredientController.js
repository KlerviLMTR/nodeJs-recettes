  const express = require('express');
  const router = express.Router();

  let ingredientService = require('../services/IngredientService')

  router.get('/', function(req, res, next) {
    
    let ingredientTrouves = ingredientService.voirTousLesIngredients(); 
  res.send(ingredientTrouves);
    //  res.render('ingredients', { ingredients: ingredientTrouves });
     

  });

  module.exports = router;
