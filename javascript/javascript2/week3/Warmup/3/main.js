function secondsToShow(delay, stringToshow) {
    var stToShow = setTimeout(function () {
        console.log(stringToshow)
    }, delay * 1000);
};