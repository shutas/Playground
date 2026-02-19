const https = require("https");
const { URL } = require("url");

const apiUrl = new URL("https://jsonplaceholder.typicode.com/posts/1");

const options = {
    hostname: apiUrl.hostname,
    port: 443,
    path: apiUrl.pathname + apiUrl.search,
    method: "GET",
    headers: {
        "User-Agent": "MySecureApp/1.0",
        "Accept": "application/json",
        "Cache-Control": "no-cache"
    },
    rejectUnauthorized: true,
    timeout: 10000,
};

console.log(`Making request to: https://${options.hostname}${options.path}`);

const req = https.request(options, (res) => {
    const { statusCode, statusMessage, headers } = res;
    const contentType = headers["content-type"] || "";

    if (statusCode >= 300 & statusCode < 400 && headers.location) {
        console.log(`Redirecting to: ${headers.location}`);
        res.resume();
        return;
    }

    let error;
    if (statusCode !== 200) {
        error = new Error(`Request Failed.\nStatus Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error(`Invalid content-type.\nExpected application/json but received ${contentType}`);
    }
    if (error) {
        console.error(error.message);
        res.resume();
        return;
    }

    let rawData = "";
    res.setEncoding("utf8");

    res.on("data", (chunk) => {
        rawData += chunk;
    });

    res.on("end", () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log("Response data:", parsedData);
        } catch (e) {
            console.error("Error parsing JSON:", e.message);
        }
    });
});

req.on("error", (e) => {
    console.error(`Request error: ${e.message}`);
    if (e.code === "ECONNRESET") {
        console.error("Connection was reset by the server");
    } else if (e.code === "ETIMEDOUT") {
        console.error("Request timed out");
    }
});

req.setTimeout(15000, () => {
    req.destroy(new Error("Request timeout after 15 seconds"));
});

req.on("socket", (socket) => {
    socket.on("error", (error) => {
        console.error("Socket error:", error.message);
        req.destroy(error);
    });
    socket.setTimeout(5000, () => {
        req.destroy(new Error("Socket timeout after 5 seconds"));
    });
});

req.end();