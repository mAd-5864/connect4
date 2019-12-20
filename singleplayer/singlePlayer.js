let number = 0

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
  }else { 
    dropPiece(number, value)
    setTimeout(function () {
      
      changeTurn()
    }, 1250)
    count = count + 1
  }
}

function randomNumber() {
  let n = Math.random() * boardLength - 1
  number = Math.ceil(n);
}

function changeTurn() {
  if (turn) {
    //winCheck();
    arrowPlayer(redArrow, 1);
  } else {
   // winCheck();
    arrowCPU(2);
  }
  turn = !turn
}