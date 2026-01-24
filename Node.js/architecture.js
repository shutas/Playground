const fs = require("fs");
console.log("Before file read");

fs.readFile("myfile.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File contents:", data);
});
console.log("After file read");

// Blocking file read
console.log("Start of blocking code");
const data = fs.readFileSync("myfile.txt", "utf8");
console.log("Blocking operation completed");

// Non-blocking file read
console.log("Start of non-blocking code");
fs.readFile("myfile.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("Non-blocking operation completed");
});
console.log("This runs before the file is read");