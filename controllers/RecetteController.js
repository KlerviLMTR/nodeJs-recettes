const express = require('express');
const router = express.Router();
const recetteService = require('../services/RecetteService')

router.get('/', function(req, res, next) {
  
  
    res.render('recettes');
  
  });
  
  module.exports = router;