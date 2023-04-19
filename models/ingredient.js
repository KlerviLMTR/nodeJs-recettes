
class Ingredient {

    constructor(id,nom,cout,unite,img) {
        this.id = id;
        this.nom = nom;
        this.cout = cout;
        this.unite = unite;
        this.img = img;
    }
}

//Export de la classe non instanciee dans les modules
module.exports = Ingredient