const colors = ["red", "green", "blue", "yellow"];
const gridSize = 6;
const game = document.getElementById("game");
let selectedCell = null;

// Crear la cuadrícula
for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell", randomColor());
  cell.dataset.index = i;
  cell.addEventListener("click", () => handleClick(cell));
  game.appendChild(cell);
}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function handleClick(cell) {
  if (!selectedCell) {
    selectedCell = cell;
    cell.style.outline = "2px solid black";
  } else {
    swapColors(selectedCell, cell);
    selectedCell.style.outline = "none";
    selectedCell = null;
  }
}

function swapColors(c1, c2) {
  const temp = [...c1.classList];
  c1.className = c2.className;
  c2.className = temp.join(" ");
}