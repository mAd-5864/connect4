function dropPiece(column, color) { //column => Número da coluna // color => red = 1 yellow = 2
    if (board[5][column] === 0) {
        board[5][column] = color
    } else {
        for (let i = 0; i < 6; i++) {
            if (board[i][column] === 0) {
                console.log("Espaço livre.");
            } else {
                board[i - 1][column] = color
            }
        }
    }
    console.log(board);
}
//função para facilitar as peças a cair

const arrows = document.querySelectorAll(`#arrow${column}`)
