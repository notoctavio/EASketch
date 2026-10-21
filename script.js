const container = document.querySelector('#container');
const sizeBtn = document.querySelector('#sizeBtn');

sizeBtn.addEventListener('click', function () {
    let input = prompt("Enter new grid size (1-100):");

    if (input === null) {
        return; // User cancelled the prompt
    }

    const size = Number(input);

    if (!Number.isInteger(size) || size < 1 || size > 100) {
        alert("Invalid input. Please enter an integer between 1 and 100.");
        return;
    }

    createGrid(size);
});

function createGrid(size) {
    container.replaceChildren(); // Clear existing squares

    const totalSquares = size * size;
    const squareSize = 100/size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');

        square.classList.add('square');

        square.style.width = squareSize + '%';
        square.style.height = squareSize + '%';

        square.addEventListener('mouseover', function () {
            square.classList.add('drawn');
        });

        container.appendChild(square);
    }
}

createGrid(16); // Default grid size

