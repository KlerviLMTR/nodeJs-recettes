
class MiamService {
    
    // le # permet de rendre l'attribut privé, oui oui on peut !
    #ingredientDAO;

    constructor(ingredientDAO) {
        this.#ingredientDAO = ingredientDAO;
    }

    voirTousLesIngredients = () => {
        return this.#ingredientDAO.voirTousLesIngredients()
    }
}
// Export du service dans les modules, instancie pour qu'il soit accessible partout en permanence.
let ingredientDAO = require('../dao/IngredientDAO')
module.exports = new MiamService(ingredientDAO)