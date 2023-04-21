
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


    
}
let miamService = require('./MiamService');
module.exports = new RecetteService(miamService)