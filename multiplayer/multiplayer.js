function changeTurn() {
    if (turn) {
      winCheck();
      arrowPlayer(redArrow, 1);
    } else {
      winCheck();
      arrowPlayer(yellowArrow, 2);
    }
    turn = !turn
  }
function saveData() {
names = JSON.parse(sessionStorage.getItem("nome"))

let table = "<table>"

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
console.log(table);


table += "</table>"

const divTable = document.getElementById("divTable")
divTable.innerHTML = table
}

document.getElementById("btnQuit").addEventListener("click", function() {
  saveData()
})