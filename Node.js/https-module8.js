const http2 = require("http2");
const fs = require("fs");
const path = require("path");

const serverOptions = {
    key: fs.readFileSync(path.join(__dirname, "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
    allowHTTP1: true,

    minVersion: "TLSv1.2",
    ciphers: [
        "TLS_AES_256_GCM_SHA384",
        "TLS_CHACHA20_POLY1305_SHA256",
        "TLS_AES_128_GCM_SHA256",
        "ECDHE-ECDSA-AES256-GCM-SHA384",
        "!aNULL",
        "!eNULL",
        "!EXPORT",
        "!DES",
        "!RC4",
        "!3DES",
        "!MD5",
        "!PSK"
    ].join(":"),
    honorCipherOrder: true
};

const server = http2.createSecureServer(serverOptions);

server.on("stream", (stream, headers) => {
    const method = headers[":method"];
    const path = headers[":path"];
    const scheme = headers[":scheme"];
    const authority = headers[":authority"];

    console.log(`${method} ${path} (HTTP/2)`);

    if (path === "/") {
        stream.respond({
            "content-type": "text/html; charset=utf-8",
            ":status": 200,
            "x-powered-by": "Node.js HTTP/2",
            "cache-control": "public, max-age=3600"
        });

        stream.end(`
            <!DOCTYPE html>
            <html>
            <head>
            <title>HTTP/2 Server</title>
            <link rel="stylesheet" href="/styles.css">
            </head>
            <body>
                <h1>Hello from HTTP/2 Server!</h1>
                <p>This page is served over HTTP/2.</p>
                <div id="data">Loading data...</div>
                <script src="app.js"></script>
            </body>
            </html>
        `);
    }

    else if (path === "/api/data" && method === "GET") {
        stream.respond({
            "content-type": "application/json",
            ":status": 200,
            "cache-control": "no-cache"
        });

        stream.end(JSON.stringify({
            message: "Data from HTTP/2 API",
            timestamp: new Date().toISOString(),
            protocol: "HTTP/2",
            server: "Node.js HTTP/2 Server"
        }));
    }

    else if (path === "/push") {
        stream.pushStream({ ":path": "/styles.css" }, (err, pushStream) => {
            if (err) {
                console.error("Push stream error:", err);
                return;
            }
            pushStream.respond({
                "content-type": "text/css",
                ":status": 200
            });
            pushStream.end("body { font-family: Arial, sans-serif; margin: 2em; }");
        });
        stream.respond({
            "content-type": "text/html; charset=utf-8",
            ":status": 200
        });
        stream.end("<h1>Server Push Example</h1><link rel='stylesheet' href='/styles.css'>");
    }

    else {
        stream.respond({
            "content-type": "text/plain",
            ":status": 404
        });
        stream.end("404 - Not Found");
    }
});

server.on("error", (err) => {
    console.error("Server error:", err);
    process.exit(1);
});

const PORT = process.env.PORT || 8443;
server.listen(PORT, "0.0.0.0", () => {
    console.log(`HTTP/2 server running at https://localhost:${PORT}`);
    console.log("Environment:", process.env.NODE_ENV || "development");
    console.log("Press Ctrl+C to stop the server");
});

const gracefulShutdown = (signal) => {
    console.log(`\nReceived ${signal}. Shutting down gracefully...`);
    server.close(() => {
        console.log("HTTP/2 server closed.");
        process.exit(0);
    });

    setTimeout(() => {
        console.error("Forcing shutdown...");
        process.exit(1);
    }, 10000);
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);