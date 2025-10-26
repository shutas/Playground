let cheese = "Cheddar";

if (cheese) {
    console.log("Yay! Cheese available for making cheese on toast.");
} else {
    console.log("No cheese on toast for you today.");
}


// Basic Calendar
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  // ADD CONDITIONAL HERE
  if (month === "February") {
    days = 28;
  } else if (month === "April" || month === "June" || month === "September" || month === "November") {
    days = 30;
  } else {
    days = 31;
  }

  
  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");

// More colors
const select = document.querySelector("select");
const html = document.querySelector("html");

select.addEventListener("change", () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
  switch (choice) {
    case "white":
      update("white", "black");
      break;
    case "black":
      update("black", "white");
      break;
    case "purple":
      update("purple", "white");
      break;
    case "yellow":
      update("yellow", "black");
      break;
    default:
      update("darkblue", "yellow");
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}