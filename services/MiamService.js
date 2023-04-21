let ingredientDAO = require('../dao/IngredientDAO')
let recetteDAO = require('../dao/RecetteDAO')
let repasDAO = require('../dao/RepasDAO')
let utilisateurDAO = require('../dao/UtilisateurDAO')
const Ingredient = require('../models/Ingredient');
const Repas = require('../models/Repas');
const Recette = require('../models/Recette');


class MiamService {
    
    constructor() {

    }

    voirTousLesIngredients = (callback) => {
         //Construire le tableau qui contiendra tous les modeles ingredient
         let callbackIntermediaire = (jsonDAO) =>{
            let ingredients = [];
            for(let i = 0; i < jsonDAO.length ; i++){
                const ingredient = new Ingredient(jsonDAO[i].idIng, jsonDAO[i].nom,null,null, jsonDAO[i].img, null);
                ingredients.push(ingredient);

            }
              //Appel au callback DAO
              callback(ingredients);
            //
        }
        return ingredientDAO.voirTousLesIngredients(callbackIntermediaire);
    }

    supprimerIngredient  = (id, callback) => {
       
        return ingredientDAO.supprimerIngredient(id, callback);
    }

    ajouterIngredient = (nom, prix, unite, callback) => {
        return ingredientDAO.ajouterIngredient(nom, prix,unite, callback);
    }

    voirFicheIngredient = (id, callback) => {
        let callbackIntermediaire = (ingredientJSON) => {
            const ingredient = new Ingredient(ingredientJSON[0].idIng, ingredientJSON[0].nom, ingredientJSON[0].cout, ingredientJSON[0].unite, ingredientJSON[0].img);
            callback(ingredient);
        }
        return ingredientDAO.voirFicheIngredient(id, callbackIntermediaire);
    }

    toString(){
        return "je suis le service principal de l'application !";
    }

    majIngredient(id, nom, prix, unite, callback){
        return ingredientDAO.majIngredient(id, nom, prix, unite, callback);
    }


}


module.exports = new MiamService(ingredientDAO, recetteDAO, repasDAO, utilisateurDAO)