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

    for (let i = 0; i < 6; i++) {
         arrow = document.querySelector(`#arrow${i}`)
         arrow.addEventListener("click", changeTurn)
    }
     function arrowColor() {
      for (let i = 0; i < 6; i++) {
         arrow = document.querySelector(`#arrow${i}`)
        arrow.onclick = function() {
          dropPiece(i, 1);
          winCheck()
        };
    }}

    function arrowColor2() {
      for (let i = 0; i < 6; i++) {
        arrow = document.querySelector(`#arrow${i}`)
        arrow.onclick = function() {
          dropPiece(i, 2);
          winCheck()
        };
    }} 

//    seta.innerHTML = <img src="./logos/arrow-down-red.png"></img>

console.log(board);