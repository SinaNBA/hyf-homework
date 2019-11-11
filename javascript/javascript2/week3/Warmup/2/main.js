function secondsToShow(delay, stringToshow) {
    var stToShow = setTimeout(function () {
        console.log(stringToshow)
    }, delay * 1000);
};

secondsToShow(5, "This string logged after 5 seconds");
secondsToShow(10, "This string logged after 10 seconds");