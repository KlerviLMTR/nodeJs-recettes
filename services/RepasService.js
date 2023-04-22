class RepasService {

    #miamService;

    constructor(miamService) {
        this.#miamService = miamService;
    }

    voirTousLesRepas = (callback) =>{
        return this.#miamService.voirTousLesRepas(callback);
    }

    recupererRecettes = (callback) => {
        return this.#miamService.voirToutesLesRecettes(callback);
    }

    creerRepas = (idRecette, date, nbConvives, callback) => {
            return this.#miamService.creerRepas(idRecette, date, nbConvives, callback);
    }

    
}

let miamService = require('./MiamService');
module.exports = new RepasService(miamService)