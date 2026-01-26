const fs = require("fs");
/*
console.log("1. Starting sync read...");
const data = fs.readFileSync("myfile.txt", "utf8");
console.log("2. File contents:", data);
console.log("3. Done reading file");

console.log("1. Starting async read...");
fs.readFile("myfile.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("2. File contents:", data);
});
console.log("3. Done starting reading operation");

console.log("1. Reading file...");
fs.promises.readFile("myfile.txt", "utf8")
    .then(data => {
        console.log("3. File content:", data);
    })
    .catch(err => console.error("Error:", err));
console.log("2. This runs before file is read!");

async function readFiles() {
    try {
        console.log("1. Starting to read files...");
        const data1 = await fs.promises.readFile("myfile.txt", "utf8");
        const data2 = await fs.promises.readFile("myfile.txt", "utf8");
        console.log("2. Files read successfully!");
        return { data1, data2 };
    } catch (error) {
        console.log("Error reading files:", error);
    }
}
readFiles();
*/
