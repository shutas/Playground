console.log("Hello from Node.js!");

const fs = require("fs");
fs.readFile("myfile.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file: " + err);
        return;
    }
    console.log("File content: " + data);
});

console.log("Reading file... (this runs first!");