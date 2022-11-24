const mysql = require('mysql');
require('dotenv').config();

// Sets the right connection details for the connection string available
const mysqlConnection = () => {
  // Check if heroku CLEARDB_DATABASE_URL is available
  if (process.env.CLEARDB_DATABASE_URL) { return `${process.env.CLEARDB_DATABASE_URL}`; }
  return {
    database: `${process.env.DB}`,
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_USER_PASSWORD}`,
  };
};

// Create a connection to the database
const connection = mysql.createConnection(mysqlConnection());

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  // eslint-disable-next-line no-console
  console.log(`Successfully connected to the database with ${mysqlConnection()}.`);
});

  module.exports = mysqlConnection;