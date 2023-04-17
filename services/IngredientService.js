class IngredientService {

    #miamService;

    constructor(miamService) {
        this.#miamService = miamService;
    }

        voirTousLesIngredients  = (callback) => {
            return this.#miamService.voirTousLesIngredients(callback);
        }

   
    
}
let miamService = require('./MiamService');
module.exports = new IngredientService(miamService)