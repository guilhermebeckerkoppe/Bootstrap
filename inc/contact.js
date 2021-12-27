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

    save(data) {

        return new Promise((resolve, reject) => {

            conn.query("INSERT INTO tb_contacts (name, email, message) VALUES(?, ?, ?)", [
                data.name,
                data.email,
                data.message
            ], (err, results) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });

        });

    }

}
