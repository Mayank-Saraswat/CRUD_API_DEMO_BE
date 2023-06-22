let mysql = require('mysql2');

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: 'apiDemo',
  password: "Mayank123@"
});

connection.connect(function(err) {
  if (err){ 
    console.log("Error:", err)
    throw err;
  }
  console.log("Connected!");
});

module.exports = connection;