const conn = require('./db');

module.exports = {

    render(req, res, error, success) {

        res.render('contact', { 
            title:  'E-books | Contact', 
            h1 : 'Contact', 
            body: req.body,
            error,
            success
          });

    },

    save() {

        return new Promise((resolve, reject) => {

            conn.query();

        });

    }

}
