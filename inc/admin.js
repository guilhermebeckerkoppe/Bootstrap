var conn = require('./db');

module.exports = {

    listContacts() {

       return new Promise((resolve, reject) => {

        conn.query("SELECT * FROM tb_contacts ORDER BY id", (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        });

       });

    }

}