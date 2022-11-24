const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '34.171.255.38',
    user: 'root',
    database: 'itcapstone',
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