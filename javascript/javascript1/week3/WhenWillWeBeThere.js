//When will we be there??

function calculateTimeToReach(speedDistance) {
    var time;
    time = speedDistance.destinationDistance / speedDistance.speed; //calculate km/h
    var hour = parseInt(time);
    var minute = parseInt((time - hour) * 60);
    return hour + " hours and " + minute + " minutes .";
}

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

const travelTime = calculateTimeToReach(travelInformation);
console.log(travelTime);