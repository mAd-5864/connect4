function setBoardLength() {
    const categoryElement = document.querySelector("#sltBoard")
    const categoryValue = categoryElement.options[categoryElement.selectedIndex].value
    localStorage.setItem("boardLength", categoryValue)
}

let player1Color = ""
let player2Color = ""
let obj = {}

function sltPlayer1Color() {
    const categoryElement = document.querySelector("#sltPlayer1Color")
    player1Color = categoryElement.options[categoryElement.selectedIndex].value
}

function sltPlayer2Color() {
    const categoryElement = document.querySelector("#sltPlayer2Color")
    player2Color = categoryElement.options[categoryElement.selectedIndex].value
}

function setLocalColors() {
    sltPlayer1Color()
    sltPlayer2Color()
    if (player1Color != player2Color) {
        obj = {
            player1Color: player1Color,
            player2Color: player2Color
        }
        localStorage.setItem("playersColors", JSON.stringify(obj))
        document.getElementById("saveOptionsConfirm").classList.remove("display-none")
        document.getElementById("saveOptionsConfirm").className = "animationSlideUp"
        setTimeout(() => {
            location.reload()
        }, 2000);
    } else alert("As cores têm de ser diferentes")
}
