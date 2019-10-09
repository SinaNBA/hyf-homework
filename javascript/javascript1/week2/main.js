

//Event application

function getEventWeekday(event) {
    var d = new Date();
    d.setDate(d.getDate() + event);
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDays[d.getDay()];
}

console.log(getEventWeekday(6));

//Weather wear

function clothToWearByTemp(temp) {
    if (temp > 20) {
        return "shorts and a t-shirt";
    } else if (temp > 12 && temp < 20) {
        return "Pants and Sweater";
    } else if (temp > 0 && temp < 12) {
        return "Warm Pants and Sweater and Coat";
    } else if (temp < 0) {
        return "Stay at home ;-)";
    }
}
const clothesToWear = clothToWearByTemp(-2);
console.log(clothesToWear);

//Student manager

const class07Students = [];

function addStudentToClass(studentName) {
    if (studentName === "") {
        return "You cannot add an empty string to a class";
    }
    if (class07Students.length >= 6 && !(studentName === "Queen")) {
        return "Cannot add more students to class 07";
    }

    for (var i = 0; i <= class07Students.length; i++) {
        if (class07Students[i] === studentName) {
            return 'Student ' + studentName + ' is already in the class';
        }
    }
    class07Students.push(studentName);

}

function getNumberOfStudents() {
    return "The number of students in the class is " + class07Students.length;
}

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
            return "The value is not valid"
    }
    if (canBuyMoreCandy()) {
        return "You can buy more, so please do!";
    } else {
        return "Enough candy for you!";
    }
}

var amountToSpend = Math.floor(Math.random() * 100);

function canBuyMoreCandy() {
    var boughtCandy = 0;
    for (var i = 0; i < boughtCandyPrices.length; i++) {
        boughtCandy += boughtCandyPrices[i];
    }
    if (boughtCandy < amountToSpend) {
        return true;
    } else {
        return false;
    }
}