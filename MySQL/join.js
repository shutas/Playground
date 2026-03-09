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
  let sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  //let sql = "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id";
  //let sql = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});