let gameBoard = (function() {
    let gameBoardArray = [
    ['X', 'X', 'O'],
    ['O', 'X', 'X'],
    ['O', 'O', 'X']];

    const drawBoard = () => {
       let ticTacContainer = document.getElementById('gameContainer');
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                let ticTacBox = document.createElement('div');
                ticTacBox.className = 'ticTacBox';
                ticTacBox.textContent = gameBoardArray[i][j];
//                console.log(ticTacContainer.textContent);
  //              console.log(gameBoardArray[i][j]);
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