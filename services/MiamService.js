let ingredientDAO = require('../dao/IngredientDAO')
let recetteDAO = require('../dao/RecetteDAO')
let repasDAO = require('../dao/RepasDAO')
let utilisateurDAO = require('../dao/UtilisateurDAO')
const Ingredient = require('../models/Ingredient');
const Repas = require('../models/Repas');
const Recette = require('../models/Recette');


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
            //
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
    
    // voirToutesLesRecettes = (callback) =>{
    //     let callbackIntermediaire = (jsonDAORecettes, jsonDAOIngredients) =>{
    //         let recettes = [];
          
    //         //Parcourir les recettes
    //         for(let i = 0; i < jsonDAORecettes.length ; i++){
    //             //Creer le tableau d'ingredient vide pour chaque recette
    //             let tabIng = new Array();
    //             const recette = new Recette(jsonDAORecettes[i].idrecette,jsonDAORecettes[i].intitule, jsonDAORecettes[i].nbcouverts,jsonDAORecettes[i].deroule, tabIng, jsonDAORecettes[i].img );
                
    //             //parcourir le tableau des ingredients et verifier s'il est present dans la recette en cours
    //             for (let i = 0 ; i< jsonDAOIngredients.length;i++){
                    
    //                 // S'ils ont le meme idrecette, l'ajouter au tableau
    //                 if(jsonDAOIngredients[i].idRecette == recette.id){
    //                     //creer l'ingredient
    //                     let ingredient = new Ingredient(jsonDAOIngredients[i].idIng, jsonDAOIngredients[i].nom, jsonDAOIngredients[i].cout, jsonDAOIngredients[i].unite, jsonDAOIngredients[i].img);       
    //                      recette.tabIng.push(ingredient)
    //                 }
    //             }
    //             recettes.push(recette);
    //         }   
    //         callback(recettes);      
    //     }
    //     recetteDAO.voirToutesLesRecettes(callbackIntermediaire);
    // }

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
        let ingredient = new Ingredient(jsonDAOIngredients.idIng, jsonDAOIngredients.nom, jsonDAOIngredients.cout, jsonDAOIngredients.unite, jsonDAOIngredients.imgIng);       
        recette.tabIng.push(ingredient);
    }
}


module.exports = new MiamService(ingredientDAO, recetteDAO, repasDAO, utilisateurDAO)