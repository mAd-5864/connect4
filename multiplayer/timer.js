function DecrementMilli() {
    currentMilli = secs % 100;
    if(currentMilli <= 99) currentMilli = "000" + currentMilli;
    secs--;
    document.getElementById("tMilli").innerHTML = currentMilli; 
    if(mill !== -1) setTimeout('Decrement()',100);
}
    function DecrementSeconds() {
    currentSeconds = secs % 60;
    if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
    secs--;
    document.getElementById("tSeconds").innerHTML = currentSeconds; 
    if(secs !== -1) setTimeout('Decrement()',1000);
}