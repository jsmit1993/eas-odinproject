let grid = document.querySelector('.etch-a-sketch-div');

function createBoxGrid(size) {
        grid.replaceChildren();
        for (i = 0; i <= size; i++) {
            let newBox = document.createElement('div');
            newBox.classList.add('newBox'); 
            grid.appendChild(newBox);
        }
     
}

let createNewGrid = document.querySelector('.createNewGrid')
let gridSize = document.querySelector('.newBoxSize');

createNewGrid.addEventListener('click', ()=> {
    let newGridSize = prompt("what should the size of the new grid be?");
    let newSize = Number(newGridSize);
    createBoxGrid(newSize);
})
