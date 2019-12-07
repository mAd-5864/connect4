let turn = 1
let winner = "";

let arrow0 = document.getElementById("arrow0")
let arrow1 = document.getElementById("arrow1")
let arrow2 = document.getElementById("arrow2")
let arrow3 = document.getElementById("arrow3")
let arrow4 = document.getElementById("arrow4")
let arrow5 = document.getElementById("arrow5")

let board = [[1, 0, 0, 0, 0, 0],
[2, 0, 0, 0, 0, 0],
[3, 0, 0, 0, 0, 0],
[4, 0, 0, 0, 0, 0],
[5, 0, 0, 0, 0, 0],
[6, 0, 0, 0, 0, 0]];



arrow0.addEventListener("click", function () {
    for (const i of board) {
        console.log(board[i][0]);
    }
}
)
arrow1.addEventListener("click", function () {
    for (const i of board) {
        console.log(board[i][1]);
    }
}
)
arrow2.addEventListener("click", function () {
    for (const i of board) {
        console.log(board[i][2]);
    }
}
)
arrow3.addEventListener("click", function () {
    for (const i of board) {
        console.log(board[i][3]);
    }
}
)
arrow4.addEventListener("click", function () {
    for (const i of board) {
        console.log(board[i][4]);
    }
}
)
arrow5.addEventListener("click", function () {
    for (const i of board) {
        console.log(board[i][5]);
    }
}
)

