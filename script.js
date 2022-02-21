const container = document.querySelector('.container');
const squares = [];
const rows = [];

function createGrid(numberOfRows) {
    for (let i = 0; i < numberOfRows; i++) {
        rows[i] = document.createElement('div');
        container.appendChild(rows[i]);
        rows[i].classList.add('row');
        for (let j = i * numberOfRows; j < (i + 1) * numberOfRows; j++) {
            squares[j] = document.createElement('div');
            rows[i].appendChild(squares[j]);
            squares[j].classList.add('square');
            squares[j].style.width = 640/numberOfRows + 'px';
            squares[j].style.height = 640/numberOfRows + 'px';
            squares[j].addEventListener('mouseover', () => squares[j].classList.add('hover'));
        }
    }
}

createGrid (16);