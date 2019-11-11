var f1 = function func1() {
    return console.log("Hello")
};

var f2 = function func2() {
    return console.log("World")
}

function runAfterDelay(delay, callback) {
    setTimeout(function () {
        callback()
    }, delay * 1000);
}

runAfterDelay(5, f1);
runAfterDelay(7, f2);