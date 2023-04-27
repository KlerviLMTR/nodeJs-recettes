const express = require('express');
const router = express.Router();
const miamService = require('../services/MiamService');

router.get('/', function(req, res, next) {

     let callback = (listeIngredients) =>{

          res.render('courses', {listeIngredients:listeIngredients});
     }
     return miamService.recupererIngredientsRepasAVenir(callback)
});

module.exports = router;
