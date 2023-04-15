const express = require('express');
const router = express.Router();

let ingredientService = require('../services/IngredientService')

/* GET home page. */
// router.get('/', function(req, res, next) {
  
//   let ingredientTrouves = ingredientService.voirTousLesIngredients(); 

//   res.render('ingredients', { ingredients: ingredientTrouves });

// });

module.exports = router;
