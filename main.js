const container = document.querySelector('.container');
const changeGridButton = document.querySelector('#change-grid-size');

let gridSize = 16;

makeGrid();

changeGridButton.addEventListener('click', () => {
    gridSize = prompt('What would you like the grid size to be? It must be between 0 and 100.');

    while(true) {
        if(gridSize > 0 && gridSize <= 100) {
            removeGrid();
            makeGrid();
            break;
        } else {
            gridSize = prompt('Invalid Grid Size!\nWhat would you like the grid size to be? It must be between 0 and 100.');
        }
    }
});

function makeGrid() {
    for(i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add('row');
        container.appendChild(row);

        for(j = 0; j < gridSize; j++) {
            const block = document.createElement("div");
            block.classList.add('block');
            row.appendChild(block);

            block.addEventListener('mouseover', () => {
                let randomRed = Math.floor(Math.random() * 250) + 1;
                let randomGreen = Math.floor(Math.random() * 250) + 1;
                let randomBlue = Math.floor(Math.random() * 250) + 1;

                block.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            });

        }
    }
}

function removeGrid() {
    container.replaceChildren();
}