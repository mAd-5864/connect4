let first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth
let localData = JSON.parse(localStorage.getItem("playersNames"))
console.log(localData);


if (localData != undefined) {
    first = localData[0]
    console.log(first);
    for (let j = 0; j < localData.length; j++) {
        for (let i = 0; i < localData.length; i++) {
            if (localData[i].points > first.points) {
                first = localData[i]
            } else
                if (localData[i].points <= first.points && localData[i].player != first.player) {
                    if (second) {
                        if (localData[i].points > second.points) {
                            second = localData[i]
                        }
                    } else second = localData[i]
                } if (second) {
                    if (localData[i].points <= second.points && localData[i].player != second.player && localData[i].player != first.player) {
                        if (third) {
                            if (localData[i].points > third.points) {
                                third = localData[i]
                            }
                        } else {
                            third = localData[i]
                        }
                    }
                } if (third) {
                    if (localData[i].points <= third.points && localData[i].player != third.player && localData[i].player != second.player && localData[i].player != first.player) {

                        if (fourth) {
                            if (localData[i].points > fourth.points) {
                                fourth = localData[i]
                            }
                        } else {
                            fourth = localData[i]
                        }
                    }
                } if (fourth) {
                    if (localData[i].points <= fourth.points && localData[i].player != fourth.player && localData[i].player != third.player && localData[i].player != second.player && localData[i].player != first.player) {

                        if (fifth) {
                            if (localData[i].points > fifth.points) {
                                fifth = localData[i]
                            }
                        } else {
                            fifth = localData[i]
                        }
                    }
                } if (fifth) {
                    if (localData[i].points <= fifth.points && localData[i].player != fifth.player && localData[i].player != fourth.player&& localData[i].player != third.player && localData[i].player != second.player && localData[i].player != first.player) {

                        if (sixth) {
                            if (localData[i].points > sixth.points) {
                                sixth = localData[i]
                            }
                        } else {
                            sixth = localData[i]
                        }
                    }
                } if (sixth) {
                    if (localData[i].points <= sixth.points && localData[i].player != sixth.player && localData[i].player != fifth.player && localData[i].player != fourth.player && localData[i].player != third.player && localData[i].player != second.player && localData[i].player != first.player) {

                        if (seventh) {
                            if (localData[i].points > seventh.points) {
                                seventh = localData[i]
                            }
                        } else {
                            seventh = localData[i]
                        }
                    }
                } if (seventh) {
                    if (localData[i].points <= seventh.points && localData[i].player != seventh.player && localData[i].player != sixth.player && localData[i].player != fifth.player && localData[i].player != fourth.player && localData[i].player != third.player && localData[i].player != second.player && localData[i].player != first.player) {

                        if (eighth) {
                            if (localData[i].points > eighth.points) {
                                eighth = localData[i]
                            }
                        } else {
                            eighth = localData[i]
                        }
                    }
                } if (eighth) {
                    if (localData[i].points <= eighth.points && localData[i].player != eighth.player && localData[i].player != seventh.player && localData[i].player != sixth.player && localData[i].player != fifth.player && localData[i].player != fourth.player && localData[i].player != third.player && localData[i].player != second.player && localData[i].player != first.player) {

                        if (ninth) {
                            if (localData[i].points > ninth.points) {
                                ninth = localData[i]
                            }
                        } else {
                            ninth = localData[i]
                        }
                    }
                } if (ninth) {
                    if (localData[i].points <= ninth.points && localData[i].player != ninth.player && localData[i].player != eighth.player && localData[i].player != seventh.player && localData[i].player != sixth.player && localData[i].player != fifth.player && localData[i].player != fourth.player && localData[i].player != third.player && localData[i].player != second.player && localData[i].player != first.player) {

                        if (tenth) {
                            if (localData[i].points > tenth.points) {
                                tenth = localData[i]
                            }
                        } else {
                            tenth = localData[i]
                        }
                    }
                }
        }
    }

}

if (first) document.getElementById("txt1Player").innerHTML = `1º - ${first.player} : <span class="text-danger">${first.points} </span> LP`
if (second) document.getElementById("txt2Player").innerHTML = `2º - ${second.player} : <span class="text-danger"> ${second.points} </span> LP`
if (third) document.getElementById("txt3Player").innerHTML = `3º - ${third.player} : <span class="text-danger"> ${third.points} </span> LP`
if (fourth) document.getElementById("txt4Player").innerHTML = `4º - ${fourth.player} : <span class="text-danger"> ${fourth.points} </span> LP`
if (fifth) document.getElementById("txt5Player").innerHTML = `5º - ${fifth.player} : <span class="text-danger"> ${fifth.points} </span> LP`
if (sixth) document.getElementById("txt6Player").innerHTML = `6º - ${sixth.player} : <span class="text-danger"> ${sixth.points} </span> LP`
if (seventh) document.getElementById("txt7Player").innerHTML = `7º - ${seventh.player} : <span class="text-danger"> ${seventh.points} </span> LP`
if (eighth) document.getElementById("txt8Player").innerHTML = `8º - ${eighth.player} : <span class="text-danger"> ${eighth.points} </span> LP`
if (ninth) document.getElementById("txt9Player").innerHTML = `9º - ${ninth.player} : <span class="text-danger"> ${ninth.points} </span> LP`
if (tenth) document.getElementById("txt10Player").innerHTML = `10º - ${tenth.player} : <span class="text-danger"> ${tenth.points} </span> LP`

