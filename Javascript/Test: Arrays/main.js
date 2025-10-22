// Task 1
let myArray = ["AKB48", "SKE48", "NMB48"];
myArray[0] = "Nogizaka46";
myArray[1] = "Keyakizaka46";
myArray.unshift("Junjo no Afilia");

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);


// Task 2
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

const myArray = myString.split("+");
const arrayLength = myArray.length;
const lastItem = myArray[arrayLength - 1];

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
const para2 = document.createElement("p");
para2.textContent = `The length of the array is ${arrayLength}.`;
const para3 = document.createElement("p");
para3.textContent = `The last item in the array is "${lastItem}".`;
section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);


// Task 3
const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

// Add your code here
myArray.pop();
myArray.push("Shuta");
myArray.push("Kiwa");

for (let i = 0; i < myArray.length; i++) {
  myArray[i] = `${myArray[i]} (${i})`
}

const myString = myArray.join(" - ");
// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);


// Task 4
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

const eagleIndex = birds.indexOf("Eagles");
birds.splice(eagleIndex, 1);

const eBirds = [];
for (const bird of birds) {
  if (bird.startsWith("E")) {
    eBirds.push(bird);
  }
}

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);