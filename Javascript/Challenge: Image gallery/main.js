const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

function Image(filename, alt) {
  this.filename = filename;
  this.alt = alt;
}

const images = [
  new Image("pic1.jpg", "Closeup of a human eye"),
  new Image("pic2.jpg", "Rock that looks like a wave"),
  new Image("pic3.jpg", "Purple and white pansies"),
  new Image("pic4.jpg", "Section of wall from a pharaoh's tomb"),
  new Image("pic5.jpg", "Large moth on a leaf"),
]

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (image of images) {
  const newImg = document.createElement("img");
  newImg.src = baseURL + image.filename;
  newImg.alt = image.alt;
  newImg.tabIndex = 0;
  thumbBar.appendChild(newImg);
  newImg.addEventListener("click", (event) => {
    event.stopPropagation();
    updateDisplayedImage(newImg);
  });
  newImg.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.stopPropagation();
      updateDisplayedImage(newImg);
    }
  });
}

function updateDisplayedImage(newImg) {
  displayedImage.src = newImg.src;
  displayedImage.alt = newImg.alt;
}

btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    btn.classList.remove("dark");
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    btn.classList.add("dark");
  }
});