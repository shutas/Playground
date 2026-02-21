const https = require("https");
const { URL } = require("url");

const postData = JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
});

const url = new URL("https://jsonplaceholder.typicode.com/posts");

const options = {
    hostname: url.hostname,
    port: 443,
    path: url.pathname,
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
        "User-Agent": "MySecureApp/1.0",
        "Accept": "application/json"
    },
    timeout: 10000
};

console.log("Sending POST request to:", url.toString());

const req = https.request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    console.log("Headers:", res.headers);

    let responseData = "";
    res.setEncoding("utf8");

    res.on("data", (chunk) => {
        responseData += chunk;
    });

    res.on("end", () => {
        try {
            const parsedData = JSON.parse(responseData);
            console.log("Response:", parsedData);
        } catch (e) {
            console.error("Error parsing response:", e.message);
        }
    });
});

req.on("error", (e) => {
    console.error(`Request error: ${e.message}`);
});

req.setTimeout(15000, () => {
    req.destroy(new Error("Request timeout after 15 seconds"));
});

req.write(postData);

req.end();