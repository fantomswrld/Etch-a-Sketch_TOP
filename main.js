const container = document.querySelector('.container');

function makeGrid() {
    for(i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add('row');
        container.appendChild(row);

        console.log(row);

        for(j = 0; j < 16; j++) {
            const block = document.createElement("div");
            block.classList.add('block');
            row.appendChild(block);

            block.addEventListener('mouseover', () => {
                block.style.backgroundColor = '#414141';
            })
        }
    }
}

makeGrid();