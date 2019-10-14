//Candy helper

const boughtCandyPrices = [];

function addCandy(candyType, weight) {

    switch (candyType) {
        case 'Sweet':
            boughtCandyPrices.push(0.5 * weight);
            break;
        case 'Chocolate':
            boughtCandyPrices.push(0.7 * weight);
            break;
        case 'Toffee':
            boughtCandyPrices.push(1.1 * weight);
            break;
        case 'Chewing - gum':
            boughtCandyPrices.push(0.03 * weight);
            break;
        default:
            return console.log("The value is not valid");
    }
    if (canBuyMoreCandy()) {
        return console.log("You can buy more, so please do!");
    } else {
        return console.log("Enough candy for you!");
    }
}

var amountToSpend = Math.floor(Math.random() * 100);

function canBuyMoreCandy() {
    var boughtCandy = 0;
    var i = 0
    while (i < boughtCandyPrices.length) {
        boughtCandy += boughtCandyPrices[i];
        i++;
    }
    if (boughtCandy < amountToSpend) {
        return true;
    } else {
        return false;
    }
}

addCandy('Sweet', 50);
addCandy('Toffee', 100);
addCandy('Chewing - gum', 60);
addCandy('ChewingGum', 60); //Wrong value