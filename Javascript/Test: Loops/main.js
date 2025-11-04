// Loops 1
const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");
const section = document.querySelector("section");
section.appendChild(list);

for (const plant of myArray) {
  const newListItem = document.createElement('li');
  newListItem.textContent = plant;
  list.appendChild(newListItem);
}

// Loops 2
const name = "Mustafa";
const para = document.createElement("p");

const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];

const section = document.querySelector("section");
section.appendChild(para);

let found = false;
let index = 0;

while (!found && index !== phonebook.length) {
  if (name === phonebook[index]["name"]) {
    para.textContent = `${name}'s number is ${phonebook[index]["number"]}.`;
    found = true;
    break;
  }
  index++;
}

if (!found) {
  para.textContent = "Name not found in the phonebook";
}

// Loop 3
let i = 500;
const para = document.createElement("p");
const section = document.querySelector("section");
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 500; i > 1; i--) {
  if (isPrime(i)) {
    para.textContent += `${i}, `;
  }
}

para.textContent = para.textContent.slice(0, -2);

section.appendChild(para);