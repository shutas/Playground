let http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World");
}).listen(8080);

console.log("This example is different");
console.log("The result is displayed in the Command Line Interface");

const os = require("os");
console.log(os.platform());

const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(8000);