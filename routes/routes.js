const { resolveObjectURL } = require('buffer');
const express = require('express');

const router = express.Router();

const path = require("path");
const ingredientController = require('../controllers/IngredientController');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

// --- LES INGREDIENTS ---
router.get('/ingredient', (req,res)=>{
    ingredientController.all(req,res);
})

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

router.post('/ingredient/:id', (req,res,next)=>{
    const action = req.query.action;
    if (action === 'UPDATE') {
        // traitement de la requête POST pour /ingredient/:id?action=UPDATE
         ingredientController.update(req,res);
    } else {
        // Dans ce cas c'est un insert classique
        ingredientController.insert(req,res);
    }
})


// router.post('/ingredient/:id?action=UPDATE', (req,res)=>{
//     const action = req.query.action;
 
//     // ingredientController.update(req,res);
// })

module.exports = router; 