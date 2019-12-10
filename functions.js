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
                // console.log(`coluna: ${column}`);
                board[i][column] = color;
                break
            }
        }
    }


function winCheck() {
    console.log("----Horizontal----");
    for (let x = 0; x < 6; x++) {
      for (let y = 0; y < 6; y++) {
        if (x < 3 && board[y][x] != 0 && board[y][x + 1] == board[y][x]) {
          if (board[y][x + 2] == board[y][x]) {
            if (board[y][x + 3] == board[y][x]) {
              console.log("Ganhaste");
              return board[y][x]
              console.log(`Posicao [${x + 1},${y + 1}]`);
            }
          }
        }
      }
    }
    console.log("----Vertical----");
    for (let x = 0; x < 6; x++) {
      for (let y = 0; y < 6; y++) {
        if (y < 3 && board[y][x] != 0 && board[y + 1][x] == board[y][x]) {
          if (board[y + 2][x] == board[y][x]) {
            if (board[y + 2][x] == board[y][x]) {
              console.log("Ganhaste");
              console.log(`Posicao [${x + 1},${y + 1}]`);
            }
          }
        }
      }
    }
    console.log("----Diagonal Direita----");
    for (let x = 0; x < 6; x++) {
      for (let y = 0; y < 6; y++) {
        if (x < 3 && y < 3 && board[y][x] != 0 && board[y + 1][x + 1] == board[y][x]) {
          if (board[y + 2][x + 2] == board[y][x]) {
            if (board[y + 3][x + 3] == board[y][x]) {
              console.log("Ganhaste");
              console.log(`Posicao [${x + 1},${y + 1}]`);
            }
          }
        }
      }
    }
    console.log("----Diagonal Esquerda----");
    for (let x = 0; x < 6; x++) {
      for (let y = 0; y < 6; y++) {
        if ((x < 3) && (y > 3) && (board[y][x] != 0) && (board[y - 1][x + 1] == board[y][x])) {
          if (board[y - 2][x + 2] == board[y][x]) {
            if (board[y - 3][x + 3] == board[y][x]) {
              console.log("Ganhaste");
              console.log(`Posicao [${x + 1},${y + 1}]`);
            }
          }
        }
      }
    }
  }

