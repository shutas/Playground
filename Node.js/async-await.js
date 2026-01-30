/*
const fs = require("fs").promises;

async function readFile() {
    try {
        const data = await fs.readFile("myfile.txt", "utf8");
        console.log(data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

readFile();

async function fetchUserData() {
    try {
        const response = await fetch("https://api.example.com/users/1");
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const user = await response.json();
        console.log("User data:", user);
        return user;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}

fetchUserData().catch(error => {
    console.log("Caught outside of async function:", error.message);
});
*/

function fetchData(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data for ID ${id}`), 1000);
    });
}

async function fetchSequential() {
    console.time("sequential");
    const data1 = await fetchData(1);
    const data2 = await fetchData(2);
    const data3 = await fetchData(3);
    console.timeEnd("sequential");
    return [data1, data2, data3];
}

async function fetchParallel() {
    console.time("parallel");
    const results = await Promise.all([
        fetchData(1),
        fetchData(2),
        fetchData(3)
    ]);
    console.timeEnd("parallel");
    return results
}

async function runDemo() {
    console.log("Running sequentially...");
    const seqResults = await fetchSequential();
    console.log(seqResults);

    console.log("\nRunning in parallel...");
    const parResults = await fetchParallel();
    console.log(parResults);
}

runDemo();