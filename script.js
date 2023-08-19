const grid = document.querySelector("div.grid");

for (let i=0; i<256; i++){
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    grid.appendChild(gridSquare);   
}

const gridSquare = document.querySelectorAll("div.gridSquare");
gridSquare.forEach(grid => grid.addEventListener("mouseenter", function(e){
    grid.classList.add("gridHover");
}));