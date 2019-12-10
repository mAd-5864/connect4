    let arrow
    let turn = 1


    function changeTurn() {
      if (turn === 1) {
        console.log(turn);
        turn = 2
        arrowColor()
      } else {
        console.log(turn);
        turn = 1
        arrowColor2()
      }
    }
    changeTurn()

    function arrowColor() {
      for (let i = 0; i < 6; i++) {
        arrow = document.querySelector(`#arrow${i}`)
        arrow.removeEventListener("click", function () {
          dropPiece(i, 1)
          changeTurn()
        })
        arrow.addEventListener("click", function () {
          dropPiece(i, 1)
          changeTurn()
        })
      }
    }

    function arrowColor2() {
      for (let i = 0; i < 6; i++) {
        arrow = document.querySelector(`#arrow${i}`)
        arrow.removeEventListener("click", function () {
          dropPiece(i, 2)
          changeTurn()
        })
        arrow.addEventListener("click", function () {
          dropPiece(i, 2)
          changeTurn()
        })
      }
    }

//    seta.innerHTML = <img src="./logos/arrow-down-red.png"></img>

console.log(board);