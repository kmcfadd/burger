var connection = require('./connection.js')

var orm = {
    all: function (table, cb) {
        connection.query(`SELECT *FROM ${table};`, function (err, res) {
            if (err) throw err;
            cb(res)
        })
    },
    update: function (table, status, cb) {
        connection.query(`UPDATE ${table} SET devoured=true WHERE id=${status};`, function (err, res) {
            if (err) throw err;
            cb(res)
        })
    },
    create: function (table, val, cb) {
        connection.query(`INSERT INTO ${table} (burger_name) VALUES ('${val}');`, function (err, result) {
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = orm