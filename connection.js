const mysql = require('mysql');

const mysqlConnection = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b990ec48f77a5d',
    password: '14d81dbb',
    database: 'heroku_52166e7e22738e2',
  });
  
// Attempt to catch disconnects 
mysqlConnection.on('connection', function (connection) {
  console.log('DB Connection established');

  mysqlConnection.on('error', function (err) {
    console.error(new Date(), 'MySQL error', err.code);
  });
  mysqlConnection.on('close', function (err) {
    console.error(new Date(), 'MySQL close', err);
  });
})


  module.exports = mysqlConnection;