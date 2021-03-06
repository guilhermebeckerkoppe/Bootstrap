var express = require('express');
var contacts = require('./../inc/admin');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/index', { title: 'E-books | Admin', h1 : 'Admin' });
});

/* GET users listing. */
router.get('/contacts', function(req, res, next) {
  contacts.listContacts().then(results => {
    res.render('admin/contacts', { title: 'E-books | Contacts', h1 : 'Contacts', contacts : results });
  }).catch(err => {
    console.error(err);
  });
  //
});

/* GET users listing. */
router.get('/addcontact', function(req, res, next) {
  res.render('admin/addcontact', { title: 'E-books | Add/Edit contacts', h1 : 'Add/edit Contact' });
});

module.exports = router;
