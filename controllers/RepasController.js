const express = require('express');
const router = express.Router();
const repasService = require('../services/RepasService')

router.get('/', function(req, res, next) {
  
    // let ingredientTrouves = recetteService.voirTousLesIngredients(); 
  
    res.render('repas');
  
  });
  
  module.exports = router;
// const express = require('express'); ANCIEN
// const router = express.Router();
// let recetteService = require('../services/RecetteService')

// exports.router = router;

// // GET ALL
// exports.all=(req,res)=>{
//     sql = "SELECT recette.intitule, repas.nbconvives, dater FROM repas, recette WHERE recette.idrecette = repas.idrecette";
//     connexion.query(sql, (err, data)=>{
//         if (err)
//             return res.json(err)
//         else
//             return res.json(data)
//     })
// }

// // GET WITH ID
// exports.get = (req, res) => {

//     const id = req.params.id;
//     const sql = 'select * from recette where idrecette="' + id + '";';
//     connexion.query(sql, (err, data) => {
//         if (err)
//             return res.json(err);
//         else
//             return res.json(data);
//     });
// };
// // // INSERT
// // exports.insert = (req, res)=>{
// //     const data = req.body
// //     const intitule = data["intitule"];
// //     const nbCouverts = data["nbCouverts"];
// //     const deroule = data["deroule"];
// //     sql = 'insert into recette values (null,"'+intitule+'","'+nbCouverts+'","'+deroule+'");';
// //     connexion.query(sql, (err, data) => {
// //         if (err)
// //             return res.json(err);
// //         else
// //             return res.json(data);
// //     });
// // }

// // // UPDATE
// // exports.update = (req, res)=>{
// //     const id = req.params.id;
// //     const data = req.body
// //     const intitule = data["intitule"];
// //     const nbCouverts = data["nbCouverts"];
// //     const deroule = data["deroule"];
// //     sql = 'update recette set intitule="'+intitule+'", nbCouverts = "'+nbCouverts+'", deroule = "'+deroule+'" where idRecette='+id+';';
// //     connexion.query(sql, (err, data) => {
// //         if (err)
// //             return res.json(err);
// //         else
// //             return res.json(data);
// //     });
// // }

// // // DELETE
// // exports.delete = (req, res)=>{
// //     const id = req.params.id
// //     sql = 'delete from recette where idRecette ="'+id+'";';
// //     connexion.query(sql, (err, data) => {
// //         if (err)
// //             return res.json(err);
// //         else
// //             return res.json(data);
// //     });
// // }


