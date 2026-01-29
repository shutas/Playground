const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;

        if (success) {
            resolve("Operation completed successfully");
        } else {
            reject(new Error("Operation failed"));
        }
    }, 1000);
});

myPromise
    .then(result => console.log("Success:", result))
    .catch(error => console.error("Error:", error.message));


const fs = require("fs").promises;
const promise1 = Promise.resolve("First result");
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second result"), 1000));
const promise3 = fs.readFile("myfile.txt", "utf8");

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("Results:", results);
    })
    .catch(error => {
        console.error("Error in one of the promises:", error);
    });

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: userId, name: "John"});
        }, 1000);
    });
}

function getUserPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 1000);
    });
}

getUser(123)
    .then(user => {
        console.log("User:", user);
        return getUserPosts(user)
    })
    .then(posts => {
        console.log("Posts:", posts);
    })
    .catch(error => {
        console.error("Error:", error);
    });

const newPromise1 = new Promise(resolve => setTimeout(() => resolve("First result"), 1000));
const newPromise2 = new Promise(resolve => setTimeout(() => resolve("Second result"), 500));

Promise.race([newPromise1, newPromise2])
    .then(result => {
        console.log("Fastest result:", result);
    });

function fetchData() {
    return new Promise((resolve, reject) => {
        reject(new Error("Network error"));
    });
}

fetchData()
    .then(
        data => console.log("Data:", data),
        error => console.log("Error handled in then:", error.message)
    );

fetchData()
    .then(data => console.log("Data:", data))
    .catch(error => console.log("Error handled in catch:", error.message));