const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '34.171.255.38',
    user: 'root',
    database: 'itcapstone',
  });
  
  connection.connect((error) => {
    if(error){
      console.log('Error connecting to the MySQL Database');
      return;
    }
    console.log('Connection established sucessfully');
  });
  connection.end((error) => {
  });

