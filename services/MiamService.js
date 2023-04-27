let ingredientDAO = require('../dao/IngredientDAO')
let recetteDAO = require('../dao/RecetteDAO')
let repasDAO = require('../dao/RepasDAO')
const Ingredient = require('../models/Ingredient');
const Repas = require('../models/Repas');
const Recette = require('../models/Recette');
const IngredientRecette = require('../models/IngredientRecette');
// const RecetteDAO = require('../dao/RecetteDAO');

class MiamService {
    
    constructor() {
        
    }
    
    voirTousLesIngredients = (callback) => {
        //Construire le tableau qui contiendra tous les modeles ingredient
        let callbackIntermediaire = (jsonDAO) =>{
            let ingredients = [];
            for(let i = 0; i < jsonDAO.length ; i++){
                const ingredient = new Ingredient(jsonDAO[i].idIng, jsonDAO[i].nom,jsonDAO[i].cout,jsonDAO[i].unite, jsonDAO[i].img, null);
                ingredients.push(ingredient);
                
            }
            //Appel au callback DAO
            callback(ingredients);
            
        }
        return ingredientDAO.voirTousLesIngredients(callbackIntermediaire);
    }
    
    supprimerIngredient  = (id, callback) => {
        
        return ingredientDAO.supprimerIngredient(id, callback);
    }
    
    ajouterIngredient = (nom, prix, unite, callback) => {
        return ingredientDAO.ajouterIngredient(nom, prix,unite, callback);
    }
    
    voirFicheIngredient = (id, callback) => {
        let callbackIntermediaire = (ingredientJSON) => {
            const ingredient = new Ingredient(ingredientJSON[0].idIng, ingredientJSON[0].nom, ingredientJSON[0].cout, ingredientJSON[0].unite, ingredientJSON[0].img);
            callback(ingredient);
        }
        return ingredientDAO.voirFicheIngredient(id, callbackIntermediaire);
    }
    
    toString(){
        return "je suis le service principal de l'application !";
    }
    
    majIngredient(id, nom, prix, unite, callback){
        return ingredientDAO.majIngredient(id, nom, prix, unite, callback);
    }
    
    //  -------- RECETTES ----------
    

    voirToutesLesRecettes = (callback) =>{
        let callbackIntermediaire = (jsonDAO) =>{
            let recettes = [];
          
            //Parcourir les recettes
            for(let i = 0; i < jsonDAO.length ; i++){
                let recette = this.ajouterRecette(recettes, new Recette(jsonDAO[i].idrecette,jsonDAO[i].intitule, jsonDAO[i].nbcouverts,jsonDAO[i].deroule, [], jsonDAO[i].img ));         
                this.construireIngredientRecette(recette, jsonDAO[i]);
            }   
            callback(recettes);      
        }
        recetteDAO.voirToutesLesRecettes(callbackIntermediaire);
    }
    

    ajouterRecette = (tabRecettes, recette) => {
        //Verif presence recette
        let recettePresente = false ;
        let result = recette ;
        for(let i=0; i<tabRecettes.length && !recettePresente; i++){
            if(recette.id == tabRecettes[i].id){
                recettePresente = true;
                result = tabRecettes[i];
            }
        }
        if (!recettePresente){
            tabRecettes.push(recette);
        }
        return result;
    }

    construireIngredientRecette = (recette, jsonDAOIngredients) =>{
        let ingredient = new IngredientRecette(new Ingredient(jsonDAOIngredients.quantite,jsonDAOIngredients.idIng, jsonDAOIngredients.nom, jsonDAOIngredients.cout, jsonDAOIngredients.unite, jsonDAOIngredients.imgIng));       
        recette.tabIng.push(ingredient);
    }

    creerRecette = (recette, callback) =>{
        recetteDAO.creerRecette(recette,callback);
    }

    supprimerRecette = (id, callback)=>{
        recetteDAO.supprimerRecette(id, callback);
    }

