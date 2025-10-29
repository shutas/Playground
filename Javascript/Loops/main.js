function toUpper(string) {
    return string.toUpperCase();
}

function lCat(cat) {
    return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
    console.log(cat);
}

const upperCats = cats.map(toUpper);
console.log(upperCats);

const filtered = cats.filter(lCat);
console.log(filtered);

const filtered2 = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered2);

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

const cats2 = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats2) {
    myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats);

myFavoriteCats = "My cats are called ";
for (let i = 0; i < cats2.length; i++) {
    if (i === cats2.length - 1) {
        myFavoriteCats += `and ${cats2[i]}.`;
    } else {
        myFavoriteCats += `${cats2[i]}, `;
    }
}

console.log(myFavoriteCats);

let i = 0;
myFavoriteCats = "My cats are called ";

while (i < cats2.length) {
    if (i === cats2.length - 1) {
        myFavoriteCats += `and ${cats2[i]}.`;
    } else {
        myFavoriteCats += `${cats2[i]}, `;
    }
    i++;
}

console.log(myFavoriteCats);

i = 0;
myFavoriteCats = "My cats are called ";

do {
    if (i === cats2.length - 1) {
        myFavoriteCats +=  `and ${cats2[i]}.`;
    } else {
        myFavoriteCats += `${cats2[i]}, `;
    }
    i++;
} while (i < cats2.length);

console.log(myFavoriteCats);

// Launch Countdown
const output = document.querySelector(".output");
output.textContent = "";

for (let i = 10; i >= 0; i--) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent += `Blast off!`;
  } else {
    para.textContent += ` ${i} `;
  }
  output.appendChild(para);
}