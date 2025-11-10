// Task 1
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

function chooseName() {
  let randomIndex = Math.floor(Math.random() * 10) % names.length;
  let randomName = names[randomIndex];
  para.textContent = randomName;
}

chooseName();


// Task 2
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

function drawRectangle(x, y, width, height, color) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.rect(x, y, width, height);
  ctx.stroke();
}

drawRectangle(x, y, width, height, color);


// Task 3
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseName() {
  const randomNumber = randomInteger(0, names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();


// Task 4
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;