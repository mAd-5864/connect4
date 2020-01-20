if (localStorage.getItem("playersNames") == null) {
localStorage.setItem("playersNames", JSON.stringify(JSON.parse(sessionStorage.getItem("nome"))))
} else 

if (localStorage.getItem("playersNames") != null) {
    let names = []
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