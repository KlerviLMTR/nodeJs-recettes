
let repas = require('../models/Repas')


class RepasDAO {

    // 
    
    creerRepas = (idRecette, date, nbConvives, callback) =>{
        let sql = `INSERT INTO repas (idRepas, idrecette, nbconvives, dater ) VALUES (null,${idRecette},${nbConvives},"${date}");`;
        connexion.query(sql,(err,data)=>{
            if (err)
            throw err;
            else{
              callback(data);
            }
        })
    }

    voirTousLesRepas =(callback)=>{
        let sql = "SELECT repas.idRepas, repas.idrecette, recette.intitule, repas.nbconvives, repas.dater FROM recette, repas WHERE recette.idrecette = repas.idrecette;";
        connexion.query(sql,(err,data)=>{
            if (err)
            throw err;
            else{
                callback(data);
            }
        })
    }

    supprimerRepas = (idRepas, callback)=>{
        let sql = `DELETE FROM repas WHERE idRepas = ${idRepas};`;
        connexion.query(sql,(err,data)=>{
            if (err)
            throw err;
            else{
                callback(data);
            }
        })
    }

    voirFicheRepas = (idRepas,callback)=>{
        let sql = `SELECT * FROM repas WHERE idRepas = ${idRepas};`;
        connexion.query(sql,(err,data)=>{
            if (err)
            throw err;
            else{
                callback(data);
            }
        })
    }
 
}
module.exports = new RepasDAO();
