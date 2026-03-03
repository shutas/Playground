require("dotenv").config();

let mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

let adr = "Mountain 21";
//let sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);
let sql = "SELECT * FROM customers WHERE address = ?";
con.connect(function(err) {
    if (err) throw err;
    //con.query(sql, function (err, result) {
    con.query(sql, [adr], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

let name = "Amy";
let sql2 = "SELECT * FROM customers WHERE name = ? OR address = ?";
con.connect(function(err) {
    if (err) throw err;
    con.query(sql2, [name, adr], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});