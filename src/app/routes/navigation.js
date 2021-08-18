const connection = require('../../config/db');
const bcryptjs = require('bcryptjs');
const app = require('../../config/server');

module.exports = app => {
    app.get('/', (req,res) => {
        res.render('../views/index.ejs');
    });
    app.get('/catalogo', (req,res) => {
        res.render('../views/catalogo.ejs');
    });
    app.get('/contacto', (req,res) => {
        res.render("../views/contacto.ejs", {
        });
    });
}

