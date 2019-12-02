
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



let chance
function chanceRotate() {
    let chance = Math.random() * 10;
    if (chance > 9.2) {
        rotateElemR()
        console.log("Rodou Direita");

    } else if (chance < 0.5) {
        rotateElemL()
        console.log("Rodou Esquerda");
    } else {
        console.log("Não rodou");

    }

}


