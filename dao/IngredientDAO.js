let Ingredient = require('../models/Ingredient')

class IngredientDAO {

    voirTousLesIngredients = () => {

        const sql = "SELECT nom FROM ingredient ORDER BY nom;";

        return [new Ingredient("ingredient 1"), new Ingredient("ingredient 2"), new Ingredient("ingredient 3")];
    }
    
}

// ici j'exporte la classe instanciée
// je vais donc pouvoir utiliser ses fonctions directement sans avoir à la réinstancier partout
module.exports = new IngredientDAO();