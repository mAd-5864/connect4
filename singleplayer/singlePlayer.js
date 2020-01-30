let number = 0
let numberM = 0

function arrowCPU(value) {
    for (let i = 0; i < boardLength; i++) {
        arrow = document.querySelector(`#arrow${i}`)
        arrow.disabled = true
    }
    randomNumber()
    console.log("coluna:" + number);
    if (board[0][number] !== 0 && value === 2) {
        console.log(`Está ocupada por ${board[0][number]}`);
        arrowCPU(value)
    } else {
        setTimeout(function() {
            dropPiece(number, value)
        }, 1000)
        setTimeout(function() {
            changeTurn()
        }, 1000)
    }
}

function arrowCPUMedium(value) {
    for (let i = 0; i < boardLength; i++) {
        arrow = document.querySelector(`#arrow${i}`)
        arrow.disabled = true
    }
    setTimeout(function() {
        check3CPU()
    }, 1000)
    setTimeout(function() {
        changeTurn()
    }, 1000)
}

function check3CPU() {
    for (let x = 0; x < boardLength; x++) {
        for (let y = 0; y < boardLength; y++) {
            if (x < boardLength - 3 && board[y][x] != 0 && board[y][x + 1] == board[y][x]) {
                blockOpponent(x, y, 0, 2, 0, 3);
                console.log('bot 1');
            } else if (y > 3 && board[y][x] != 0 && board[y - 1][x] == board[y][x]) {
                blockOpponent(x, y, -2, 0, -3, 0);
                console.log('bot 2');
            } else if (x < boardLength - 3 && y < boardLength - 3 && board[y][x] != 0 && board[y + 1][x + 1] == board[y][x]) {
                blockOpponent(x, y, 2, 2, 3, 3);
                console.log('bot 3');
            } else if (x < boardLength - 3 && y > 2 && board[y][x] != 0 && board[y - 1][x + 1] == board[y][x]) {
                blockOpponent(x, y, -2, 2, -3, 3);
                console.log('bot 4');
            }
        }
    }
}

function blockOpponent(x, y, first, second, third, forth) {
    if (board[y + first][x + second] == board[y][x]) {
        console.log(board[y + third - 1][x + forth]);
        console.log("third: " + y);
        if (y < boardLength && board[y + third][x + forth] == 0) {
            dropPiece(x + forth, 2)
            console.log("Pensavas!!");
        } else if (y > boardLength + 1 && [y + third + 1][x + forth] == 0 && board[y + third][x + forth] == 0) {
            dropPiece(x + forth, 2)
            console.log("Pensavas!! 2");
        } else arrowCPU(2)
    }
}

function randomNumber() {
    let n = Math.random() * boardLength - 1
    number = Math.ceil(n);
    numberM = number
}

function changeTurn() {
    if (turn) {
        winCheck();
        arrowPlayer(redArrow, 1);
    } else {
        winCheck();
        arrowCPUMedium(2);
    }
    turn = !turn
}

function findWhoWon(y, x) {
    if (board[y][x] === 1) {
        showWinModal(true)
        resetBoard();
    } else if (board[y][x] === 2) {
        showWinModal()
        resetBoard();
    }
}

//alert box shown on win situation
function showWinModal(winner) {
    let winModal = document.getElementById("winModal")
    document.getElementById("playAgain").addEventListener("click", function() { winModal.style.display = "none" })
    if (winner) {
        document.getElementById("winPlayerName").innerHTML = "Ganhaste!"
    } else {
        document.getElementById("winPlayerName").innerHTML = "Perdeste!"
    }
    winModal.style.display = "block"
}