// 1.Log out the text "Called after 2.5 seconds" 2.5 seconds after the script is loaded.
callAfterSecsVar = setTimeout(function () {
    console.log("Called after 2.5 seconds")
}, 2500);

// 2.Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
function secondsToShow(delay, stringToshow) {
    var stToShow = setTimeout(function () {
        console.log(stringToshow)
    }, delay * 1000);
};

secondsToShow(5, "This string logged after 5 seconds");
secondsToShow(10, "This string logged after 10 seconds");