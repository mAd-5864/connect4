let number = 0
let numberM = 0
let attempts
let boardSize

if (localStorage.getItem("botDificulty") == undefined) {
    localStorage.setItem("botDificulty", "easy")
}

//easy difficulty CPU
function arrowCPU(value) {
    console.log("ARROWCPU!!!");
    for (let i = 0; i < boardLength; i++) {
        arrow = document.querySelector(`#arrow${i}`)
        arrow.disabled = true
    }
    randomNumber()
    console.log("entrou no arrowCPU");
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

//medium difficulty CPU
function arrowCPUMedium(value) {
    console.log("ARROWCPUMEDIUM!!!");
    for (let i = 0; i < boardLength; i++) {
        arrow = document.querySelector(`#arrow${i}`)
        arrow.disabled = true
    }
    setTimeout(function() {
        check3CPU()
    }, 1000)
}

function check3CPU() {
    attempts = 0
    boardSize = 0
    for (let x = 0; x < boardLength; x++) {
        for (let y = 0; y < boardLength; y++) {
            if (x < boardLength - 3 && board[y][x] != 0 && board[y][x + 1] == board[y][x] && board[y][x + 2] == board[y][x] && board[y][x + 3] == 0) {
                // verificar horizontal para a direita
                blockOpponent(x, y, 0, 3);
                console.log('bot H-R');
            } else if (x > 2 && board[y][x] != 0 && board[y][x - 1] == board[y][x] && board[y][x - 2] == board[y][x] && board[y][x - 3] == 0) {
                // verificar horizontal para a direita
                blockOpponent(x, y, 0, -3);
                console.log('bot H-L');
            } else if (y > 3 && board[y][x] != 0 && board[y - 1][x] == board[y][x] && board[y - 2][x] == board[y][x] && board[y - 3][x] == 0) {
                // verificar vertical
                blockOpponent(x, y, -3, 0);
                console.log('bot V');
            } else if (x < boardLength - 3 && y < boardLength - 3 && board[y][x] != 0 && board[y + 1][x + 1] == board[y][x] && board[y + 2][x + 2] == board[y][x] && board[y + 3][x + 3] == 0) {
                // verificar diagonal para baixo
                blockOpponent(x, y, 3, 3);
                console.log('bot D-D');
            } else if (x < boardLength - 3 && y > 2 && board[y][x] != 0 && board[y - 1][x + 1] == board[y][x] && board[y - 2][x + 2] == board[y][x] && board[y - 3][x + 3] == 0) {
                // verificar diagonal para cima
                blockOpponent(x, y, -3, 3);
                console.log('bot D-U');
            } else { attempts++ }
            boardSize++
        }
    }
    if (attempts == boardSize) {
        arrowCPU(2)
    }
}

function blockOpponent(x, y, yFourth, xFourth, ) {
    console.log("y: " + [y + yFourth + 1]);
    console.log("board length: " + boardLength);


    if (y + yFourth < boardLength - 1 && board[y + yFourth][x + xFourth] == 0 && board[y + yFourth + 1][x + xFourth] == 0) {
        attempts++
        console.log("Pensavas!!");
    } else if (board[y + yFourth][x + xFourth] == 0) {
        dropPiece(x + xFourth, 2)
        changeTurn()
        console.log("Pensavas!! 2");
    } else attempts++
}

//generate randomn column for the CPU to play in
function randomNumber() {
    let n = Math.random() * boardLength - 1
    number = Math.ceil(n);
    numberM = number
}

let botDificulty = JSON.parse(localStorage.getItem("botDificulty"))
//function to alternate turns
function changeTurn() {
    if (turn) {
        winCheck();
        // chanceRotate()
        arrowPlayer(player1Arrow, 1);
    } else {
        winCheck();
        // chanceRotate();
        switch (botDificulty) {
            case "easy": arrowCPU(2);
            break;
            case "medium": arrowCPUMedium(2);
            break;
        }
    }
    turn = !turn
}

//trigger alert to show winner
function findWhoWon(y, x) {
    if (board[y][x] === 1) {
        showWinModal(true)
    } else if (board[y][x] === 2) {
        showWinModal()
    }
}

//alert box shown on win situation
function showWinModal(winner) {
    let winModal = document.getElementById("winModal")
    document.getElementById("playAgain").addEventListener("click", function() { winModal.style.display = "none", resetBoard(); })
    if (winner) {
        document.getElementById("winPlayerName").innerHTML = "Ganhaste!"
    } else {
        document.getElementById("winPlayerName").innerHTML = "Perdeste!"
    }
    winModal.style.display = "block"
}