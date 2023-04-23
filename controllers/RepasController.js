const express = require('express');
const router = express.Router();
const repasService = require('../services/RepasService');
const { recupererIngredients } = require('../services/RecetteService');
const { voirToutesLesRecettes } = require('../dao/RecetteDAO');
const bodyParser = require('body-parser');
const Repas = require('../models/Repas');
router.use(bodyParser.urlencoded({extended:true}));

router.get('/', function(req, res, next) {
    let callback = (listeRepas)=>{
      //Trier le tableau avant de l'envoyer dans la vue
      listeRepas.sort((a, b) => new Date(b.date) - new Date(a.date));
      console.log(listeRepas);
      res.render('repas',{repas:listeRepas})

    }
    return repasService.voirTousLesRepas(callback);
  });

router.get('/creer', (req, res, next) =>{
  // On doit lui fournir les recettes
    let callback = (recettes) =>{

 
      res.render('fiche-repas', {recettes : recettes})
    }

  return repasService.recupererRecettes(callback);
})

router.post('/',(req,res,next)=>{

  let callback = () =>{
    res.render('repas');
  }
  //creer le repas

 return repasService.creerRepas(req.body.recettes,req.body.date,req.body.convives, callback);
})




  
  module.exports = router;
