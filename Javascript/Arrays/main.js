const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);

const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];

console.log(shopping.length);

console.log(shopping[0]);
shopping[0] = "tahini";
console.log(shopping);

console.log(random[2][2]);

const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl"));
console.log(birds.indexOf("Rabbit"));

const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities);
cities.push("Bradford", "Brighton");
console.log(cities);

const cities2 = ["Manchester", "Liverpool"];
const newLength = cities2.push("Bristol");
console.log(cities2);
console.log(newLength);

const cities3 = ["Manchester", "Liverpool"];
cities3.unshift("Edinburgh");
console.log(cities3);

const cities4 = ["Manchester", "Liverpool"];
cities4.pop();
console.log(cities4);

const cities5 = ["Manchester", "Liverpool"];
const removedCity = cities5.pop();
console.log(removedCity);

const cities6 = ["Manchester", "Liverpool"];
cities6.shift();
console.log(cities6);

const cities7 = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index7 = cities7.indexOf("Liverpool");
if (index7 !== -1) {
    cities7.splice(index7, 1);
}
console.log(cities7);

const cities8 = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index8 = cities8.indexOf("Liverpool");
if (index8 !== -1) {
    cities8.splice(index7, 2);
}
console.log(cities8);

for (const bird of birds) {
    console.log(bird);
}

function double(number) {
    return number * 2;
}

const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled);

function isLong(city) {
    return city.length > 8;
}

const cities9 = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities9.filter(isLong);
console.log(longer);

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities10 = data.split(",");
console.log(cities10);
console.log(cities10.length);
console.log(cities10[0]);
console.log(cities10[1]);
console.log(cities10[cities10.length - 1]);

const commaSeparated = cities10.join("/");
console.log(commaSeparated);

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString());