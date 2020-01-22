let names = []
document.querySelector("#btnStart").addEventListener("click", setSessionStorage);
function setSessionStorage(event) {
    const txtPlayer1 = document.getElementById("player1").value
        const txtPlayer2 = document.getElementById("player2").value
        if (txtPlayer1 != "" && txtPlayer2 != "") {
            if (txtPlayer1 == "Atum" && txtPlayer2 == "Mantorras") {
                const obj1 = {player1:txtPlayer1, points: 100}
                const obj2 = {player2:txtPlayer2, points: 100} 
                names.push(obj1)
                names.push(obj2)
                sessionStorage.setItem("nome", JSON.stringify(names))
                } else {
                const obj1 = {player1:txtPlayer1, points: 0}
                const obj2 = {player2:txtPlayer2, points: 0} 
                names.push(obj1)
                names.push(obj2)
                sessionStorage.setItem("nome", JSON.stringify(names))
                }
        }
    event.preventDefault()
    console.log(document.getElementsByTagName("form")[0].checkValidity());
    if (document.getElementsByTagName("form")[0].checkValidity()) {
         window.location.href='multiplayer.html' 
    }  

}

if (localStorage.getItem("playersNames") == null) {
    if (JSON.parse(sessionStorage.getItem("nome")) != null) {
        localStorage.setItem("playersNames", JSON.stringify(JSON.parse(sessionStorage.getItem("nome"))))
    }
} else 

if (localStorage.getItem("playersNames") != null) {
    names = []
    for (let i = 0; i < JSON.parse(localStorage.getItem("playersNames")).length; i++) {
        names.push(JSON.parse(localStorage.getItem("playersNames"))[i])
    }
    console.log(JSON.parse(sessionStorage.getItem("nome"))[0]);
    names.push(JSON.parse(sessionStorage.getItem("nome"))[0])
    names.push(JSON.parse(sessionStorage.getItem("nome"))[1])
    console.log(names);
JSON.parse(sessionStorage.getItem("nome"))[0]
localStorage.setItem("playersNames", JSON.stringify(names))
}