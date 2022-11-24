const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../connection');
const cartsCtrl = require('../controllers/carts');



Router.get('/', function(req, res) {
    res.render('index')
});
Router.get('/login', function(req, res){
    console.log("tesssssst");
    const username = req.body.username;
    const email = req.body.email;
    const pw = req.body.password;
    const sql = "SELECT * FROM users WHERE username = " + "'" + username + "'";
    mysqlConnection.query(sql,(err, rows, fields) => {
        if (!err) {
            if(sql != null){
                res.redirect('/home');
            } else {
                res.redirect('/login');
            }
        } else {
            console.log(err.message);
            res.redirect('/login');

        }
    })

});
Router.post('/register', function(req, res){
    const username = req.body.username;
    const email = req.body.email;
    const pw = req.body.password;
    const sql = "INSERT INTO users (email, username, password ) VALUES ('" + username + "','" + email + "', '" + pw + "')";
    mysqlConnection.query(sql,(err, rows, fields) => {
        if (!err) {
            res.redirect('/home');
        } else {
            console.log(err.message);
            res.redirect('/register');

        }
    })

});

Router.post('/checkout', function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const sql = "INSERT INTO orders (name, email, address, city, state, zip ) VALUES ('" + name + "','" + email + "', '" + address + "', '" + city + "', '" + state + "', '" + zip + "')";
    mysqlConnection.query(sql,(err, rows, fields) => {
        if (!err) {
            res.redirect('/done');
        } else {
            console.log(err.message);
            res.redirect('/done');

        }
    })

});

Router.get('/done', function(req, res) {
    res.render('done')
});

Router.get('/home', function(req, res) {
    res.render('home')
});
Router.get('/mens', function(req, res) {
    res.render('mens')
});
Router.get('/womens', function(req, res) {
    res.render('womens')
});
Router.get('/menshirt1', function(req, res) {
    res.render('menshirt1')
});
Router.get('/menshirt2', function(req, res) {
    res.render('menshirt2')
});
Router.get('/womenshirt1', function(req, res) {
    res.render('womenshirt1')
});
Router.get('/womenshirt2', function(req, res) {
    res.render('womenshirt2')
});
Router.post('/addToCart/', function(req, res){


})
Router.post('/addToCart/menshirt1', function(req, res){
    const size = req.body.size;
    const quantity = req.body.quantity;
    const sql = "INSERT INTO products ( name, size, quantity,price,image) VALUES ('Mens Fashion T Shirt', '" + size + "', '" + quantity + "', '78', './public/img/products/f1.jpg')";
    mysqlConnection.query(sql,(err, rows, fields) => {
        if (!err) {
            res.redirect('/cart');
        } else {
            console.log(err.message);
            res.redirect('/cart');
        }
    })

});
Router.post('/addToCart/menshirt2', function(req, res){
    const size = req.body.size;
    const quantity = req.body.quantity;
    const sql = "INSERT INTO products ( name, size, quantity,price,image) VALUES ('Mens Fashion T Shirt', '" + size + "', '" + quantity + "', '78', './public/img/products/f3.jpg')";
    mysqlConnection.query(sql,(err, rows, fields) => {
        if (!err) {
            res.redirect('/cart');
        } else {
            console.log(err.message);
            res.redirect('/cart');
        }
    })

});
Router.post('/addToCart/womenshirt1', function(req, res){
    const size = req.body.size;
    const quantity = req.body.quantity;
    const sql = "INSERT INTO products ( name, size, quantity,price,image) VALUES ('Womens Cat Sweater', '" + size + "', '" + quantity + "', '239', './public/img/products/f8.jpg')";
    mysqlConnection.query(sql,(err, rows, fields) => {
        if (!err) {
            res.redirect('/cart');
        } else {
            console.log(err.message);
            res.redirect('/cart');
        }
    })

});
Router.post('/addToCart/womenshirt2', function(req, res){
    const size = req.body.size;
    const quantity = req.body.quantity;
    const sql = "INSERT INTO products ( name, size, quantity,price,image) VALUES ('Womens Pants', '" + size + "', '" + quantity + "', '139', './public/img/products/f7.jpg')";
    mysqlConnection.query(sql,(err, rows, fields) => {
        if (!err) {
            res.redirect('/cart');
        } else {
            console.log(err.message);
            res.redirect('/cart');
        }
    })

});

module.exports = Router;