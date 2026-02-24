const express = require("express");
const spdy = require("spdy");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Express over HTTP/2!");
});

const options = {
    key: fs.readFileSync(path.join(__dirname, "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
    spdy: {
        protocols: ["h2", "http/1.1"],
        plain: false,
        "x-forwarded-for": true
    }
};

const PORT = process.env.PORT || 3000;
spdy.createServer(options, app).listen(PORT, () => {
    console.log(`Express server with HTTP/2 running on port ${PORT}`);
});