function forCallSecondsToShow() {
    var d = document.getElementById("setDelay");
    var s = document.getElementById("setString");
    d = d.value * 1000;
    secondsToShow(d, s.value);
}

function secondsToShow(delay, stringToshow) {
    var stToShow = setTimeout(function () {
        alert(stringToshow)
    }, delay);
}