    voirFicheRecette = (id, callback) =>{
        let callbackIntermediaire = (recetteOK) => {
            callback(recetteOK);
        }
        return recetteDAO.voirFicheRecette(id, callbackIntermediaire);
    }

    // -------- POUR LES REPAS -------------

    //me suis embrouillee , c'est pour la visu
    // creerRepas = (idRecette, date, nbConvives,callback) => {
  
    // }

    creerRepas = (idRecette, date, nbConvives,callback) => {
        //construire la recette. on va utiliser la DAO recette pour la recuperer
        repasDAO.creerRepas(idRecette, date, nbConvives,callback);
    }

    voirTousLesRepas = (callback)=>{

        let callbackIntermediaire = (jsonDAO) =>{

            let repasListe = [];
            for (let i=0;i<jsonDAO.length;i++){
                //Construire le repas avec juste une recette valorisee uniquement de son nom et son id
                let repas=new Repas(jsonDAO[i].idRepas, new Recette(jsonDAO[i].idrecette, jsonDAO[i].intitule, null,null,null,null),jsonDAO[i].dater,jsonDAO[i].nbconvives,0,false, false);
                //Verifier la date du repas, positionner estPasse a vrai si vrai
                let now = new Date();
                if(now > repas.date){
                    repas.estPasse=true;
                }
                repasListe.push(repas);
            }
            callback(repasListe);
        }
        repasDAO.voirTousLesRepas(callbackIntermediaire);
    }

    supprimerRepas = (id,callback)=>{
        repasDAO.supprimerRepas(id,callback);
    }

    voirFicheRepas = (idRepas,callbackInit) =>{
        //Recuperons d'abord le repas qui contient l'id de la recette a recuperer
        let callbackRecupRepas = (repasJsonDAO)=>{
            //construire le debut du repas
            let repas = new Repas(repasJsonDAO[0].idRepas, new Recette(repasJsonDAO[0].idrecette,null,null,null,null,null),repasJsonDAO[0].dater,repasJsonDAO[0].nbconvives,0,false,false);
            let now = new Date();
            if(now > repas.date){
                repas.estPasse=true;
            
            }
            //Preparer le callback pour recuperer les recettes
            let callBackRecupRecettes = (recetteJsonDAORecette) =>{
                //coonstruire la recette
                let recette = new Recette (recetteJsonDAORecette.id, recetteJsonDAORecette.intitule, recetteJsonDAORecette.nbCouverts, recetteJsonDAORecette.deroule, [], recetteJsonDAORecette.img)
                //Construire le tableau d'ingredients

                for (let i=0; i<recetteJsonDAORecette.tabIng.length; i++){
                  let ingredientRecette = new IngredientRecette(recetteJsonDAORecette.tabIng[i].quantite, new Ingredient(recetteJsonDAORecette.tabIng[i].ingredient.id, recetteJsonDAORecette.tabIng[i].ingredient.nom, recetteJsonDAORecette.tabIng[i].ingredient.cout, recetteJsonDAORecette.tabIng[i].ingredient.unite,recetteJsonDAORecette.tabIng[i].ingredient.img));
                  recette.tabIng.push(ingredientRecette);
                }

                //mettre recette dans repas
                repas.recette = recette;

                //Calcul des portions du repas selon le nb de convives et les proportions initiales de la recette 
                for (let i=0; i<repas.recette.tabIng.length; i++ ){
                    let quantiteIng = this.calculerProportionsIngredients(repas.nbConvives, recette.nbCouverts,recette.tabIng[i].quantite )
                    repas.recette.tabIng[i].quantite = quantiteIng;
                }
                 // calculer le cout du repas et le mettre en forme 
                repas.cout = Number(this.calculerCoutRepas(repas.recette.tabIng)).toFixed(2)
                callbackInit(repas);

            }
            recetteDAO.voirFicheRecette(repas.recette.id,callBackRecupRecettes)
            
        } 
        
        repasDAO.voirFicheRepas(idRepas, callbackRecupRepas);
    }

