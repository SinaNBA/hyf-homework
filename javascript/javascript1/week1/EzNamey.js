//Ez Namey (Startup name generator)
var firstWords = ["Easy", "Awesome", "incredible", "Legendary", "Unbelievable", "Magnificent", "Luxurious", "Happy", "Elegant", "Fashionable"];
var secondWords = ["Corporation", "Company", "Business", "Institution", "Foundation", "Association", "Organization", "Group", "Society", "Agency "];
var startupName;

function createStartupName() {
    const randomNumber1 = Math.floor(Math.random() * 10) + 0;
    const randomNumber2 = Math.floor(Math.random() * 10) + 0;
    startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];
    return startupName;
}
console.log(createStartupName());