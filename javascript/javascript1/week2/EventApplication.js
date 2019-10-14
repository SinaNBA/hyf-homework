//Event application

function getEventWeekday(event) {
    var d = new Date();
    d.setDate(d.getDate() + event);
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDays[d.getDay()];
}

console.log(getEventWeekday(6));