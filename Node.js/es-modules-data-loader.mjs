console.log("Loading data...");

const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await response.json();

console.log("Data loaded!");

export { data };