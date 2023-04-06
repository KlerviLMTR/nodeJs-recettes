const { resolveObjectURL } = require('buffer');
const express = require('express');
const router = express.Router();
const path = require("path");
const ingredientController = require('../controllers/IngredientController.js');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.get('/ingredient', (req,res)=>{
    
})

module.exports = router; 