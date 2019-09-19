var connection = require('./connection.js')

var orm = {
    all: function (table, cb) {
        connection.query('SELECT *FROM ' + table + ',', function (err, res) {
            if (err) throw err;
            cb(res)
        })
    }
}

module.exports = orm