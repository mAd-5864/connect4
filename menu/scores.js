let localData = JSON.parse(localStorage.getItem("playersNames"))

localData.sort(function(a, b) {
    return a.points - b.points;
}).reverse();

if (localData != undefined) {
    for (let i = 0; i < localData.length; i++) {
            if (localData[i]) document.getElementById(`txt${i + 1}Player`).innerHTML = `${i + 1}º - ${localData[i].player} : <span class="text-danger">${localData[i].points} </span> LP`
    }
}