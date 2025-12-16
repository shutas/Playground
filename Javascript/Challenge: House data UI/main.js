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

  let collectedStreets = [];
  let currentLargestBedroomNum = 0;
  let currentLargestBathroomNum = 0;
  
  for (const house of houses) {
    if (collectedStreets.indexOf(house.street) === -1) {
      collectedStreets.push(house.street);
      let newOption = document.createElement("option");
      newOption.value = house.street;
      newOption.textContent = house.street;
      streetSelect.appendChild(newOption);
    }
    if (currentLargestBathroomNum < house.bathrooms) {
      currentLargestBathroomNum = house.bathrooms;
    }
    if (currentLargestBedroomNum < house.bedrooms) {
      currentLargestBedroomNum = house.bedrooms;
    }
  }

  for (let i = 1; i <= currentLargestBedroomNum; i++) {
    let newOption = document.createElement("option");
    newOption.value = i;
    newOption.textContent = i;
    bedroomSelect.appendChild(newOption);
  }

  for (let i = 1; i <= currentLargestBathroomNum; i++) {
    let newOption = document.createElement("option");
    newOption.value = i;
    newOption.textContent = i;
    bathroomSelect.appendChild(newOption);
  }
}

function renderHouses(e) {
  // Stop the form submitting
  e.preventDefault();

  // Add rest of code here
  let filteredHouse = houses.filter((house) => {
    return (streetSelect.value === String(house.street) || streetSelect.value === "") && (bathroomSelect.value === String(house.bathrooms) || bathroomSelect.value === "") && (bedroomSelect.value === String(house.bedrooms) || bedroomSelect.value === "");
  });

  resultCount.textContent = `Results returned: ${filteredHouse.length}`;

  output.replaceChildren();

  function renderHouse(house) {
    let totalArea = 0;
    for (const room in house.room_sizes) {
      totalArea += house.room_sizes[room];
    }
    let newArticle = document.createElement("article");
    let newH2 = document.createElement("h2");
    let newUL = document.createElement("ul");
    let newBedrooms = document.createElement("li");
    let newBathrooms = document.createElement("li");
    let newRoomArea = document.createElement("li");
    let newPrice = document.createElement("li");
    newH2.textContent = `${house.house_number} ${house.street}`;
    newBedrooms.textContent = `🛏️ Bedrooms: ${house.bedrooms}`;
    newBathrooms.textContent = `🛀 Bathrooms: ${house.bathrooms}`;
    newRoomArea.textContent = `Room area: ${totalArea} m²`;
    newPrice.textContent = `Price: £${house.price}`;
    newUL.appendChild(newBedrooms);
    newUL.appendChild(newBathrooms);
    newUL.appendChild(newRoomArea);
    newUL.appendChild(newPrice);
    newArticle.appendChild(newH2);
    newArticle.appendChild(newUL);
    output.appendChild(newArticle);
  }

  for (const house of filteredHouse) {
    renderHouse(house);
  }

}

// Add a submit listener to the <form> element
form.addEventListener("submit", renderHouses);

// Call fetchHouseData() to initialize the app
fetchHouseData();