const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../connection');
const cartsCtrl = require('../controllers/carts');


Router.get('/', (req, res, next)=> {
    
    mysqlConnection.query('SELECT * FROM products ORDER BY id desc', function (err, rows) {
        if (err) {
          req.flash('error', err)
          res.render('cart', { data: '' })
        } else {
          res.render('cart', { data: rows })
        }
    })
})

Router.delete('/:id', (req, res, next) => {

  console.log('tesssst' + req.params.id);
  const sql = "DELETE FROM products WHERE id = " + "'" + req.params.id + "'";
  mysqlConnection.query(sql,(err, rows, fields) => {
    if (!err) {
        if(sql != null){
            res.redirect('/cart');
        } else {
            res.redirect('/cart');
        }
    } else {
        console.log(err.message);
        res.redirect('/cart');

    }
  })
})



module.exports = Router;