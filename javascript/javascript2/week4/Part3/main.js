const spiritAnimalList = ['Faith Giraffe', 'Studies Hawk', 'Patience Mantis', 'Wisdom Owl', 'Light Butterfly', 'Secrets Scorpion', 'Fear Shark', 'Gentleness Deer', 'Loyalty Dog', 'Beauty Swan'];

function spiritAnimalMakerBtn() {
    if (document.getElementById("optionsForHtmlBtn").checked == false) {
        document.getElementById("optionsForHtmlBtn").checked = true;
    }
    document.getElementById("btn").disabled = false;
}

function spiritAnimalMakerHover() {
    if (document.getElementById("optionsForHtmlHover").checked == false) {
        document.getElementById("optionsForHtmlHover").checked = true;
    }
    document.getElementById("btn").disabled = true;
    document.getElementById("spiritAnimalInput").setAttribute("onmouseover", "spiritAnimalMaker()");
}

function spiritAnimalMakerWritten() {
    if (document.getElementById("optionsForHtmlWritten").checked == false) {
        document.getElementById("optionsForHtmlWritten").checked = true;
    }
    document.getElementById("btn").disabled = true;
    document.getElementById("spiritAnimalInput").setAttribute("onkeyup", "spiritAnimalMaker()");
}

function spiritAnimalMaker() {
    var randomNum = parseInt(Math.random() * 10);
    var name = document.getElementById("spiritAnimalInput");
    if (name.value === "") {
        document.getElementById("spiritAnimal").innerHTML = "Please enter a name in the textbox!";
    } else {
        document.getElementById("spiritAnimal").innerHTML = 'Your Name: ' + name.value + ': ' + name.value + ' - ' + spiritAnimalList[randomNum];
    }
}