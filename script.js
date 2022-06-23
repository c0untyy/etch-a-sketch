let grid = document.getElementById("grid");
let resetbutton = document.getElementById("reset");
let color = "black";
let blackbutton = document.getElementById("black");
let click = true;
let slider = document.getElementById("mySlider");
let defaultsize = 16;

createGrid(defaultsize);

slider.oninput = function () {
  let currentvalue = slider.value;
  document.querySelector("b").innerText =
    currentvalue.toString() + "x" + currentvalue.toString();
  changeGridSize(currentvalue);
};

//Before Branch
function createGrid(size) {
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let gridsize = size ** 2;
  for (let i = 0; i <= gridsize; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    grid.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", colorSquare);
  }
}

function changeGridSize(currentvalue) {
  createGrid(currentvalue);
  console.log(currentvalue);
}

//Painting
function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = randomColor();
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function randomColor() {
  let randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomcolor;
}

function clearGrid() {
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

//Drawing mode text
document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Drawing mode enabled!";
    } else {
      document.querySelector(".mode").textContent = "Drawing mode disabled!";
    }
  }
});
