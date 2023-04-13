const { resolveObjectURL } = require('buffer');
const express = require('express');
const router = express.Router();
const path = require("path");
const ingredientController = require('../controllers/IngredientController');
const recetteController = require('../controllers/RecetteController');
const repasController = require('../controllers/RepasController');

// Accueil
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

// --- LES INGREDIENTS ---
router.get('/ingredient', (req,res)=>{
    ingredientController.all(req,res);
})

/* Cette route permet de traiter 2 types d'opération CRUD : l'aperçu simple d'un ingredient
ou sa suppression, selon qu'une action "DELETE" ait été transmise ou non
*/
router.get('/ingredient/:id', (req,res)=>{

    const action = req.query.action;
    if (action === 'DELETE') {
        // traitement de la requête POST pour /ingredient/:id?action=UPDATE
         ingredientController.delete(req,res);
    } else {
        // Dans ce cas c'est un get classique
        ingredientController.get(req,res);
    }
})
/* On simule une requete PUT en utilisant la methode POST avec une action de specifiee sur un id
*/
router.post('/ingredient/:id', (req,res,next)=>{
    const action = req.query.action;
    if (action === 'UPDATE') {
        // traitement de la requête POST pour /ingredient/:id?action=UPDATE
         ingredientController.update(req,res);
    }
})

router.post('/ingredient/', (req,res,next)=>{
    const action = req.query.action;
    ingredientController.insert(req,res);

})

// --- LES RECETTES ---


router.get('/recettes', (req, res, next)=>{
    recetteController.all(req,res);
})
// ROUTE GET / DELETE
router.get('/recettes/:id',(req,res,next)=>{
    const action = req.query.action ;
    if(action == "DELETE"){
        // traitement de la requête GET pour /recette/:id?action=DELETE
        recetteController.delete(req,res);
    }
    else{
        //Sinon get simple 
        recetteController.get(req,res);
    }
})

// ROUTE UPDATE
router.post('/recettes/:id',(req,res,next)=>{
    const action = req.query.action ;
    if(action == "UPDATE"){
        // traitement de la requête POST pour /recette/:id?action=UPDATE
        recetteController.update(req,res);
    }
})

// ROUTE INSERT
router.post('/recettes', (req,res,next)=>{
    recetteController.insert(req,res);
})
module.exports = router; 


// --- LES REPAS ---

router.get('/repas', (req, res, next)=>{
    repasController.all(req,res);
})



// --- LE USER ---

/* Pour cette partie, on choisit de ne permettre au user que de se renommer et de visualiser sa fiche
(pas de système d'authentification, user unique)
*/

