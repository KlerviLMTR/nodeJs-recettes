let Ingredient = require('../models/Ingredient')

class IngredientDAO {

    voirTousLesIngredients = () => {

        const sql = "SELECT nom FROM ingredient ORDER BY nom;";

        return [new Ingredient("ingredient 1"), new Ingredient("ingredient 2"), new Ingredient("ingredient 3")];
    }
    
}

module.exports = new IngredientDAO();