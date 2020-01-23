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
  playTime = 24;
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
saveData()

for (const name of names) {
  if (name.player1) {
    document.getElementById("player1").innerHTML = name.player1
  }
if (name.player2) {
  document.getElementById("player2").innerHTML = name.player2
}
}
