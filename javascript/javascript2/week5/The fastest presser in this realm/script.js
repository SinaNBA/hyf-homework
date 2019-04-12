const counter = document.querySelector('body');
const log1 = document.getElementById('counter1Id');
const log2 = document.getElementById('counter2Id');

function resetGame() {
    log1.innerHTML = "";
    log2.innerHTML = "";
    document.getElementById('rightSide').setAttribute("class", "p-2 flex-fill bg-info");
    document.getElementById('leftSide').setAttribute("class", "p-2 flex-fill bg-warning");
    document.getElementById('secondsInput').value = "";
    counter.removeEventListener('keypress', logKey);
}

function forCallsecForPlay() {
    i = 1;
    j = 1;
    var seconds = document.getElementById('secondsInput');
    if (seconds.value > 0 && seconds.value < 11) {
        seconds = seconds.value * 1000;
        counter.addEventListener('keypress', logKey);
        secForPlay(seconds);
    } else {
        alert('Enter a number between 1-10 !!!');
    }
}

function logKey(e) {
    if (e.code == 'KeyL') {
        log1.innerHTML = i++;
    } else if (e.code == 'KeyS') {
        log2.innerHTML = j++;
    }
}

function secForPlay(secs) {
    setTimeout(function () {
        if (parseInt(log1.innerHTML) > parseInt(log2.innerHTML)) {
            document.getElementById('leftSide').setAttribute("class", "p-2 flex-fill bg-info winner");
        } else if (parseInt(log1.innerHTML) < parseInt(log2.innerHTML)) {
            document.getElementById('rightSide').setAttribute("class", "p-2 flex-fill bg-warning winner");
        } else if (parseInt(log1.innerHTML) === parseInt(log2.innerHTML)) {
            alert('Draw!!');
            resetGame();
        }
    }, secs)
}