
class Ingredient {

    constructor(nom,cout,unite) {
        this.nom = nom;
        this.cout = cout;
        this.unite = unite;
    }
}

//Export de la classe non instanciee dans les modules
module.exports = Ingredient