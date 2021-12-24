var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/index', { title: 'E-books | Admin', h1 : 'Admin' });
});

/* GET users listing. */
router.get('/contacts', function(req, res, next) {
  res.render('admin/contacts', { title: 'E-books | Contacts', h1 : 'Contacts' });
});

module.exports = router;
