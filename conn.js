var mysql = require('mysql2');
var util = require('util');
var conn = mysql.createConnection({
    host: 'bvgj3nhk4aui7cnfakby-mysql.services.clever-cloud.com',
    user: 'uuj1fe9oydcebghm',
    password: 'JDA0C5DoWViftiopSP2u',
    database: 'bvgj3nhk4aui7cnfakby'
});
var exec = util.promisify(conn.query).bind(conn);
module.exports = exec;
