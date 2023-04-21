class IngredientService {

    #miamService;

    constructor(miamService) {
        this.#miamService = miamService;
    }

        voirTousLesIngredients  = (callback) => {
           
            return this.#miamService.voirTousLesIngredients(callback);
        }

        supprimerIngredient  = (id, callback) => {
            return this.#miamService.supprimerIngredient(id, callback);
        }

        ajouterIngredient = (nom, prix, unite, callback) =>{
            return this.#miamService.ajouterIngredient(nom,prix,unite, callback)
        }

        voirFicheIngredient = (id, callback) => {
            
            return this.#miamService.voirFicheIngredient(id, callback);
        }
        
        majIngredient = (id, nom, prix, unite, callback) => {
            return this.#miamService.majIngredient(id, nom, prix, unite, callback);

        }


   
    
}
const { json } = require('body-parser');
let miamService = require('./MiamService');
module.exports = new IngredientService(miamService)