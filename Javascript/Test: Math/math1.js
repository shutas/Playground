let finalResult;
let evenOddResult;

// Don't edit the code above here!

// Add your code here
let numOne = 1;
let numTwo = 2;
let numThree = 3;
let numFour = 4;
let numSum = numOne + numTwo;
let numDiff = numFour - numThree;
finalResult = numSum * numDiff;

if (finalResult % 2 === 0) {
  evenOddResult = 0;
} else {
  evenOffResult = 1;
}

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);
