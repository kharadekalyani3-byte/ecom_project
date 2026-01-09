var mysql = require('mysql2');
var util = require('util');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'a2z48_ecom'
});
var exec = util.promisify(conn.query).bind(conn);
module.exports = exec;