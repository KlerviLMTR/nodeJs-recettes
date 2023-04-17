const app = require('../app.js');
const Ingredient = require('../models/Ingredient');

class IngredientDAO {
    voirTousLesIngredients = (callback) => {
      const sql = "SELECT nom FROM ingredient;";
      connexion.query(sql,(err,data)=>{
        if (err)
          return err;
        else
          return callback(data);
      })

    }


  }
  module.exports = new IngredientDAO();