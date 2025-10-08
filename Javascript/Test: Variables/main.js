let myName = "Paul";

// Don't edit the code above here!

// Add your code here
myName = "Shuta";
// Don't edit the code below here!

const section = document.querySelector("section");
const para = document.createElement("p");
para.textContent = myName;
section.appendChild(para);


/////


// Fix the following code

let myName = "Default";
myName = "Chris";

let myAge = 42;

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);