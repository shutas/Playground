// Strings 1
const quoteStart = "Don't judge each day by the harvest you reap ";

// Add your code here
const quoteEnd = "but by the seeds that you plant."
const finalQuote = quoteStart + quoteEnd;

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);


// Strings 2
const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

// Don't edit the code above here!

// Add your code here
const quoteLength = quote.length;
const index = quote.indexOf(substring);
const revisedQuote = quote.substring(0, index + substring.length + 1);

// Don't edit the code below here!

const section = document.querySelector("section");
section.innerHTML = " ";
const para1 = document.createElement("p");
para1.textContent = `The quote is ${quoteLength} characters long.`;
const para2 = document.createElement("p");
para2.textContent = revisedQuote;
section.appendChild(para1);
section.appendChild(para2);


// String 3
const quote = "I dO nOT lIke gREen eGgS anD HAM";

// Don't edit the code above here!

// Add your code here
const allLower = quote.toLowerCase();
let fixedQuote = allLower[0].toUpperCase() + allLower.substring(1);
fixedQuote = fixedQuote.replace("green eggs and ham", "natto");
const finalQuote = fixedQuote + ".";

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);


// String 4
const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

// Don't edit the code above here!

// Edit the string literal
const myString =
  `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt(a**2 + b**2)}.`;

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);