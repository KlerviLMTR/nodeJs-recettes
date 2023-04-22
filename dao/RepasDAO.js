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
    
}
module.exports = new RepasDAO();
