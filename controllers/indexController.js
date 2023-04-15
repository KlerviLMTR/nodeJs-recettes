// const path = require("path");
// const app = require("../app.js");
let ingredientService = require('../services/IngredientService')

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  
  let ingredientTrouves = ingredientService.voirTousLesIngredients(); 

  res.render('index', { ingredients: ingredientTrouves });

});

module.exports = router;