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
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

canvas.addEventListener("keydown", (event) => {
  if (event.key === "s") {
    y += 50;
  } else if (event.key === "w") {
    y -= 50;
  } else if (event.key === "a") {
    x -= 50;
  } else if (event.key === "d") {
    x += 50;
  }
  drawCircle(x, y, size);
});


// Events 3
const buttonBar = document.querySelector(".button-bar");

buttonBar.addEventListener("click", (event) => {
  buttonBar.style.backgroundColor = event.target.textContent;
});