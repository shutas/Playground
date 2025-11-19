// Object basics 1
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

let catName = cat["name"];
cat.greeting();
cat["color"] = "black";

const section = document.querySelector("section");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;
section.appendChild(para1);
section.appendChild(para2);


// Object basics 2
let bandInfo;

const band = {
  name: "Junji no Afilia",
  nationality: "Japan",
  genre: "J-Pop",
  members: 7,
  formed: 2008,
  split: false,
  albums: [{
    name: "Soredakega, Ikiruiminanda",
    released: 2018,
  },{
    name: "Mahono Chocolate Densetsu",
    released: 2017,
  }],
};

function yearsActive(formed, split) {
  if (split === false) {
    return 2025 - formed;
  }
  return split - formed;
}

bandInfo = `${band.name} is an idol group in ${band.nationality} that has been around for ${yearsActive(band.formed,band.split)} years. They primarly release ${band.genre} music, and one of the albums that they released was "${band.albums[0].name}" back in ${band.albums[0].released}.`

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);


// Object basics 3
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

cat["greeting"] = function () {
  console.log(`Hello, said ${this.name} the ${this.breed}.`);
}

const cat2 = {
  name: "Shuta",
  breed: "Human",
  color: "yellow",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
};

cat.greeting();
cat2.greeting();

// Object basics 4
function Cat(newName, newBreed, newColor) {
  this.name = newName;
  this.breed = newBreed;
  this.color = newColor;
  this.greeting = function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  };
};

cat = new Cat("Bertie", "Cymric", "white");
cat2 = new Cat("Elfie", "Aphrodite Giant", "ginger");

cat.greeting();
cat2.greeting();