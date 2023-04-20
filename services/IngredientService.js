const Ingredient = require('../models/Ingredient');
class IngredientService {

    #miamService;

    constructor(miamService) {
        this.#miamService = miamService;
    }

        voirTousLesIngredients  = (callback) => {
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
            return this.#miamService.voirTousLesIngredients(callbackIntermediaire);
        }

        supprimerIngredient  = (id, callback) => {
            //Construire le tableau qui contiendra tous les modeles ingredient
          
            return this.#miamService.supprimerIngredient(id, callback);
        }
   
    
}
const { json } = require('body-parser');
let miamService = require('./MiamService');
module.exports = new IngredientService(miamService)