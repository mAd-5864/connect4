function dropPiece(column, color) { //column => Número da coluna // color => red = 1 yellow = 2
    if (board[5][column] === 0) {
        board[5][column] = color
    } else {
        for (let i = 0; i < 6; i++) {
            if (board[i][column] === 0) {
                console.log("Espaço livre.");
            } else {
                board[i - 1][column] = color
                break
            }
        }
    }
}
//função para facilitar as peças a cair

for (let i = 0; i < 5; i++) {
    const seta = document.querySelector("#arrows") 
    console.log(seta.innerHTML);
    
//    seta.innerHTML = <img src="./logos/arrow-down-red.png"></img>
}