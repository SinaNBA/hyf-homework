callAfterSecsVar = setTimeout(function () {
    console.log("Called after 2.5 seconds")
}, 2500);



var d = 3000;
var s = "Hello!";

function secondsToShow(delay, stringToshow) {
    var stToShow = setTimeout(function () {
        console.log(stringToshow)
    }, delay);
}

secondsToShow(d, s);