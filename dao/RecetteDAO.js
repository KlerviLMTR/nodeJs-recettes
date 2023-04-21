const Ingredient = require('../models/Ingredient');
let recette = require('../models/Recette')

class RecetteDAO {

    voirToutesLesRecettes = (callback) => {
        const sqlRecettes = "SELECT * FROM recette ORDER BY intitule;";
        const sqlIng = "select idRecette , ingredient.idIng, nom, cout, unite, img from constituer, ingredient where ingredient.idIng = constituer.idIng ORDER BY idrecette";

        connexion.query(sqlRecettes, (err,recettes)=>{
          if (err)
          throw err;
          else{

            connexion.query(sqlIng, (err, ingredients)=>{
                if (err)
                throw err;
                else{
                    callback(recettes, ingredients);
                }
            })
          }    
        })    
      }
    
}

//Export de l'objet recette instancie
module.exports = new RecetteDAO();