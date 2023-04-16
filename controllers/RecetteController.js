var express = require('express');
var router = express.Router();
// let recetteService = require('../services/RecetteService')

router.get('/recettes', function(req, res, next) {
  
    // let ingredientTrouves = recetteService.voirTousLesIngredients(); 
  
    res.render('index');
  
  });
  
exports.router = router;