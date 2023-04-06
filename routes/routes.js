const express = require('express');
const router = express.Router();
const recetteController = require('./recetteController');

router.get('/recette', recetteController.listeRecettes);
router.get('/recette/:id', recetteController.afficherRecette);
router.post('/recette', recetteController.creerRecette);
router.post('/recette/:id?action=UPDATE', recetteController.modifierRecette);
router.post('/recette/:id?action=DELETE', recetteController.supprimerRecette);

module.exports = router;