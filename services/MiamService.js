let ingredientDAO = require('../dao/IngredientDAO')
let recetteDAO = require('../dao/RecetteDAO')
let repasDAO = require('../dao/RepasDAO')
let utilisateurDAO = require('../dao/UtilisateurDAO')
const Ingredient = require('../models/Ingredient');
const Repas = require('../models/Repas');
const Recette = require('../models/Recette');
const IngredientRecette = require('../models/IngredientRecette');

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
    //     //construire la recette. on va utiliser la DAO recette pour la recuperer
    //     console.log(idRecette);
    //     let callbackIntermediaire = (recetteDAORecette) =>{
    //         let repas = new Repas (recetteDAORecette, date, nbConvives, 0,true);

    //         //Inserer le repas en base 
    //         console.log(repas)
    //         callback(repas);
    //     }

    //     return recetteDAO.voirFicheRecette(idRecette,callbackIntermediaire);
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

    // verifRepasPasse = (date) =>{
    //     if ()
    // }
}

    


module.exports = new MiamService()