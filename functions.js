// board constructor
const boardLenght = 6
const board = []
function resetBoard() {
  for (let k = 0; k < boardLenght; k++) {
    board[k] = new Array(boardLenght).fill(0)
  }
  for (let i = 0; i < boardLenght; i++) {
    for (let j = 0; j < boardLenght; j++) {
      document.querySelector(`#slot${i}${j}`).className = ''
      
    }
    
  }
  //const table = document.getElementById('boardConstructor').innerHTML
}
resetBoard()



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
              alert('Pedro Mantorras Ganhou!');
              resetBoard();
            } else if (board[y][x] === 2) {
              console.log("Jogador 2 Ganhou!");
              alert('Vladimir Putin Ganhou!');
              resetBoard();
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

//buttons to allow clicks
let arrow
let redArrow = '<img src="./logos/arrow-down-red.png"></img>';
let yellowArrow = '<img src="./logos/arrow-down-yellow.png"></img>';

function arrowPlayer(color, value) {
  for (let i = 0; i < boardLenght; i++) {
    arrow = document.querySelector(`#arrow${i}`)
    arrow.innerHTML = color
    arrow.onclick = function () {
      if (board[0][i]===0) {
      dropPiece(i, value);
      winCheck();
      changeTurn();
      }
    }
  }
}


//switch turn btween the players
let turn
function changeTurn() {
  if (turn) {
    arrowPlayer(redArrow, 1);
  } else {
    arrowPlayer(yellowArrow, 2);
  }
  turn = !turn
}
arrowPlayer(redArrow, 1)

console.log(board);