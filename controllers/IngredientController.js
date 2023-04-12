const path = require("path");
const ingredientModel = require('../models/Ingredient.js');
const app = require("../app.js");
// GET ALL
exports.all=(req,res)=>{
    sql = "select nom from ingredient";
    connexion.query(sql, (err, data)=>{
        if (err)
            return res.json(err)
        else
            return res.json(data)
    })
    //res.sendFile(path.join(__dirname, '../views', 'ingredients.html'));
}
// GET WITH ID
exports.get = (req, res) => {

    const id = req.params.id;
    const sql = 'select * from ingredient where idIng="' + id + '";';
    connexion.query(sql, (err, data) => {
        if (err)
            return res.json(err);
        else
            return res.json(data);
    });
};
// INSERT
exports.insert = (req, res)=>{
    const data = req.body
    const nom = data["nom"];
    const cout = data["cout"];
    const unite = data["unite"];
    sql = 'insert into ingredient values (null,"'+nom+'","'+cout+'","'+unite+'");';
    connexion.query(sql, (err, data) => {
        if (err)
            return res.json(err);
        else
            return res.json(data);
    });
}

// UPDATE
exports.update = (req, res)=>{
    const id = req.params.id;
    const data = req.body;
    const nom = data["nom"];
    const cout = data["cout"];
    const unite = data["unite"];  
    sql = 'update ingredient set nom="'+nom+'", cout = "'+cout+'", unite = "'+unite+'" where idIng='+id+';';
    connexion.query(sql, (err, data) => {
        if (err)
            return res.json(err);
        else
            return res.json(data);
    });

}
// DELETE
exports.delete = (req, res)=>{
    const id = req.params.id
    sql = 'delete from ingredient where idIng ="'+id+'";';
    connexion.query(sql, (err, data) => {
        if (err)
            return res.json(err);
        else
            return res.json(data);
    });
}
