// Events 1
const btn = document.querySelector("button");

function toggleText() {
  if (btn.textContent === "Machine is off") {
    btn.textContent = "Machine is on";
  } else {
    btn.textContent = "Machine is off";
  }
}

btn.addEventListener("click", toggleText);


// Events 2


// Events 3