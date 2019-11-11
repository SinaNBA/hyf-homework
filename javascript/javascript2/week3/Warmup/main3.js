var printEarth = function func1() {
    return console.log("Earth")
}
var printSaturn = function func2() {
    return console.log("Saturn")
}

function func3(planetLogFunction) {
    planetLogFunction();
}

func3(printEarth);
func3(printSaturn);