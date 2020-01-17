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
let alert = new customAlert();