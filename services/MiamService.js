
class MiamService {
    
    // le # permet de rendre l'attribut privé, oui oui on peut !
    #ingredientDAO;
    #recetteDAO;
    #repasDAO;
    #utilDAO

    constructor(ingredientDAO, recetteDAO, repasDAO, utilDAO) {
        this.#ingredientDAO = ingredientDAO;
        this.#recetteDAO = recetteDAO;
        this.#repasDAO = repasDAO;
        this.#utilDAO = utilDAO;

    }

    voirTousLesIngredients = (id, callback) => {
        return this.#ingredientDAO.voirTousLesIngredients(id, callback);
    }

    supprimerIngredient  = (id, callback) => {
       
        return this.#ingredientDAO.supprimerIngredient(id, callback);
    }

    toString(){
        return "je suis le service principal de l'application !";
    }
}
// Export du service dans les modules, instancie pour qu'il soit accessible partout en permanence.
let ingredientDAO = require('../dao/IngredientDAO')
let recetteDAO = require('../dao/RecetteDAO')
let repasDAO = require('../dao/RepasDAO')
let utilisateurDAO = require('../dao/UtilisateurDAO')

module.exports = new MiamService(ingredientDAO, recetteDAO, repasDAO, utilisateurDAO)