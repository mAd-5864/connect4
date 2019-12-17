let number = 0

function arrowCPU(value) {
    randomNumber()
    console.log("i:" + number);
    
    setTimeout(function () {
      dropPiece(number, value)
    }, 500)
    setTimeout(function () {
      winCheck()
    }, 1000)
    setTimeout(function () {
      changeTurn()
    }, 1250)
  }

  function randomNumber() {
    let n = Math.random() * boardLength - 1
    number = Math.ceil(n);
  }

function changeTurn() {
    if (turn) {
      arrowPlayer(redArrow, 1);
    } else {
      arrowCPU(2);
    }
    turn = !turn
  }