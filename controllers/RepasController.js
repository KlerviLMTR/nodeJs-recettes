const express = require('express');
const router = express.Router();
const repasService = require('../services/RepasService');
const { recupererIngredients } = require('../services/RecetteService');
const { voirToutesLesRecettes } = require('../dao/RecetteDAO');
const bodyParser = require('body-parser');
const Repas = require('../models/Repas');
router.use(bodyParser.urlencoded({extended:true}));

router.get('/', function(req, res, next) {
  
    // let ingredientTrouves = recetteService.voirTousLesIngredients(); 
  
    res.render('repas');
  
  });

router.get('/creer', (req, res, next) =>{
  // On doit lui fournir les recettes
    let callback = (recettes) =>{
      res.render('fiche-repas', {recettes : recettes})
    }

  return repasService.recupererRecettes(callback);
})

router.post('/',(req,res,next)=>{

  console.log("BODY :" + JSON.stringify(req.body)+"FIN BODY ");
  let callback = () =>{
    res.render('repas');
  }
  //creer le repas

 return repasService.creerRepas(req.body.recettes,req.body.date,req.body.convives, callback);
})


  
  module.exports = router;
