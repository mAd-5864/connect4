let winModal = document.getElementById("winModal")
let playTime, display;
let timerStart
playTime = 15;

let hubPlayer1 = document.getElementById("hubPlayer1")
let hubPlayer2 = document.getElementById("hubPlayer2")
hubPlayer1.className = player1Color
hubPlayer1.style.marginLeft = boardLength * -50 + -350 + 'px'
hubPlayer2.className = player2Color
hubPlayer2.style.marginLeft = boardLength * 50 + 150 + 'px'
document.getElementById("hubTimer").style.marginLeft = boardLength * 50 + 150 + 'px'
timerDisplay = document.querySelector('#timer');

function changeTurn() {
    if (turn) {
        clearInterval(timerStart)
        winCheck();
        chanceRotate()
        startTimer(playTime, timerDisplay)
        arrowPlayer(player1Arrow, 1);
    } else {
        clearInterval(timerStart)
        winCheck();
        chanceRotate()
        startTimer(playTime, timerDisplay)
        arrowPlayer(player2Arrow, 2);
    }
    turn = !turn
}

function startTimer(duration, timerDisplay) {
    let timer = duration,
        seconds;
    timerStart = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = seconds + "s";

        if (--timer < 0 && winModal.style.display === "") {
            changeTurn()
            timer = duration;
        } else if (winModal.style.display === "block") {
            clearInterval(timerStart)
        }

        if (seconds <= 5) {
            timerDisplay.style.color = "red"
        } else {
            timerDisplay.style.color = '#fff'
        }
    }, 1000);
}





let obj1 = []
let obj2 = []
let names = []
let matchesPlayer1 = -1
let matchesPlayer2 = -1
let userPoints = 0
document.querySelector("#btnStart").addEventListener("click", setSessionStorage);

let startModal = document.getElementById("myModal");
window.onload = function() {
    startModal.style.display = "block";
}

function setSessionStorage(event) {

    event.preventDefault()
    const txtPlayer1 = document.getElementById("player1").value
    const txtPlayer2 = document.getElementById("player2").value

    if (txtPlayer1 != "" && txtPlayer2 != "") {
        document.getElementById("InGamePlayer1").innerHTML = txtPlayer1
        document.getElementById("InGamePlayer2").innerHTML = txtPlayer2
        obj1 = { player: txtPlayer1, points: 0 }
        obj2 = { player: txtPlayer2, points: 0 }
        names.push(obj1)
        names.push(obj2)
        sessionStorage.setItem("nome", JSON.stringify(names))
    }
    console.log("form validity: " + document.getElementsByTagName("form")[0].checkValidity());
    if (document.getElementsByTagName("form")[0].checkValidity()) {
        startModal.style.display = "none";
    }
    saveLocalData()
}

function saveLocalData() {
    if (localStorage.getItem("playersNames") == undefined) {
        if (JSON.parse(sessionStorage.getItem("nome")) != null) {
            localStorage.setItem("playersNames", JSON.stringify(JSON.parse(sessionStorage.getItem("nome"))))
        }
    } else if (localStorage.getItem("playersNames") != null) {
        names = JSON.parse(localStorage.getItem("playersNames"))
        for (let i = 0; i < JSON.parse(localStorage.getItem("playersNames")).length; i++) {

            if (obj1.player != JSON.parse(localStorage.getItem("playersNames"))[i].player) {

            } else matchesPlayer1 = i
        }
        for (let i = 0; i < JSON.parse(localStorage.getItem("playersNames")).length; i++) {
            if (obj2.player != JSON.parse(localStorage.getItem("playersNames"))[i].player) {

            } else matchesPlayer2 = i
        }

        if (obj1.length == 0) matchesPlayer1 = -2
        if (obj2.length == 0) matchesPlayer2 = -2

        if (matchesPlayer1 == -1 || matchesPlayer2 == -1) {
            if (matchesPlayer1 == -1) {
                names.push(obj1)
            }
            if (matchesPlayer2 == -1) {
                names.push(obj2)
            }
            localStorage.setItem("playersNames", JSON.stringify(names))
        }
    }
}

function refreshPoints() {
    names = JSON.parse(localStorage.getItem("playersNames"))

    if (matchesPlayer1 != -1) {
        if (player1Win == "true") {
            userPoints = names[matchesPlayer1].points
            names[matchesPlayer1].points = userPoints + 1
            localStorage.setItem("playersNames", JSON.stringify(names))
        } else {
            userPoints = names[matchesPlayer1].points
            names[matchesPlayer1].points = userPoints - 1
            localStorage.setItem("playersNames", JSON.stringify(names))
        }
    }
    if (matchesPlayer2 != -1) {
        if (player2Win == "true") {
            userPoints = names[matchesPlayer2].points
            names[matchesPlayer2].points = userPoints + 1
            localStorage.setItem("playersNames", JSON.stringify(names))
        } else {
            userPoints = names[matchesPlayer2].points
            names[matchesPlayer2].points = userPoints - 1
            localStorage.setItem("playersNames", JSON.stringify(names))
        }
    }
    if (matchesPlayer2 != -1) {
        if (matchesPlayer1 == -1) {
            if (player1Win == "true") {
                userPoints = names[names.length - 1].points
                names[names.length - 1].points = userPoints + 1
                localStorage.setItem("playersNames", JSON.stringify(names))
            } else {
                userPoints = names[names.length - 1].points
                names[names.length - 1].points = userPoints - 1
                localStorage.setItem("playersNames", JSON.stringify(names))
            }
        }
    }
    if (matchesPlayer2 == -1) {
        if (matchesPlayer1 == -1) {
            if (player1Win == "true") {
                userPoints = names[names.length - 2].points
                names[names.length - 2].points = userPoints + 1
                localStorage.setItem("playersNames", JSON.stringify(names))
            } else {
                userPoints = names[names.length - 2].points
                names[names.length - 2].points = userPoints - 1
                localStorage.setItem("playersNames", JSON.stringify(names))
            }
        }
    }

    if (matchesPlayer2 == -1) {
        if (player2Win == "true") {
            userPoints = names[names.length - 1].points
            names[names.length - 1].points = userPoints + 1
            localStorage.setItem("playersNames", JSON.stringify(names))
        } else {
            userPoints = names[names.length - 1].points
            names[names.length - 1].points = userPoints - 1
            localStorage.setItem("playersNames", JSON.stringify(names))
        }
    }
}

function findWhoWon(y, x, direction) {
    if (board[y][x] === 1) {
        clearInterval(timerStart)
        player1Win = "true"
        player2Win = "false"
        showWinModal(direction)
    } else if (board[y][x] === 2) {
        clearInterval(timerStart)
        player1Win = "false"
        player2Win = "true"
        showWinModal(direction)
    }
    refreshPoints()
}
//alert box shown on win situation
function showWinModal(direction) {
    document.getElementById("playAgain").addEventListener("click", function() { winModal.style.display = "", resetBoard(); })
    sessionData = JSON.parse(sessionStorage.getItem("nome"))
    if (player1Win == "true") document.getElementById("winPlayerName").innerHTML = `${sessionData[0].player} Ganhou na ${direction}!`
    if (player2Win == "true") document.getElementById("winPlayerName").innerHTML = `${sessionData[1].player} Ganhou na ${direction}!`
    winModal.style.display = "block"
}

document.getElementById("seeBoard").addEventListener("click", function() {
    winModal.style.display = "none"
    for (let i = 0; i < boardLength; i++) {
        arrow = document.querySelector(`#arrow${i}`)
        arrow.disabled = true
    }
})