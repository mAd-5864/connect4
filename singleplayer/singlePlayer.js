let number = 0

function arrowCPU(color, value) {
    for (let i = 0; i < board.length; i++) {
      arrow = document.querySelector(`#arrow${i}`)
      arrow.innerHTML = color
    }
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
      arrowCPU(yellowArrow, 2);
    }
    turn = !turn
  }