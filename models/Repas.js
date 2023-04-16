
class Repas {

    constructor(recette,date,nbConvives) {
        this.recette = recette;
        this.date = date;
        this.nbConvives = nbConvives;
    }
}

//Export de la classe non instanciee dans les modules
module.exports = Repas