//Goodboy-Oldboy (A dog age calculator)

var dogYearOfBirth;
var dogYearFuture = 2027;
var dogYear;
var humanYear;

function shouldShowResultInDogYears() {
    dogYearOfBirth = document.getElementById("dogAge").value;
    humanYear = dogYearFuture - dogYearOfBirth;
    dogYear = humanYear * 7;
    if (document.getElementById("dogYears").checked == false) {
        window.alert("Your dog will be " + humanYear + " human years old in 2027");
    } else {
        window.alert("Your dog will be " + dogYear + " dog years old in 2027");
    }
}