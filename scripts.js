const container = document.querySelector('#container');

let side = 16;
let items = side * side;

for (let i = 0; i < items; i++){
    const divs = document.createElement('div');
    divs.style.width = 960/side + 'px';
    // divs.style.outline = '1px solid black';
    divs.addEventListener('mouseover', () => {
        divs.classList.add('color');
    });
    container.appendChild(divs);
}