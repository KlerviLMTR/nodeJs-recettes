const express = require('express');
const router = express.Router();
const utilisateurService = require('../services/UtilisateurService')

router.get('/', function(req, res, next) {
  
    // let ingredientTrouves = recetteService.voirTousLesIngredients(); 
  
    res.render('utilisateur');
  
  });
  
  module.exports = router;