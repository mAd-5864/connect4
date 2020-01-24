let playTime, display;
let timerStart
function changeTurn() {
  if (turn) {
    winCheck();
    arrowPlayer(redArrow, 1);
    clearInterval(timerStart)
    startTimer(playTime, display)
  } else {
    winCheck();
    arrowPlayer(yellowArrow, 2);
    clearInterval(timerStart)
    startTimer(playTime, display)
  }
  turn = !turn
}


function startTimer(duration, display) {
  let timer = duration, seconds;
  timerStart = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = seconds + "s";

    if (--timer < 0) {
      changeTurn()
      timer = duration;
    }

    if (seconds <= 5) {
      display.style.color = "red"
    } else {
      display.style.color = '#fff'
    }
  }, 1000);
}

window.onload = () => {
  playTime = 14;
  display = document.querySelector('#timer');
  startTimer(playTime, display);
};

function customAlert(button) {
  this.render = () => {
    let winH = window.innerHeight
    let winW = window.innerWidth
    let dialogOverlay = document.getElementById('dialogoverlay')
    let dialogBox = document.getElementById('dialogbox')
    dialogOverlay.style.display = "block"
    dialogOverlay.style.height = winH+"px"
  }
  this.ok = () => {

  }
}

let table

function saveData() {
names = JSON.parse(sessionStorage.getItem("nome"))

table = "<table>"

for (const name of names) {
  if (name.player1) {
    table += `
    <tr>
     <td> ${name.player1} </td>
     </tr>
    `
  } if (name.player2) {
    table += `
    <tr>
     <td> ${name.player2} </td>
     </tr>
    `
  }
}
table += "</table>"
console.log(table);
const divTable = document.getElementById("divTable")
divTable.innerHTML = table
console.log(document.getElementById("divTable"));
}
/* saveData() */
/* 
for (const name of names) {
  if (name.player1) {
    document.getElementById("player1").innerHTML = name.player1
  }
if (name.player2) {
  document.getElementById("player2").innerHTML = name.player2
}
} */

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
window.onload = function() {
  modal.style.display = "block";
}
const obj1
const obj2
let names = []
document.querySelector("#btnStart").addEventListener("click", setSessionStorage);
function setSessionStorage(event) {
    const txtPlayer1 = document.getElementById("player1").value
        const txtPlayer2 = document.getElementById("player2").value
        if (txtPlayer1 != "" && txtPlayer2 != "") {
              obj1 = {player:txtPlayer1, points: 0}
              obj2 = {player:txtPlayer2, points: 0} 
              names.push(obj1)
              names.push(obj2)
              sessionStorage.setItem("nome", JSON.stringify(names))
        }
    event.preventDefault()
    console.log(document.getElementsByTagName("form")[0].checkValidity());
    if (document.getElementsByTagName("form")[0].checkValidity()) {
      modal.style.display = "none";
    }  
saveLocalData()
}
function saveLocalData() {
if (localStorage.getItem("playersNames") == null) {
    if (JSON.parse(sessionStorage.getItem("nome")) != null) {
      localStorage.setItem("playersNames", JSON.stringify(JSON.parse(sessionStorage.getItem("nome"))))
    }
} else 

if (localStorage.getItem("playersNames") != null) {
    names = []
    for (let i = 0; i < JSON.parse(localStorage.getItem("playersNames")).length; i++) {
        names.push(JSON.parse(localStorage.getItem("playersNames"))[i])
        if (obj1.player != JSON.parse(localStorage.getItem("playersNames"))[i].player) {
          names.push(obj1)
        }
        if (obj2.player != JSON.parse(localStorage.getItem("playersNames"))[i].player) {
          names.push(obj2)
        }
    } 
    console.log(names);
localStorage.setItem("playersNames", JSON.stringify(names))
}
}

function refreshPoints() {
  for (let i = 0; i < JSON.parse(localStorage.getItem("playersNames")).length; i++) {
if (obj1.player == JSON.parse(localStorage.getItem("playersNames"))[i].player) {
  if (gameWon == true) {
  
  }
}}
}