let name0 = "Node.js";
const version = 20;

console.log(name0);
console.log(version);

function greet(user) {
    return `Hello, ${user}!`;
}

const add = (a, b) => a + b;

console.log(greet("Developer"));
console.log(add(5, 3));

const user = {
    name: "Alice",
    age: 25,
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    },
};

console.log(user.greet());

const colors = ["red", "green", "blue"];

colors.forEach(color => console.log(color));
const lengths = colors.map(color => color.length);
console.log(lengths);

function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 1000);
}

fetchData(console.log);

const fetchDataPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Promise resolved!"), 1000);
    });;
};

async function getData() {
    const result = await fetchDataPromise();
    console.log(result);
}

getData();

const { name } = user;
console.log(`Hello, ${name}!`);