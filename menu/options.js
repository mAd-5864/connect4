function setBoardLength() {
    const categoryElement = document.querySelector("#sltBoard")
    const categoryValue = categoryElement.options[categoryElement.selectedIndex].value

    JSON.stringify(localStorage.setItem("boardLength", categoryValue))
}

function setPlayerColors() {
    const selectedColor1 = document.getElementById("colorSelector1").options[document.getElementById("colorSelector1").selectedIndex].value
    const selectedColor2 = document.getElementById("colorSelector2").options[document.getElementById("colorSelector2").selectedIndex].value

    JSON.stringify(localStorage.setItem("Player1Color", selectedColor1))
    JSON.stringify(localStorage.setItem("Player2Color", selectedColor2))
}