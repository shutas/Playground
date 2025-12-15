const streetSelect = document.getElementById("choose-street");
const bedroomSelect = document.getElementById("choose-bedrooms");
const bathroomSelect = document.getElementById("choose-bathrooms");
const form = document.querySelector("form");

const resultCount = document.getElementById("result-count");
const output = document.getElementById("output");

let houses;

function fetchHouseData() {
  fetch("https://mdn.github.io/shared-assets/misc/houses.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      houses = json;
      initializeForm();
    })
}

function initializeForm() {
  // Initialize choose-street
  let collectedStreets = [];
  for (const house of houses) {
    if (collectedStreets.indexOf(house.street) === -1) {
      collectedStreets.push(house.street);
      let newOption = document.createElement("option");
      newOption.value = house.street;
      newOption.textContent = house.street;
      streetSelect.appendChild(newOption);
    }
  }

  // Initialize choose-bedrooms

  // Initialize choose-bathrooms
}

function renderHouses(e) {
  // Stop the form submitting
  e.preventDefault();

  // Add rest of code here
}

// Add a submit listener to the <form> element
form.addEventListener("submit", renderHouses);

// Call fetchHouseData() to initialize the app
fetchHouseData();
