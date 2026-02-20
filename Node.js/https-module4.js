const { raw } = require("express");
const https = require("https");
const { URL } = require("url");

const url = new URL("https://jsonplaceholder.typicode.com/posts/1");

const options = {
    hostname: url.hostname,
    path: url.pathname,
    method: "GET",
    headers: {
        "Accept": "application/json",
        "User-Agent": "MySecureApp/1.0"
    }
};

console.log(`Fetching data from: ${url}`);

const req = https.get(options, (res) => {
    const { statusCode } = res;
    const contentType = res.headers["content-type"];

    if (statusCode !== 200) {
        console.error(`Request failed with status code: ${statusCode}`);
        res.resume();
        return;
    }

    if (!/^application\/json/.test(contentType)) {
        console.error(`Expected JSON but got ${contentType}`);
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
            console.log("Received data:", parsedData);
        } catch (e) {
            console.error("Error parsing JSON:", e.message);
        }
    });
});

req.on("error", (e) => {
    console.error(`Error: ${e.message}`);
});

req.setTimeout(10000, () => {
    console.error("Request timeout");
    req.destroy();
});