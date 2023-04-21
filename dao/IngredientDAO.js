const app = require('../app.js');
const Ingredient = require('../models/Ingredient');

class IngredientDAO {
  voirTousLesIngredients = (callback) => {
    const sql = "SELECT idIng, nom, img FROM ingredient ORDER BY nom;";
    connexion.query(sql,(err,data)=>{
      if (err)
      return err;
      else{
        callback(data);
      }
      
      
    })
    
  }
  
  supprimerIngredient = (id, callback)=>{
    const sql = "DELETE FROM ingredient where idIng = "+id+";";
    connexion.query(sql,(err,data)=>{
      if (err)
      return err;
      else{
        callback(data);
      }
    })
  }

  ajouterIngredient = (nom, prix, unite, callback)=>{
    const sql = "INSERT INTO ingredient VALUES (null, '"+nom+"', "+prix+", '"+unite+"', '/images/default.svg');";
    connexion.query(sql,(err,data)=>{
      if (err)
      return err;
      else{
        callback(data);
      }
    })
  }

  voirFicheIngredient = (id, callback)=>{
    const sql = "SELECT * FROM ingredient WHERE idIng ="+id+";";
    console.log(sql);

    connexion.query(sql,(err,data)=>{
      if (err)
      return err;
      else{
        callback(data);
      }
    })
    
  }
  
  
}
module.exports = new IngredientDAO();