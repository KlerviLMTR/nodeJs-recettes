const Ingredient = require('../models/IngredientRecette');
let recette = require('../models/Recette')

class RecetteDAO {

    voirToutesLesRecettes = (callback) => {
      const sql = `select recette.*, constituer.quantite, ingredient.idIng, ingredient.nom, ingredient.cout, constituer.quantite, ingredient.unite, ingredient.img as imgIng from recette, constituer, ingredient
      where recette.idrecette = constituer.idRecette
      and constituer.idIng = ingredient.idIng`;
      connexion.query(sql, (err,data)=>{
        if(err)
          throw err;
        else{
          callback(data);
        }
      })
      
    }

    creerRecette = (recette, callback) =>{
      console.log(recette);
      const sql = `insert into recette (intitule, nbCouverts, deroule, img) values ( "${recette.intitule}", ${recette.nbCouverts},"${recette.deroule}", "${recette.img}");`;
      let promise = new Promise ((resolve,reject)=>{
        connexion.query(sql, (err, data)=>{
          if(err)
            reject(err);
          else{
            resolve(data);
          }
        })
        
      });
 
      promise.then((data)=>{
        
        let sql = `INSERT INTO constituer (idIng, idrecette, quantite)  VALUES `;
        for (let i=0; i<recette.tabIng.length; i++){
          //TODO A ADAPTER A LA QUANTITE
          sql+=`(${recette.tabIng[i].ingredient.id}, ${data.insertId}, ${recette.tabIng[i].quantite})`;
          if(i!= recette.tabIng.length-1){
            sql+=',';
          }
        }
        connexion.query(sql, (err, data)=>{
          if(err)
            throw err;
          else{
            // insertId a recup
            callback(data);
      }
        })
      })
    }

    // supprimerRecette = (id, callback) =>{
    //   let sql = `DELETE `
    // }
    
}

//Export de l'objet recette instancie
module.exports = new RecetteDAO();