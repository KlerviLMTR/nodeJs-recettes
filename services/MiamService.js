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
    
    voirToutesLesRecettes = (callback) =>{
            //Construire le tableau qui contiendra tous les modeles ingredient
        let callbackIntermediaire = (jsonDAORecettes, jsonDAOIngredients) =>{
            let recettes = [];
          
            //Parcourir les recettes
            for(let i = 0; i < jsonDAORecettes.length ; i++){
                //Creer le tableau d'ingredient vide pour chaque recette
                let tabIng = new Array();
                const recette = new Recette(jsonDAORecettes[i].idrecette,jsonDAORecettes[i].intitule, jsonDAORecettes[i].nbcouverts,jsonDAORecettes[i].deroule, tabIng, jsonDAORecettes[i].img );
                //parcourir le tableau des ingredients et verifier s'il est present dans la recette en cours
                for (let i = 0 ; i< jsonDAOIngredients.length;i++){
                    // S'ils ont le meme idrecette, l'ajouter au tableau
                    if(jsonDAOIngredients[i].idRecette == recette.id){
                        //creer l'ingredient
                        let ingredient = new Ingredient(jsonDAOIngredients[i].idIng, jsonDAOIngredients[i].nom, jsonDAOIngredients[i].cout, jsonDAOIngredients[i].unite, jsonDAOIngredients[i].img);       
                         recette.tabIng.push(ingredient)
                    }
             
                }

            }
            //Appel au callback DAO
            callback(recettes);
            
        }
        recetteDAO.voirToutesLesRecettes(callbackIntermediaire);
    }
    
    
}


module.exports = new MiamService(ingredientDAO, recetteDAO, repasDAO, utilisateurDAO)