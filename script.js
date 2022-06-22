let grid = document.getElementById("grid");
let resetbutton = document.getElementById("reset");

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
    square.addEventListener("mouseover", colorSquare)
    };
  }

function changeGridSize(input) {
  if (input >= 2 && input <= 100) {
    createGrid(input);
  } else {
    console.log("too many squares");
  }
}
