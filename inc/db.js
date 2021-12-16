const connection = require('mysql2');

// database connection

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_books',
    password: 'Becker2611koppe'
  });


module.exports = connection;