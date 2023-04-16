
class Ingredient {

    constructor(nom,cout,unite,img) {
        this.nom = nom;
        this.cout = cout;
        this.unite = unite;
        this.img = img;
    }
}

//Export de la classe non instanciee dans les modules
module.exports = Ingredient