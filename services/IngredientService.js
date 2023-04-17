class IngredientService {

    #miamService;

    constructor(miamService) {
        this.#miamService = miamService;
    }

    voirTousLesIngredients () {
        return this.#miamService.voirTousLesIngredients();
    }
    
}
let miamService = require('./MiamService');
module.exports = new IngredientService(miamService)