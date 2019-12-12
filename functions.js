let arrow
let turn

// board constructor
const boardLenght = 6
const board = []
for (let k = 0; k < boardLenght; k++) {
  board[k] = new Array(boardLenght).fill(0)
}

// rotate board function
let ang = 0
function rotateElemR() {
  ang = ang + 90
  document.querySelector('.board').style.transform
    = `rotate(${ang}deg)`;
}
function rotateElemL() {
  ang = ang - 90
  document.querySelector('.board').style.transform
    = `rotate(${ang}deg)`;
}

function chanceRotate() {
  let chance = Math.random() * 10;
  if (chance > 9.35) {
    rotateElemR()
    console.log("Rodou Direita");
  } else if (chance < 0.35) {
    rotateElemL()
    console.log("Rodou Esquerda");
  } else {
    console.log("Não rodou");
  }

}

// function to drop the piece trough the column
function dropPiece(column, color) { //column => Número da coluna // color => red = 1 yellow = 2
  for (let i = boardLenght - 1; i >= 0; i--) {
    if (board[i][column] === 0) {
      console.log(`coluna: ${column}`);
      board[i][column] = color;
      if (board[i][column] === 1) {
        document.querySelector(`#slot${i}${column}`).className = 'red'
      }
      if (board[i][column] === 2) {
        document.querySelector(`#slot${i}${column}`).className = 'yellow'
      }
      break
    }
  }
}

//function to check if anyone wins
function winCheck() {
  for (let x = 0; x < boardLenght; x++) {
    for (let y = 0; y < boardLenght; y++) {
      if (x < 3 && board[y][x] != 0 && board[y][x + 1] == board[y][x]) {
        if (board[y][x + 2] == board[y][x]) {
          if (board[y][x + 3] == board[y][x]) {
            if (board[y][x] === 1) {
              console.log("Jogador 1 Ganhou");
            } else if (board[y][x] === 2) {
              console.log("Jogador 2 Ganhou!");
            }
            console.log(`Posicao [${x + 1},${y + 1}]`);
            break
          }
        }
      }
      if (y < 3 && board[y][x] != 0 && board[y + 1][x] == board[y][x]) {
        if (board[y + 2][x] == board[y][x]) {
          if (board[y + 3][x] == board[y][x]) {
            if (board[y][x] === 1) {
              console.log("Jogador 1 Ganhou!");
            } else if (board[y][x] === 2) {
              console.log("Jogador 2 Ganhou!");
            }
            console.log(`Posicao [${x + 1},${y + 1}]`);
            break
          }
        }
      }
      if (x < 3 && y < 3 && board[y][x] != 0 && board[y + 1][x + 1] == board[y][x]) {
        if (board[y + 2][x + 2] == board[y][x]) {
          if (board[y + 3][x + 3] == board[y][x]) {
            if (board[y][x] === 1) {
              console.log("Jogador 1 Ganhou");
            } else if (board[y][x] === 2) {
              console.log("Jogador 2 Ganhou!");
            }
            console.log(`Posicao [${x + 1},${y + 1}]`);
            break
          }
        }
      }
      if (x < 3 && y > 3 && board[y][x] != 0 && board[y - 1][x + 1] == board[y][x]) {
        if (board[y - 2][x + 2] == board[y][x]) {
          if (board[y - 3][x + 3] == board[y][x]) {
            if (board[y][x] === 1) {
              console.log("Jogador 1 Ganhou");
            } else if (board[y][x] === 2) {
              console.log("Jogador 2 Ganhou!");
            }
            console.log(`Posicao [${x + 1},${y + 1}]`);
            break
          }
        }
      }
    }
  }
}

//buttons to drop red pieces
function arrowPlayer1() {
  for (let i = 0; i < boardLenght; i++) {
    arrow = document.querySelector(`#arrow${i}`)
    arrow.innerHTML = '<img src="./logos/arrow-down-red.png"></img>'
    arrow.onclick = function () {
      dropPiece(i, 1);
      winCheck();
      changeTurn();
    }
  }
}

//buttons to drop yellow pieces
function arrowPlayer2() {
  for (let i = 0; i < boardLenght; i++) {
    arrow = document.querySelector(`#arrow${i}`)
    arrow.innerHTML = '<img src="./logos/arrow-down-yellow.png"></img>'
    arrow.onclick = function () {
      dropPiece(i, 2);
      winCheck();
      changeTurn()
    }
  }
}

//switch turn btween the players
function changeTurn() {
  if (turn) {
    arrowPlayer1()
  } else {
    arrowPlayer2()
  }
  turn = !turn
}
arrowPlayer1()

console.log(board);
