class RepasService {

    #miamService;

    constructor(miamService) {
        this.#miamService = miamService;
    }

    recupererRecettes = (callback) => {
        return this.#miamService.voirToutesLesRecettes(callback);
    }

    creerRepas = (recette, date, nbConvives, callback) => {
        return this.#miamService.creerRepas(idRecette, date, nbConvives, callback);
    }

    
}

let miamService = require('./MiamService');
module.exports = new RepasService(miamService)