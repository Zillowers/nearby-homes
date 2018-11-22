// const mysql = require('mysql');
//
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'student',
//   database: 'neighborhood',
// });
//
// connection.connect();
//
// module.exports = connection;

const pg = require('pg');

const conString = 'postgres://mona:student@localhost/neighborhood';

const client = new pg.Client(conString);

client.connect();
module.exports = client;
