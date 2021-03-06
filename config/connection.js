// Set up MySQL connection.
var mysql = require("mysql");
var connection;

//if server contains JAWSDB_URL, it will connect
//to JawsDB database through heroku
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
//if not, it connects to local database
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

// Make connection.
connection.connect(function(err) {
  if (err) {  //if there is an error, console.log the error for user
    console.error("error connecting: " + err.stack);
    return;
  }
  //if no error, console.log connection and connection id
  console.log("connected as id " + connection.threadId);  
});

// Export connection for our ORM to use.
module.exports = connection;
