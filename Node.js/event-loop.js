/*
console.log("First");
setTimeout(() => console.log("Third"), 0);
Promise.resolve().then(() => console.log("Second"));
console.log("Fourth");
*/

console.log("1. Start");
process.nextTick(() => console.log("2. Next tick"));
Promise.resolve().then(() => console.log("3. Promise"));
setTimeout(() => console.log("4. Timeout"), 0);
setImmediate(() => console.log("5. Immediate"));
console.log("6. End");