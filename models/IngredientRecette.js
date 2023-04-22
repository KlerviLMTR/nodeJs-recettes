
class IngredientRecette {

    constructor(quantite,ingredient) {
        this.ingredient=ingredient;
        this.quantite=quantite;
    }
}

//Export de la classe non instanciee dans les modules
module.exports = IngredientRecette