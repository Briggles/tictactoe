let gameBoard = (function() {
    let gameBoardArray = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']];
    let ticTacContainer = document.getElementById('gameContainer');

    const placeMarker = (x, y, value) => {
        console.log(gameBoardArray[x][y]);
        if (gameBoardArray[x][y] === '') {
            gameBoardArray[x][y] = value;
            togglePlayer();
    }
        drawBoard();
    }

    const togglePlayer = () => {
        if (currentPlayer === playerA) {
            currentPlayer = playerB;
        }
        else {
            currentPlayer = playerA;
        }
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
                    placeMarker(i, j, currentPlayer.marker);
                });
                ticTacContainer.appendChild(ticTacBox);
            }
        }
    }

    return {
        drawBoard,
    };
})();

const Player = (name, marker) => {
    return { name, marker };
};

gameBoard.drawBoard();
playerA = Player('Player 1', 'X');
playerB = Player('Player 2', 'O');
let currentPlayer = playerA;