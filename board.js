let board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]];


function colorPiece() {
let i = 0
  for (let x = 0; x <= 5; x++) {
    for (let y = 0; y <= 5; y++) { i++
     if (board[y][x] === 1) {
       document.querySelector(`#slot${i}`).className = "red"
     }
     else if (board[y][x] === 2) {
       document.querySelector(`#slot${i}`).className = "yellow"
     }
  }}}

 
  
  
  