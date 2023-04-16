class UtilisateurService {

    #miamService;

    constructor(miamService) {
        this.#miamService = miamService;
    }


    
}

let miamService = require('./MiamService');
module.exports = new UtilisateurService(miamService)