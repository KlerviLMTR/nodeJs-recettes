
class Repas {

    constructor(recette,date,nbConvives,cout, cetteSemaine) {
        this.recette = recette;
        this.date = date;
        this.nbConvives = nbConvives;
        this.cout = cout;
        this.cetteSemaine = cetteSemaine;
    }
}

//Export de la classe non instanciee dans les modules
module.exports = Repas;