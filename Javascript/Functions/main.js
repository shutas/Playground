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