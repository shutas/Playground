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
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        console.log(result[2].address);
        console.log(fields);
        console.log(fields[1].name);
    });
});