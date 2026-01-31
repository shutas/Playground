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

function getUser(userId, callback) {
    setTimeout(() => {
        callback(null, {id: userId, name: "John"});
    }, 1000);
}

function getUserPosts(user, callback) {
    setTimeout(() => {
        callback(null, ["Post 1", "Post 2"]);
    }, 1000);
}

getUser(1, (error, user) => {
    if (error) {
        console.error(error);
        return
    }
    console.log("User:", user);

    getUserPosts(user, (error, posts) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log("Posts:", posts);
    });
});

function getUserPromise(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({id: userId, name: "John"});
        }, 1000);
    });
}

function getUserPostsPromise(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["Post 1", "Post 2"]);
        }, 1000);
    });
}

getUserPromise(1)
    .then(user => {
        console.log("User:", user);
        return getUserPostsPromise(user);
    })
    .then(posts => {
        console.log("Posts:", posts);
    })
    .catch(error => {
        console.error(error);
    })

async function getUserAndPosts() {
    try {
        const user = await getUserPromise(1);
        console.log("User:", user);

        const posts = await getUserPostsPromise(user);
        console.log("Posts:", posts);
    } catch (error) {
        console.error(error);
    }
}

getUserAndPosts();

async function myFunction() {
    return "Hello";
}

const result = myFunction();
console.log(result);

myFunction().then(message => console.log(message));
const awaitResult = await myFunction();
console.log(awaitResult);

const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);

async function readFileContents() {
    try {
        const data = await readFile("myFile.txt", "utf8");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

readFileContents();