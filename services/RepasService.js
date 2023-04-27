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

    supprimerRepas = (idRepas, callback)=>{
        return this.#miamService.supprimerRepas(idRepas,callback);
    }

    voirFicheRepas = (idRepas, callback)=>{
        return this.#miamService.voirFicheRepas(idRepas,callback);
    }

    
}

let miamService = require('./MiamService');
module.exports = new RepasService(miamService)