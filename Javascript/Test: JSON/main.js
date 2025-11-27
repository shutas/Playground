const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  const catJSON = JSON.parse(catString);

  for (let i = 0; i < catJSON.length; i++) {
    if (i !== catJSON.length - 1) {
      motherInfo += `${catJSON[i].name}, `;
    } else {
      motherInfo += `and ${catJSON[i].name}.`;
    }
    for (let j = 0; j < catJSON[i].kittens.length; j++) {
      if (catJSON[i].kittens[j].gender === "m") {
        male += 1;
      }
      total += 1;
    }
  }

  kittenInfo = `There are ${total} kittens in total; ${male} of which are male, and ${total-male} of which are female.`;

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}