var contacts = require('./../inc/contact');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-books | Home' });
});

/* GET books page. */
router.get('/books', function(req, res, next) {
  res.render('books', { title: 'E-books | Books', h1 : 'Books' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'E-books | About', h1 : 'About Us' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  contacts.render(req, res);
});

/** POST contact form */
router.post('/contact', function(req, res, next) {
  if(!req.body.name) {
    contacts.render(req, res, "Digite um nome");
  } else if(!req.body.email) {
    contacts.render(req, res, "Digite um email");
  }  else if(!req.body.message) {
    contacts.render(req, res, "Escreva uma mensagem");
  } else {
    contacts.save(req.body).then(results => {

      req.body= {};

      contacts.render(req, res, null, "Menssagem enviada com sucesso");

    }).catch(err => {

      contacts.render(req, res, err.message, null);

    });
  }
});

module.exports = router;
