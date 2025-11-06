const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);

const myNumber = Math.random();
console.log(myNumber);

const madeAnotherString = myArray.join();
console.log(madeAnotherString);

function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
}

hello("Ari");
hello();

const x = 1;

function a() {
    const y = 2;
    output(y);
}

function b() {
    const z = 3;
    output(z);
}

function output(value) {
    console.log(`Value: ${value}`);
}

a();
b();