// board constructor
const boardLength = 6
const board = []

document.querySelector('.border').style.width = `${110*boardLength}px`
boardConstructor = document.querySelector("#boardConstructor")
for (let r = 0; r < boardLength; r++) {
  boardConstructor.innerHTML += `<tr id="row${r}"></tr>`
  for (let c = 0; c < boardLength; c++) {
    row = document.querySelector(`#row${r}`)
    row.innerHTML += `<td><button type="button" id="slot${r}${c}" class="btn"></button></td>`
  }
}
divArrows = document.querySelector("#arrows")
for (let i = 0; i < boardLength; i++) {
  divArrows.innerHTML += `<button id="arrow${i}"><img src="../logos/arrow-down-red.png"></img></button>`    
}

function resetBoard() {
  for (let k = 0; k < boardLength; k++) {
    board[k] = new Array(boardLength).fill(0)
  }
  for (let i = 0; i < boardLength; i++) {
    for (let j = 0; j < boardLength; j++) {
      document.querySelector(`#slot${i}${j}`).className = ''
    }
  }
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
   if (board[0][column] !== 0) {
    if (color = 2) {
      console.log(`Está ocupada por ${board[0][column]}`);
      arrowCPU(yellowArrow, 2);
    }
  } else { 
  for (let i = boardLength - 1; i >= 0; i--) {
  
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
}}

//function to check if anyone wins
function winCheck() {
  for (let x = 0; x < boardLength; x++) {
    for (let y = 0; y < boardLength; y++) {
      if (x < 3 && board[y][x] != 0 && board[y][x + 1] == board[y][x]) {
        if (board[y][x + 2] == board[y][x]) {
          if (board[y][x + 3] == board[y][x]) {
            if (board[y][x] === 1) {
              alert(`Jogador 1 Ganhou!`);
              resetBoard();
            } else if (board[y][x] === 2) {
              alert('Jogador 2 Ganhou!');
              resetBoard();
            }
            break
          }
        }
      }
      if (y < 3 && board[y][x] != 0 && board[y + 1][x] == board[y][x]) {
        if (board[y + 2][x] == board[y][x]) {
          if (board[y + 3][x] == board[y][x]) {
            if (board[y][x] === 1) {
              alert('Jogador 1 Ganhou!');
              resetBoard();
            } else if (board[y][x] === 2) {
              alert('Jogador 2 Ganhou!');
              resetBoard();
            }
            break
          }
        }
      }
      if (x < 3 && y < 3 && board[y][x] != 0 && board[y + 1][x + 1] == board[y][x]) {
        if (board[y + 2][x + 2] == board[y][x]) {
          if (board[y + 3][x + 3] == board[y][x]) {
            if (board[y][x] === 1) {
              alert('Jogador 1 Ganhou!');
              resetBoard();
            } else if (board[y][x] === 2) {
              alert('Jogador 2 Ganhou!');
              resetBoard();
            }
            break
          }
        }
      }
      if (x < 3 && y > 3 && board[y][x] != 0 && board[y - 1][x + 1] == board[y][x]) {
        if (board[y - 2][x + 2] == board[y][x]) {
          if (board[y - 3][x + 3] == board[y][x]) {
            if (board[y][x] === 1) {
              alert('Jogador 1 Ganhou!');
              resetBoard();
            } else if (board[y][x] === 2) {
              alert('Jogador 2 Ganhou!');
              resetBoard();
            }
            break
          }
        }
      }
    }
  }
}

//buttons to allow clicks
let arrow
let redArrow = '<img src="../logos/arrow-down-red.png"></img>';
let yellowArrow = '<img src="../logos/arrow-down-yellow.png"></img>';

function arrowPlayer(color, value) {
  for (let i = 0; i < boardLength; i++) {
    arrow = document.querySelector(`#arrow${i}`)
    arrow.innerHTML = color
    arrow.onclick = function () {
      if (board[0][i]===0) {
      dropPiece(i, value);
      setTimeout(function(){winCheck()}, 500)
      changeTurn(550);
      }
    }
  }
}

//switch turn between the players
let turn

arrowPlayer(redArrow, 1)

console.log(board);