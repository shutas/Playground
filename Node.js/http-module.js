const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request Headers:", req.headers);
    
    const userAgent = req.headers["user-agent"];
    const acceptLanguage = req.headers["accept-language"];

    res.writeHead(200, {
        "Content-Type": "text/plain",
        "X-Powered-By": "Node.js",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Set-Cookie": "session=id; HttpOnly",
    });
    res.end(`User Agent: ${userAgent}\nAccept Language: ${acceptLanguage}`);
});

const PORT = 3000

server.listen(PORT, "localhost", () => {
    console.log(`Server running at http://localhost:${PORT}`);
})