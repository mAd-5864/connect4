// board constructor
const boardLength = 6
const board = []
let count = 0

function createBoard() {

  document.querySelector('.border').style.width = `${110 * boardLength}px`
  document.querySelector('.border').style.height = `${110 * boardLength}px`
  boardConstructor = document.querySelector("#boardConstructor")
  for (let r = 0; r < boardLength; r++) {
    boardConstructor.innerHTML += `<tr id="row${r}"></tr>`
    for (let c = 0; c < boardLength; c++) {
      row = document.querySelector(`#row${r}`)
      row.innerHTML += `<td><button type="button" id="slot-${r}-${c}" class="btn"></button></td>`
    }
  }
  divArrows = document.querySelector("#arrows")
  for (let i = 0; i < boardLength; i++) {
    divArrows.innerHTML += `<button id="arrow${i}"><img src="../logos/arrow-down-red.png"></img></button>`
  }
}
createBoard()

function resetBoard() {
  for (let k = 0; k < boardLength; k++) {
    board[k] = new Array(boardLength).fill(0)
  }
  colorBoard()
}
resetBoard()

function colorBoard() {
  for (let i = 0; i < boardLength; i++) {
    for (let j = 0; j < boardLength; j++) {
      if (board[j][i] === 1) {
        document.querySelector(`#slot-${j}-${i}`).className = 'red'
      } else if (board[j][i] === 2) {
        document.querySelector(`#slot-${j}-${i}`).className = 'yellow'
      } else {
        document.querySelector(`#slot-${j}-${i}`).className = ''
      }
    }
  }
}


  

// rotate board function
function chanceRotate() {
  let chance = Math.random() * 10;
  if (chance > 9.35) {
    console.log("Rodou Direita");
    rotateMatrixRight(board)
    dropAllPieces()
  } else if (chance < 0.35) {
    console.log("Rodou Esquerda");
    rotateMatrixRight(board)
    rotateMatrixRight(board)
    rotateMatrixRight(board)
    dropAllPieces()
  } else {
    console.log("Não rodou");
  }
}
function rotateMatrixRight(matrix) {
  const n = matrix.length;
  const x = Math.floor(n / 2);
  const y = n - 1;
  for (let i = 0; i < x; i++) {
    for (let j = i; j < y - i; j++) {
      k = matrix[i][j];
      matrix[i][j] = matrix[y - j][i];
      matrix[y - j][i] = matrix[y - i][y - j];
      matrix[y - i][y - j] = matrix[j][y - i]
      matrix[j][y - i] = k
    }
  }
  dropAllPieces()
}
function dropAllPieces() {
  for (let x = 0; x < boardLength; x++) {
    dropTroughColumn(x, 0)
  }
  colorBoard()
}
function dropTroughColumn(x, freeSpaces) {
  for (let y = boardLength -1; y >= 0; y--) {
    if (board[y][x] == 0 ) {
      freeSpaces += 1
    } else {
      board[y+freeSpaces][x] = board[y][x]
      if (freeSpaces != 0) {
        board[y][x] = 0
      }
    }
  }
}

// function to drop the piece trough the column
function dropPiece(column, color) { //column => Número da coluna // color => red = 1 yellow = 2
  for (let i = boardLength - 1; i >= 0; i--) {
    if (board[i][column] === 0) {
      board[i][column] = color;
      if (board[i][column] === 1) {
        document.querySelector(`#slot-${i}-${column}`).className = 'red'
      }
      if (board[i][column] === 2) {
        document.querySelector(`#slot-${i}-${column}`).className = 'yellow'
      }
      break
    }
  }
  count = count + 1
}

//function to check if anyone wins
function winCheck() {
  for (let x = 0; x < boardLength; x++) {
    for (let y = 0; y < boardLength; y++) {
      if (x < boardLength - 3 && board[y][x] != 0 && board[y][x + 1] == board[y][x]) {
        check4(x, y, 0, 2, 0, 3);
      }
      if (y < boardLength - 3 && board[y][x] != 0 && board[y + 1][x] == board[y][x]) {
        check4(x, y, 2, 0, 3, 0);
      }
      if (x < boardLength - 3 && y < boardLength - 3 && board[y][x] != 0 && board[y + 1][x + 1] == board[y][x]) {
        check4(x, y, 2, 2, 3, 3);
      }
      if (x < boardLength - 3 && y > 2 && board[y][x] != 0 && board[y - 1][x + 1] == board[y][x]) {
        check4(x, y, -2, 2, -3, 3);
      }
    }
  }
}

function check4(x, y, first, second, third, forth) {
  if (board[y + first][x + second] == board[y][x]) {
    if (board[y + third][x + forth] == board[y][x]) {
      count = 0
      findWhoWon(y, x);
    }
  }
}

function findWhoWon(y, x) {
  if (board[y][x] === 1) {
    alert('Jogador 1 Ganhou!');
    resetBoard();
  } else if (board[y][x] === 2) {
    alert('Jogador 2 Ganhou!');
    resetBoard();
  }
}


//buttons to allow clicks
let arrow
let redArrow = '<img src="../logos/arrow-down-red.png"></img>';
let yellowArrow = '<img src="../logos/arrow-down-yellow.png"></img>';

function arrowPlayer(color, value) {
  for (let i = 0; i < boardLength; i++) {
    arrow = document.querySelector(`#arrow${i}`)
    arrow.disabled = false
    arrow.innerHTML = color
    arrow.onclick = function () {
      if (board[0][i] === 0) {
        dropPiece(i, value);
        // setTimeout(function(){winCheck()}, 500)
        setTimeout(function () { changeTurn() }, 0)
      } else { window.alert('Coluna cheia!') }
    }
  }
  if (count == boardLength * boardLength) {
    alert("Empate!")
    setTimeout(function () { resetBoard() }, 300)
  }
}

//switch turn between the players
let turn

arrowPlayer(redArrow, 1)

console.log(board);