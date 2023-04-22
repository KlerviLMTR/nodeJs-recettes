
class RecetteService {

    #miamService;

    constructor(miamService) {
        this.#miamService = miamService;
    }

    recupererIngredients = (callback) => {
            return this.#miamService.voirTousLesIngredients(callback);
    }

    voirToutesLesRecettes  = (callback) => {
        return this.#miamService.voirToutesLesRecettes(callback);
    }
    creerRecette = (recette, callback) =>{
        this.#miamService.creerRecette(recette,callback);
    }

    supprimerIngredient = (id,callback) => {
        this.#miamService.supprimerRecette(id,callback);
    }


    
}
let miamService = require('./MiamService');
module.exports = new RecetteService(miamService)