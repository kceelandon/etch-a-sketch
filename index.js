const container = document.querySelector(".container");
let button = document.createElement("button");
button.textContent = "Reset";
button.classList.add("prompt");
document.body.appendChild(button);
// let numTilesOnEdge = 4; // should be replaced later with the value from the prompt
function initializeApp() {
    createGrid(4);
}
function createGrid(numCols) {
    for (let i = 0; i < numCols; i++) {
        let newDiv = document.createElement("div");
        newDiv.style.display = "flex";
        newDiv.style.flexDirection = "column";
        for (let i = 0; i < numCols; i++) {
            let cell = document.createElement("div");
            let cellSize = container.offsetHeight / numCols;
            cell.style.border = "1px solid black";
            cell.style.height = cellSize + "px";
            cell.style.width = cellSize + "px";
            cell.classList.add("cell");
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "black";
            })
            newDiv.appendChild(cell);
        }
        newDiv.classList.add("col");
        container.appendChild(newDiv);
    }
}

function clearGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
}

initializeApp();
button.addEventListener("click", () => {
    let userInput = prompt("Please enter a value for the grid.");
    let numTilesOnEdge = parseInt(userInput);
    while (numTilesOnEdge <= 0 || numTilesOnEdge > 100) {
        userInput = prompt("Please enter a value between 1 and 100.");
        numTilesOnEdge = parseInt(userInput);
    }
    clearGrid();
    createGrid(numTilesOnEdge);
})