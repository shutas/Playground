const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const helmet = require("helmet");

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public"), {
    dotfiles: "ignore",
    etag: true,
    extensions: ["html", "htm"],
    index: "index.html",
    maxAge: "1d",
    redirect: true
}));

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Secure Express Server</h1>");
});

app.get("/api/status", (req, res) => {
    res.json({
        status: "operational",
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || "development",
        nodeVersion: process.version
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});

const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
    allowHTTP1: true,
    minVersion: "TLSv1.2",
    ciphers: [
        "TLS_AES_256_GCM_SHA384",
        "TLS_CHACHA20_POLY1305_SHA256",
        "TLS_AES_128_GCM_SHA256",
        "ECDHE-RSA-AES128-GCM-SHA256",
        "!DSS",
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
}

const PORT = process.env.PORT || 3000;
const server = https.createServer(sslOptions, app);

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);
    process.exit(1);
});

const gracefulShutdown = (signal) => {
    console.log(`\nReceived ${signal}. Shutting down gracefully...`);

    server.close(() => {
        console.log("HTTP server closed.");
        process.exit(0);
    });

    setTimeout(() => {
        console.error("Forcing shutdown...");
        process.exit(1);
    }, 10000);
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

const HOST = process.env.HOST || "0.0.0.0";
server.listen(PORT, HOST, () => {
    console.log(`Express server running at https://${HOST}:${PORT}`);
    console.log("Environment:", process.env.NODE_ENV || "development");
    console.log("Press Ctrl+C to stop the server");
});