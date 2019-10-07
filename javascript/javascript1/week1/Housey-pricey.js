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