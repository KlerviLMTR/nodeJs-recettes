class RecetteService {

    #miamService;

    constructor(miamService) {
        this.#miamService = miamService;
    }


    
}
let miamService = require('./MiamService');
module.exports = new RecetteService(miamService)