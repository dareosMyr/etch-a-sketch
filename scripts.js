const container = document.querySelector('#container');
let reset = document.querySelector('#reset');

createGrid(16);

function createGrid(side) {
    items = side * side;
    for (let i = 0; i < items; i++){
        let divs = document.createElement('div');
        divs.setAttribute('name', 'gridItems');
        divs.style.width = 960/side + 'px';
        // divs.style.outline = '1px solid black';
        divs.addEventListener('mouseover', () => {
            divs.classList.add('color');
        });
        container.appendChild(divs);
    }
}

reset.addEventListener('click', () => {
    clearGrid();
    sizeGrid();
});

function sizeGrid() {
    side = prompt('Enter the length of a side', '16');
    let gridItems = document.getElementsByName('gridItems');
    while (gridItems[0]) {
        gridItems[0].remove();
    }
    createGrid(side);
}

function clearGrid() {
    let coloredDivs = document.getElementsByClassName('color');
    while (coloredDivs[0]){
        coloredDivs[0].classList.remove('color');
    }
}