    calculerProportionsIngredients= (nbConvives, nbCouverts, quantiteIngRecette)=> {
        let nvelleQuantite = quantiteIngRecette * nbConvives /nbCouverts;
        return Number(nvelleQuantite).toFixed(2);
    }

    calculerCoutRepas = (tabIngRepas) =>{
        let totalCout = 0;
      
        for (let i=0;i<tabIngRepas.length;i++){
            let coutIng = tabIngRepas[i].ingredient.cout * tabIngRepas[i].quantite;
            //gerer les conversion d'unité
            if(tabIngRepas[i].ingredient.unite=="cL" ){
                coutIng = coutIng*0.00001
            }
            else if(tabIngRepas[i].ingredient.unite=="g" ){
                coutIng = coutIng*0.001

            }

            totalCout+=coutIng
        }

        return totalCout;
    }

    // -------------- POUR LA LISTE DE COURSES ----------

  
    recupererIngredientsRepasAVenir = (callback)=>{
        
        let callbackIntermediaire = (jsonTousLesRepas) =>{
            // Construire le tableau de promesses
            let mesPromesses = [];
            
            //Construire les vrais objets repas valorises a l'aide des promesses 
            for(let i = 0; i< jsonTousLesRepas.length;i++){
                let maPromesseRepas = new Promise((resolve)=>{
                    //Recuperer l'id du repas courant
                    let idRepas = jsonTousLesRepas[i].idRepas;
                    let callbackFicheRepas = (repasComplet)=>{
                        //Si ma callback s'est executee, alors resoudre la promesse
                        resolve(repasComplet);
                    }

                    this.voirFicheRepas(idRepas, callbackFicheRepas)
                })
                mesPromesses.push(maPromesseRepas);
            }
            Promise.all(mesPromesses).then((tabRepasComplets)=>{
                //Ne garder que les repas passes 
                let repasFiltres=[];
                for(let i=0;i<tabRepasComplets.length;i++){
                    let tabRepasFiltre =[]

                    if(tabRepasComplets[i].estPasse){
                        repasFiltres = tabRepasComplets.filter((r) => !r.estPasse);
                        
                    }
                }
                console.log("REPAS APRES FILTRE DATE :"+repasFiltres.length);
                //Travailler sur les repas restants
                console.log(repasFiltres[1]);
                
                //Creer le tableau json des ingredients a renvoyer
                let listeIngredients = [];
                console.log(repasFiltres[2])

                let listeCourses =[]

                repasFiltres.forEach((repas)=>{
                    this.enrichirListeDeCourses(listeCourses, repas.recette.tabIng)
                })
                //Oups j'avais oublie d'y mettre le nom..
                let reorgListe = Object.keys(listeCourses).map((cle)=>{
                    return {
                        nom: cle,
                        quantite: listeCourses[cle].quantite,
                        img: listeCourses[cle].img,
                        unite:listeCourses[cle].unite,
                        coutUnitaire:listeCourses[cle].coutUnitaire
                    }
                })
                console.log(reorgListe)
          

                callback(reorgListe)
            })
        }

        repasDAO.voirTousLesRepas(callbackIntermediaire)
    }

  

 
    enrichirListeDeCourses = (listeCourses, tabIngredients) =>{
        for (let i = 0; i < tabIngredients.length; i++) {
            let ingredient = tabIngredients[i].ingredient.nom
            if(listeCourses[ingredient]){
                console.log(listeCourses[ingredient]);
                listeCourses[ingredient].quantite = listeCourses[ingredient].quantite + parseInt(tabIngredients[i].quantite);
                console.log(listeCourses[ingredient])
            }
            else{
                console.log("ajout");
                listeCourses[ingredient] ={quantite: parseInt(tabIngredients[i].quantite),img:tabIngredients[i].ingredient.img, unite:tabIngredients[i].ingredient.unite, coutUnitaire:tabIngredients[i].ingredient.cout}
                console.log(listeCourses[ingredient]);
            }
        }
        return listeCourses;
    }



}

    


module.exports = new MiamService()