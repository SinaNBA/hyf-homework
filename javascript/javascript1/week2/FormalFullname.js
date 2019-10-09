//Formal fullname

function getFullnameEx(firstname, surname, useFormalName) {
    if (useFormalName && (firstname.length > 1)) {
        return "Lord" + " " + firstname + " " + surname;
    } else if (!useFormalName && (firstname.length > 1)) {
        return firstname + " " + surname;
    } else {
        Console.log("Please fill the all required field !!")
    }
}

var fullname1 = getFullnameEx("Benjamin", "Hughes", true);
var fullname2 = getFullnameEx("Chris", "Redfill", false);
var fullname3 = getFullnameEx("c", "ar", true);

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);