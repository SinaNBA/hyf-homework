function inner() {
    console.log('This the the inner function')
}

function outer() {
    return inner();
}

var forOuterFunct = outer();

forOuterFunct;