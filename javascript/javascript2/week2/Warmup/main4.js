var f = function func1() {
    return console.log("hello")
}

function runAfterDelay(delay, callback) {
    setTimeout(function () {
        callback()
    }, delay);
}

runAfterDelay(5000, f);