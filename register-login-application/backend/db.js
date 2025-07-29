// database connection logic

//import mysql2 
const mysql = require('mysql2');

//loading environment vars from the .env file
require('dotenv').config();

//creating connection object using credentials from .env file
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSW,
    database: process.env.DB_NAME,
});

// connect to database
connection.connect((err) => {
    if(err) throw err; 
    console.log("Connected to MySQL Database");
});

//export connection
module.exports = connection;