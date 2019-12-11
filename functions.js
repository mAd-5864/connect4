let arrow
let turn


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
function dropPiece(column, color) { //column => Número da coluna // color => red = 1 yellow = 2

  for (let i = 5; i >= 0; i--) {
    if (board[i][column] === 0) {
      console.log(`coluna: ${column}`);
      board[i][column] = color;
      colorSlot()
      break
    }
  }
}
function colorSlot() {
  let i = 0
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
      i++
      console.log(i);
      if (board[y][x] === 1) {
        document.querySelector(`#slot${i}`).className = 'red'
        
      } else if (board[y][x] === 2) {
        document.querySelector(`#slot${i}`).className = 'yellow'
        
      } else {
      } 
    }
  }
}
function winCheck() {
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
      if (x < 3 && board[y][x] != 0 && board[y][x + 1] == board[y][x]) {
        if (board[y][x + 2] == board[y][x]) {
          if (board[y][x + 3] == board[y][x]) {
            console.log("Ganhaste Horizontal");
            console.log(`Posicao [${x + 1},${y + 1}]`);
            return board[y][x]
          }
        }
      }
    }
  }
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
      if (y < 3 && board[y][x] != 0 && board[y + 1][x] == board[y][x]) {
        if (board[y + 2][x] == board[y][x]) {
          if (board[y + 2][x] == board[y][x]) {
            console.log("Ganhaste Vertical");
            console.log(`Posicao [${x + 1},${y + 1}]`);
            return board[y][x]
          }
        }
      }
    }
  }
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
      if (x < 3 && y < 3 && board[y][x] != 0 && board[y + 1][x + 1] == board[y][x]) {
        if (board[y + 2][x + 2] == board[y][x]) {
          if (board[y + 3][x + 3] == board[y][x]) {
            console.log("Ganhaste Diagonal");
            console.log(`Posicao [${x + 1},${y + 1}]`);
          }
        }
      }
    }
  }
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
      if ((x < 3) && (y > 3) && (board[y][x] != 0) && (board[y - 1][x + 1] == board[y][x])) {
        if (board[y - 2][x + 2] == board[y][x]) {
          if (board[y - 3][x + 3] == board[y][x]) {
            console.log("Ganhaste Diagonal");
            console.log(`Posicao [${x + 1},${y + 1}]`);
          }
        }
      }
    }
  }
}

function arrowPlayer1() {
  for (let i = 0; i < 6; i++) {
    arrow = document.querySelector(`#arrow${i}`)
    arrow.innerHTML = '<img src="./logos/arrow-down-red.png"></img>'
    arrow.onclick = function () {
      dropPiece(i, 1);
      winCheck();
      changeTurn();
    }
  }
}

function arrowPlayer2() {
  console.log("-----------");
  for (let i = 0; i < 6; i++) {
    arrow = document.querySelector(`#arrow${i}`)
    arrow.innerHTML = '<img src="./logos/arrow-down-yellow.png"></img>'
    arrow.onclick = function () {
      dropPiece(i, 2);
      winCheck();
      changeTurn()
    }
  }
}
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