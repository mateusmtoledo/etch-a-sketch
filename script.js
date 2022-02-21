const container = document.querySelector('.container');
const squares = [];
const rows = [];
const button = document.querySelector('button');
const lastTen = [];

button.addEventListener('click', () => {
    let numberOfRows = prompt('Enter the number of rows:');
    while (numberOfRows > 100) numberOfRows = prompt('The maximum amount of rows is 100.\nEnter the number of rows:');
    while (rows.length > 0) {
        container.removeChild(rows[0]);
        rows.shift();
    }
    lastTen.splice(0,lastTen.length);
    createGrid(numberOfRows);
})

function returnRandomColor () {
    let randomColor = {
        red: Math.floor(Math.random()*256), 
        green: Math.floor(Math.random()*256), 
        blue: Math.floor(Math.random()*256)
    };
    randomColor.redDecrement = randomColor.red/10;
    randomColor.greenDecrement = randomColor.green/10;
    randomColor.blueDecrement = randomColor.blue/10;
    return randomColor;
}

function returnRgbString (color) {
    return 'rgb(' + Math.round(color.red) + ',' + Math.round(color.green) + ',' + Math.round(color.blue) + ')';
}

function addBlack (element) {
    element[1].red = element[1].red - element[1].redDecrement;
    element[1].green = element[1].green - element[1].greenDecrement;
    element[1].blue = element[1].blue - element[1].blueDecrement;
    squares[element[0]].style.backgroundColor = returnRgbString(element[1]);
}

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
            squares[j].addEventListener('mouseover', () => {
                let color = returnRandomColor();
                squares[j].style.backgroundColor = returnRgbString(color);
                lastTen.forEach(addBlack);
                if (lastTen.length >= 10) lastTen.shift();
                lastTen.push([j, color]);
            });
        }
    }
}

createGrid (16);