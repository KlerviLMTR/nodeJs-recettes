const express = require('express');
const recetteService = require('../services/RecetteService')
const router = express.Router();
const bodyParser = require('body-parser');
const Recette = require('../models/Recette')
const Ingredient = require('../models/Ingredient')
const IngredientRecette = require('../models/IngredientRecette')

router.use(bodyParser.urlencoded({extended:true}));


router.get('/', function(req, res, next) {
  let callback = (listeDesRecettes)=>{
    console.log(listeDesRecettes[0].tabIng[0])
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

router.post('/', (req,res,next)=>{

    console.log("BODY"+JSON.stringify(req.body, null, 2)+"FIN BODY")
    //Construire le tableau d'ingredientRecette a partir du formulaire
    const nbIng = req.body.ingredients.length;
    let tabIngRecette = [];
    for(let i=0; i<nbIng; i++){
      tabIngRecette[i] = new IngredientRecette(req.body.quantite[i],new Ingredient (req.body.ingredients[i]));
    }
    console.log(tabIngRecette);
    

    let recette = new Recette(null, req.body.nom, req.body.couverts,req.body.instructions, tabIngRecette,"/images/defaultR.svg");

    let callback = () =>{

      let callback = (listeDesRecettes)=>{
        res.render('recettes', { recettes: listeDesRecettes });
      }
      
      recetteService.voirToutesLesRecettes(callback); 
    }
    recetteService.creerRecette(recette, callback);
});

router.get('/:id',(req,res,next)=>{
  const id = req.params.id;
  const action = req.query.action;

  // Traiter le delete
  if (action == 'DELETE') {
    let callback = (data) =>{
      res.redirect('/recettes');
    };
    recetteService.supprimerIngredient(id,callback); 
  }
  else{
    //Visu simple
    let callback = (recette) =>{
      res.render('fiche-recette-id', {recette:recette});
    }
    recetteService.voirFicheRecette(id,callback);

  }
  
})


  
  module.exports = router;