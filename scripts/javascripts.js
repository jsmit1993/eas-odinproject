let grid = document.querySelector('.etch-a-sketch-div');

function createBoxGrid(size) {
        grid.replaceChildren();
        let newSquareSize = 500 / size;
        for (i = 0; i <= size * size; i++) {
            let newBox = document.createElement('div');
            newBox.classList.add('newBox'); 
            newBox.style.width = `${newSquareSize}`;
            newBox.style.height = `${newSquareSize}`;
            grid.appendChild(newBox);
        }
     
}

let squareSize16 = 500 / 16;
function createBoxesonLoad() {
    for (i = 0; i < 16 * 16; i++) {
        let newBox = document.createElement('div');
        newBox.classList.add('newBox'); 
        newBox.style.width = `${squareSize16}`;
        newBox.style.height = `${squareSize16}`;
        grid.appendChild(newBox);
        console.log("number of boxes made is 16");
    }
}
createBoxesonLoad()

let createNewGrid = document.querySelector('.createNewGrid')
let gridSize = document.querySelector('.newBoxSize');

createNewGrid.addEventListener('click', ()=> {
    let newGridSize = prompt("what should the size of the new grid be?");
    let newSize = Number(newGridSize);
    createBoxGrid(newSize);
})
