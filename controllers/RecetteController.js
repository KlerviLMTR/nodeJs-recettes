const express = require('express');
const recetteService = require('../services/RecetteService')
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));


router.get('/', function(req, res, next) {
  res.render('recettes');
  // let callback = (listeDesRecettes)=>{
    // res.render('recettes', { recettes: listeDesRecettes });
  // }

  // recetteService.voirToutesLesRecettes(callback); 
});

router.get('/creer',function(req,res,next){
  //Ici on va devoir faire appel au service ingredientDAO pour fetch tous les ingredients necessaires a
  //la création des recettes

  let callback = (ingredients) =>{
    res.render('fiche-recette', {ingredients : ingredients})
  }
  recetteService.recupererIngredients(callback);
});

  
  module.exports = router;