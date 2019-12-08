// Create variables for use in our game.
let Game = {};

// Global game config
Game.config = {
  startingPlayer: "red", // Choose 'yellow' or 'red'.
  takenMsg: "This position is already taken. Please make another choice.",
  drawMsg: "This game is a draw.",
  winMsg: "The winner is: ",
  countToWin: 4,

  // note: board dimensions are zero-indexed
  boardLength: 5,
  boardHeight: 5,
};
Game.currentPlayer = Game.config.startingPlayer;

// Global Game State

let board = 
[[0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0]];


function winCheck() {
  console.log("----Horizontal----");
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
      if (x < 3 && board[y][x] != 0 && board[y][x + 1] == board[y][x]) {
        if (board[y][x + 2] == board[y][x]) {
          if (board[y][x + 3] == board[y][x]) {
            console.log("Ganhaste");
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