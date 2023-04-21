const express = require('express');
const recetteService = require('../services/RecetteService')
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));


router.get('/', function(req, res, next) {
  let callback = (listeDesRecettes,listeDesIngredients)=>{
    // console.log(listeDesRecettes[0][intitule])
    res.render('recettes', { recettes: listeDesRecettes });
  }

  recetteService.voirToutesLesRecettes(callback); 
});

router.get('/creer',function(req,res,next){

  let callback = (ingredients) =>{
    res.render('fiche-recette', {ingredients : ingredients})
  }
  recetteService.recupererIngredients(callback);
});

  
  module.exports = router;