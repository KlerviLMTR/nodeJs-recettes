
class Repas {

    constructor(id, recette,date,nbConvives,cout, cetteSemaine,estPasse) {
        this.id = id;
        this.recette = recette;
        this.date = date;
        this.nbConvives = nbConvives;
        this.cout = cout;
        this.cetteSemaine = cetteSemaine;
        this.estPasse = estPasse
    }
}

//Export de la classe non instanciee dans les modules
module.exports = Repas;