const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b990ec48f77a5d',
    password: '14d81dbb',
    database: 'heroku_52166e7e22738e2',
  });
  
  mysqlConnection.connect((error) => {
    if(error){
      console.log('Error connecting to the MySQL Database');
      return;
    }
    console.log('Connection established sucessfully');
  });
  //mysqlConnection.end((error) => {
  //});

  module.exports = mysqlConnection;