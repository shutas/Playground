const { response } = require("express");
const https = require("https");
const { URL } = require("url");

function httpsRequest(options, data = null) {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let responseData = "";

            res.on("data", (chunk) => {
                responseData += chunk;
            });

            res.on("end", () => {
                try {
                    const contentType = res.headers["content-type"] || "";
                    const isJSON = /^application\/json/.test(contentType);

                    const response = {
                        statusCode: res.statusCode,
                        headers: res.headers,
                        data: isJSON ? JSON.parse(responseData) : responseData
                    };

                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(response);
                    } else {
                        const error = new Error(`Request failed with status code ${res.statusCode}`);
                        error.response = response;
                        reject(error);
                    } 
                } catch (e) {
                    e.response = { data: responseData };
                    reject(e);
                }
            });
        });

        req.on("error", (e) => {
            reject(e);
        });

        req.setTimeout(options.timeout || 10000, () => {
            req.destroy(new Error("Request timeout"));
        });

        if (data) {
            req.write(data);
        }

        req.end();
    });
}

async function fetchData() {
    try {
        const url = new URL("https://jsonplaceholder.typicode.com/posts/1");

        const options = {
            hostname: url.hostname,
            path: url.pathname,
            method: "GET",
            headers: {
                "Accept": "application/json"
            },
            timeout: 5000
        };

        const response = await httpsRequest(options);
        console.log("Response:", response.data);
    } catch (error) {
        console.error("Error:", error.message);

        if (error.response) {
            console.error("Response data:", error.response.data);
        }
    }
}

fetchData();