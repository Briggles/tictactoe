let gameBoard = (function() {
    let gameBoardArray = [
    ['X', 'X', 'O'],
    ['O', 'X', 'X'],
    ['O', 'O', 'X']];
    let ticTacContainer = document.getElementById('gameContainer');

    const placeMarker = (x, y, value) => {
        console.log(gameBoardArray[x][y]);
        gameBoardArray[x][y] = value;
        drawBoard();
    }

    const clearDisplay = (display) => {
        while (ticTacContainer.firstChild) {
          ticTacContainer.removeChild(ticTacContainer.lastChild);
        }}


    const drawBoard = () => {
        clearDisplay(ticTacContainer);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let ticTacBox = document.createElement('div');
                ticTacBox.className = 'ticTacBox';
                ticTacBox.id = 'row' + i + 'col' + j;
                console.log(gameBoardArray[i][j]);
                ticTacBox.textContent = gameBoardArray[i][j];
                ticTacBox.addEventListener('click', () => {
                    console.log(i);
                    placeMarker(i, j, 'poop');
                });

                ticTacContainer.appendChild(ticTacBox);
            }
        }
    }

    return {
        drawBoard,
    };
})();

//gameBoard;
gameBoard.drawBoard();