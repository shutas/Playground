global.mylet = 42;
console.log(global.mylet);

/*
const fs = require("fs");
fs.readFile("myfile.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
*/

const https = require("https");
https.get("https://example.com", res => {
    let data = "";
    res.on("data", chunk => data += chunk);
    res.on("end", () => console.log(data));
});