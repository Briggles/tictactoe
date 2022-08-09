let gameBoard = (function() {
    let gameBoardArray = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']];
    let ticTacContainer = document.getElementById('gameContainer');

    const placeMarker = (x, y, value) => {
        if (gameBoardArray[x][y] === '') {
            gameBoardArray[x][y] = value;
            checkVictory(x, y, value);
            togglePlayer();
            drawBoard();
        }
    }

    const checkVictory = (x, y, marker) => {
            if (gameBoardArray[x][0] === marker && //check for 3 in row
                gameBoardArray[x][1] === marker &&
                gameBoardArray[x][2] === marker) {
                drawBoard();
                alert(currentPlayer.name + " wins!");
            }
            if (gameBoardArray[0][y] === marker && //check for 3 in column
            gameBoardArray[1][y] === marker &&
            gameBoardArray[2][y] === marker) {
            drawBoard();
            alert(currentPlayer.name + " wins!");
        }
        if (gameBoardArray[0][0] === marker && //check diag 1
        gameBoardArray[1][1] === marker &&
        gameBoardArray[2][2] === marker) {
        drawBoard();
        alert(currentPlayer.name + " wins!");
    }
    if (gameBoardArray[0][2] === marker && //check for diag 2
    gameBoardArray[1][1] === marker &&
    gameBoardArray[2][0] === marker) {
    drawBoard();
    alert(currentPlayer.name + " wins!");
}
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (gameBoardArray[i][j] === '') return;
        }
    }
    alert("Game is a draw!")
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
               // console.log(gameBoardArray[i][j]);
                ticTacBox.textContent = gameBoardArray[i][j];
                ticTacBox.addEventListener('click', () => {
                    placeMarker(i, j, currentPlayer.marker);
                });
                ticTacContainer.appendChild(ticTacBox);
            }
        }
        
        drawNames();
    }

    const drawNames = () => {
        const firstPlayer = document.getElementById('firstPlayer');
        const secondPlayer = document.getElementById('secondPlayer');
        if (currentPlayer === playerA) firstPlayer.style.fontWeight = 'bold';
        else firstPlayer.style.fontWeight = 'normal';
        if (currentPlayer === playerB) secondPlayer.style.fontWeight = 'bold';
        else secondPlayer.style.fontWeight = 'normal';
        firstPlayer.textContent = playerA.name + ": " + playerA.marker;
        secondPlayer.textContent = playerB.name + ": " + playerB.marker;
    }


    return {
        drawBoard, drawNames,
    };
})();

const Player = (name, marker) => {
    return { name, marker };
};

const nameListener = (function() {
    firstPlayer.addEventListener('click', () => {
        playerA.name = prompt('Enter player name: ', 'Player 1');
        gameBoard.drawNames();
    });

    secondPlayer.addEventListener('click', () => {
        playerB.name = prompt('Enter player name: ', 'Player 2');
        gameBoard.drawNames();
    });

})();

playerA = Player('Player 1', 'X');
playerB = Player('Player 2', 'O');
let currentPlayer = playerA;
gameBoard.drawBoard();
