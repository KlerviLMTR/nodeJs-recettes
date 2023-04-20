  const express = require('express');
  const router = express.Router();

  let ingredientService = require('../services/IngredientService')

  router.get('/', function(req, res, next) {

    let callback = (listeDesIngredients)=>{
      res.render('ingredients', { ingredients: listeDesIngredients });

      
    }

    ingredientService.voirTousLesIngredients(callback); 

    //  res.render('ingredients', { ingredients: ingredientTrouves });
     

  });

  router.get('/:id', function(req,res,next){
    const id = req.params.id;
    const action = req.query.action;
    
    if (action == 'DELETE') {
      let callback = (data) =>{
        res.send(data);
      };
      ingredientService.supprimerIngredient(id,callback); 

    }
    
    //


  })

  module.exports = router;
