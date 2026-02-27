require("dotenv").config();

let mysql = require("mysql2");

console.log(process.env.PASSWORD);

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD
});

con.connect(function(err) {
    if (err) throw err;
    con.query("create database mydb2", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});