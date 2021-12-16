const conn = require('./db');

module.exports = {

    render(req, res, error, success) {

        res.render('contacts', { 
            title:  'E-books | Contact',  
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
