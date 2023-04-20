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
  
  
}
module.exports = new IngredientDAO();