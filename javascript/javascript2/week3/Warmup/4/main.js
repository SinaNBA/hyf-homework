var logEarth = function () {
    return console.log("Earth")
}
var logSaturn = function () {
    return console.log("Saturn")
}

function thirdFunction(planetLogFunction) {
    planetLogFunction();
}

thirdFunction(logEarth);
thirdFunction(logSaturn);