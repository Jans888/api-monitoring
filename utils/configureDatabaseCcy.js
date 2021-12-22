var mysql = require('mysql');

// Please configure the MySQL Credentials here. By deafult, root/<NO_PASSWORD> is configured.
var hostName = "172.17.0.1";
var db_username = "root"
var db_password = "password"
var db_name = "db_api_monitor"
var db_tbl_name = "api_status_ccy"

var con = mysql.createConnection({
  host: hostName,
  user: db_username,
  password: db_password
});

/*   con.query("CREATE DATABASE "+db_name, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  }); */

    var sql = "CREATE TABLE "+db_name+"."+db_tbl_name+" (serviceName VARCHAR(255), status int, responseTime int, time_executed timestamp, errMessage VARCHAR(255), url VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

con.end();