const grid = document.querySelector("div.grid");
const input = document.querySelector("input");
const reset = document.querySelector("button#reset");
const random = document.querySelector("button#random");
let gridSquares = document.querySelectorAll("div.gridSquare");
let gridSizeText = document.querySelector("div#gridSizeText");
let isMouseDown = false;
let gridSize = 16;

// reset.addEventListener("click", function(e){
// })

input.addEventListener("click", function(e){
    grid.innerHTML = "";
    gridSize = e.target.value;
    gridConstruction(gridSize);
    gridSizeText.textContent = `Grid Size: ${gridSize}x${gridSize}`;
});

function gridConstruction(gridSize){
    for (let i=0; i<(gridSize*gridSize); i++){
        const Square = document.createElement("div");
        Square.classList.add("gridSquare");
        newSize = (660/gridSize)-1;
        Square.style.height = `${newSize}px`;
        Square.style.width = `${newSize}px`;
        grid.appendChild(Square);
    }
    gridSquares = document.querySelectorAll("div.gridSquare");
    gridSquares.forEach(square => {
        square.addEventListener("mousemove", function(e){
            if (isMouseDown === true){
                square.classList.add("gridHover");
            }
        });
        square.addEventListener("mousedown", function(e){
            isMouseDown = true;
            square.classList.add("gridHover");
        });
        square.addEventListener("mouseup", function(e){
            isMouseDown = false;
        })
    });
};

gridConstruction(gridSize);





