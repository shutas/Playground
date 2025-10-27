// Conditional 1
let season = "summer";
let response;

if (season === "summer") {
  response = "Keep yo self cool; heatwave is real dawg";
} else if (season === "winter") {
  reponse = "Keep yo self warm; we need no frozen toe dawg";
} else {
  response = "Man, which season is that bruh";
}

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);


// Conditional 2
let response;
let score = 75;
let machineActive = false;

if (!machineActive) {
  response = "Please turn of the machine.";
} else {
  if (score < 0 || score > 100) {
    response = "This is not possible, an error has occurred.";
  } else if (score >= 0 && score < 20) {
    response = "That was a terrible score - total fail!";
  } else if (score >= 20 && score < 40) {
    response = "You know some things, but it's a pretty bad score. Needs improvement,";
  } else if (score >= 40 && score < 70) {
    response = "You did a passable job, not bad!";
  } else if (score >= 70 && score < 90) {
    response = "That's a great score, you really know your stuff.";
  } else {
    response = "What an amazing score! Did you cheat? Are you for real?";
  }
}

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = `Your score is ${score}`;
para2.textContent = response;
section.appendChild(para1);
section.appendChild(para2);

// Conditional 3
let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

if (machineActive) {
  machineResult = "Machine is on.";
  pwd === "cheese"
    ? pwdResult = "Logged in successfully"
    : pwdResult = "Login attempt was not successful.";
} else {
  machineResult = "Machine is off.";
}

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);