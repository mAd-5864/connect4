function setBoardLength() {
    const categoryElement = document.querySelector("#sltBoard")
    const categoryValue = categoryElement.options[categoryElement.selectedIndex].value

    JSON.stringify(localStorage.setItem("boardLength", categoryValue))
}

function setPlayerColors() {
    const selectedColor1 = document.getElementById("colorSelector1").options[document.getElementById("colorSelector1").selectedIndex].value
    const selectedColor2 = document.getElementById("colorSelector2").options[document.getElementById("colorSelector2").selectedIndex].value

    if (selectedColor1 != selectedColor2) {
        JSON.stringify(localStorage.setItem("Player1Color", selectedColor1))
        JSON.stringify(localStorage.setItem("Player2Color", selectedColor2))
        document.getElementById("alertSameColors").classList.add("display-none")
        document.getElementById("saveOptionsConfirm").classList.remove("display-none")
        document.getElementById("saveOptionsConfirm").className = "animationSlideUp"
        setTimeout(() => {
            location.reload()
        }, 5000);
    } else {
        document.getElementById("saveOptionsConfirm").classList.add("display-none")
        document.getElementById("alertSameColors").classList.remove("display-none")
    document.getElementById("alertSameColors").className = "animationBlink"
    setTimeout(() => {
        location.reload()
    }, 2500);
}
}

function setBotDificulty() {
    const categoryElement = document.querySelector("#sltDifficultyAI")
    const categoryValue = categoryElement.options[categoryElement.selectedIndex].value
    localStorage.setItem("botDificulty", JSON.stringify(categoryValue))
}