const http = require("http");
const { URL } = require("url");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
    const baseURL = "http://" + req.headers.host + "/";
    const parsedURL = new URL(req.url, baseURL);
    
    console.log("baseURL:", baseURL);
    console.log("parsedURL:", parsedURL);

    const params = Object.fromEntries(parsedURL.searchParams);

    console.log("params:", params);

    const userAgent = req.headers["user-agent"];
    const acceptLanguage = req.headers["accept-language"];

    console.log("userAgent:", userAgent);
    console.log("acceptLanguage:", acceptLanguage);

    const queryObj = {
        name: "John Doe",
        age: 30,
        interests: ["programming", "music"]
    };
    const queryStr = queryString.stringify(queryObj);

    res.writeHead(200, {
        "Content-Type": "text/plain",
        "X-Powered-By": "Node.js",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Set-Cookie": "session=id; HttpOnly",
    });
    res.end(JSON.stringify({
        path: parsedURL.pathname,
        params,
        exampleQueryString: queryStr
    }, null, 2));
});

const PORT = 3000

server.listen(PORT, "localhost", () => {
    console.log(`Server running at http://localhost:${PORT}`);
})