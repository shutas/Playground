let http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("Hello world for 'get started' page");
}).listen(8000);