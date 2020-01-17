let number = 0
let numberM = 0

function arrowCPU(value) {
  for (let i = 0; i < boardLength; i++) {
    arrow = document.querySelector(`#arrow${i}`)
    arrow.disabled = true
  }
  randomNumber()
  console.log("i:" + number);
  if (board[0][number] !== 0 && value === 2) {
    console.log(`Está ocupada por ${board[0][number]}`);
    arrowCPU(value)
  } else {
    setTimeout(function () {
      dropPiece(number, value)
    }, 1000)
    setTimeout(function () {
      changeTurn()
    }, 1000)
    count = count + 1
  }
}

function arrowCPUMedium(value) {
  CPUMediumNumber()
  console.log(numberM);
  setTimeout(function () {
    dropPiece(numberM, value)
  }, 1000)
  setTimeout(function () {
    changeTurn()
  }, 1000)
  count = count + 1
}

function CPUMediumNumber() {
  console.log("Entrou na função");
  randomNumber()
  console.log(numberM);
  for (let x = 0; x < boardLength; x++) {
    for (let y = 0; y < boardLength; y++) {
      if (board[y][x] == 2) {
        console.log("Entrou no if1");
        if (x < boardLength - 3 && board[y][x + 1] != 1) {
          if (x < boardLength - 3 && board[y][x + 1] != 1) {
            console.log("Entrou no if2");
            if (board[y][x + 2] != 1 || board[y][x + 3] != 1) {
              numberM = x + 1
              if (board[y][x + 1] == 2) {
                if (board[y][x + 2] != 1) {
                  numberM = x + 2
                  if (board[y][x] == 2) {
                    if (board[y][x + 3] != 1) {
                      number = x + 3
                    }
                  }
                }
              }
            }
          }
        } else if (x > boardLength - 4 && board[y][x - 1] != 1) {
          if (x > boardLength - 4 && board[y][x - 1] != 1) {
            console.log("Entrou no if3");
            if (board[y][x - 2] != 1 || board[y][x - 3] != 1) {
              numberM = x - 1
              if (board[y][x - 1] == 2) {
                if (board[y][x - 2] != 1) {
                  numberM = x - 2
                  if (board[y][x - 2] == 2) {
                    if (board[y][x - 3] != 1) {
                      numberM = x - 3
                    }
                  }
                }
              }
            }
          }
        } else if (y > boardLength - 4 && board[y - 1][x] != 1) {
          if (y > boardLength - 4 && board[y - 1][x] != 1) {
            console.log("Entrou no if4");
            if (board[y - 2][x] != 1 || board[y - 3][x] != 1) {
              numberM = x
              if (board[y - 1][x] == 2) {
                if (board[y - 2][x] != 1) {
                  numberM = x
                  if (board[y - 2][x] == 2) {
                    if (board[y - 3][x] != 1) {
                      numberM = x
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
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