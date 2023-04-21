
class RecetteService {

    #miamService;

    constructor(miamService) {
        this.#miamService = miamService;
    }

    recupererIngredients = (callback) => {
            return this.#miamService.voirTousLesIngredients(callback);
    }

    // voirToutesLesRecettes  = (callback) => {
    //     //Construire le tableau qui contiendra tous les modeles ingredient
    //     let callbackIntermediaire = (jsonDAO) =>{
    //         let recettes = [];
    //         for(let i = 0; i < jsonDAO.length ; i++){
    //             const recette = new Recette(id=jsonDAO[i].id, nbCouverts=jsonDAO[i].nbCouverts);
    //             recettes.push(recette);

    //         }
    //           //Appel au callback DAO
    //           callback(ingredients);
    //         //
    //     }
    //     return this.#miamService.voirTousLesIngredients(callbackIntermediaire);
    // }


    
}
let miamService = require('./MiamService');
module.exports = new RecetteService(miamService)