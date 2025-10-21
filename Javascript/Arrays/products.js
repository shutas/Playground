// Problem 1
const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.textContent = "";
totalBox.textContent = "";

const products = ["Underpants:6.99",
 "Socks:5.99",
 "T-shirt:14.99",
 "Trousers:31.99",
 "Shoes:23.99"]

for (const product of products) {
  const pair = product.split(":");
  const name = pair[0];
  const price = Number(pair[1]);
  
  total += price;
  
  let itemText = `${name} — $${price}`;
  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = `Total: $${total.toFixed(2)}`;


// Problem 2
const list = document.querySelector(".output ul");
const searchInput = document.querySelector(".output input");
const searchBtn = document.querySelector(".output button");

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.addEventListener("click", () => {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== "") {
    // Part 1
    myHistory.unshift(searchInput.value);
    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.textContent = "";

    // loop through the array, and display all the search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= MAX_HISTORY) {
      // Part 2
      myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = "";
    searchInput.focus();
  }
});