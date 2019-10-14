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