//Age-ify (A future age calculato

var yearOfBirth = 1990;
var yearFuture = 2027;
var age;
age=yearFuture-yearOfBirth;

window.alert("You will be "+age+" years old in 2027");

//Goodboy-Oldboy (A dog age calculator)

var dogYearOfBirth=2018;
var dogYearFuture=2027;
var dogYear;
var shouldShowResultInDogYears=true;
var humanYear;

humanYear=dogYearFuture-dogYearOfBirth;
dogYear=humanYear*7;

if(shouldShowResultInDogYears){
    window.alert("Your dog will be "+humanYear+" human years old in 2027");
}
else{
    window.alert("Your dog will be "+dogYear+" dog years old in 2027");
}

//Housey pricey (A house price estimator)

var housePricePeter;
var volumeInMetersPeter=8*10*10;
var gardenSizeInM2Peter=100;
housePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
var housePriceJulia;
var volumeInMetersJulia=5*11*8;
var gardenSizeInM2Julia=70;
housePriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;
window.alert("Peter house costs 2.500.000 but the real price is: "+housePricePeter);
window.alert("Julia house costs 1.000.000 but the real price is: "+housePriceJulia);

//Ez Namey (Startup name generator) Maybe later ;-)

