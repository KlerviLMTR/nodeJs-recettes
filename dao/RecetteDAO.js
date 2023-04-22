const Ingredient = require('../models/Ingredient');
let Recette = require('../models/Recette')
let IngredientRecette = require('../models/IngredientRecette')

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
          sql+=`(${recette.tabIng[i].ingredient.id}, ${data.insertId}, ${recette.tabIng[i].quantite})`;
          if(i!= recette.tabIng.length-1){
            sql+=',';
          }
        }
        sql+=' ON DUPLICATE KEY UPDATE quantite = VALUES(quantite);';

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

    supprimerRecette = (id, callback) =>{
      let sql = `DELETE FROM constituer WHERE idRecette = ${id}`;
      let promise = new Promise ((resolve,reject)=>{
        connexion.query(sql, (err, data)=>{
          if(err)
            reject(err);
          else{
            resolve(data);
          }
        })
      });
      promise.then(() =>{
        sql = `DELETE FROM recette WHERE idRecette = ${id} `;
        connexion.query(sql, (err, data)=>{
          if(err)
            throw err;
          else{
            callback(data);
          }
        })

      });


    }

    voirFicheRecette = (id, callback) =>{
      let sql = `select recette.*, constituer.quantite, ingredient.idIng, ingredient.nom, ingredient.cout, constituer.quantite, ingredient.unite, ingredient.img as imgIng from recette, constituer, ingredient
      where recette.idrecette = constituer.idRecette
      and constituer.idIng = ingredient.idIng and recette.idRecette=${id}`;
      connexion.query(sql, (err, data)=>{
        if(err)
          throw err;
        else{
          // Mettre en forme le json obtenu 
          //creer la recette a partir de la premiere ligne renvoyee+ instancier le tab d'ingredients à vide
          let recette = new Recette (data[0].idrecette, data[0].intitule, data[0].nbcouverts, data[0].deroule, [], data[0].img)
          //Construire le tableau d'ingredients
          for (let i=0; i<data.length; i++){
            let ingredientRecette = new IngredientRecette(data[i].quantite, new Ingredient(data[i].idIng, data[i].nom, data[i].cout, data[i].unite,data[i].imgIng));
            recette.tabIng.push(ingredientRecette);
          }
          callback(recette);
        }
      })
    } 
    
}

//Export de l'objet recette instancie
module.exports = new RecetteDAO();