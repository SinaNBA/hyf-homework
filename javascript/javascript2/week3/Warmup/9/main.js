var logFunnyJoke = function () {
    alert('Q: How does a tech guy drink coffee?                                                                              A: He installs Java!');
};

function jokeCreator(shouldTellFunnyJoke, logFJ) {
    if (shouldTellFunnyJoke === true) {
        logFJ();
    }
}