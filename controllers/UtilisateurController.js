const express = require('express');
const router = express.Router();
let miamService = require('../services/MiamService')
let ingredientService = require('../services/IngredientService')

router.get('/utilisateur', function(req, res, next) {
  
    // res.send("COUCOU TOTO");
    res.render('index', { ingredients: ingredientTrouves });
  
  });
exports.router = router;