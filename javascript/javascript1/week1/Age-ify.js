//Age-ify (A future age calculator)

var yearOfBirth;
var yearFuture = 2027;
var age;

function calculateAge() {
    yearOfBirth = document.getElementById("yourAge").value;
    age = yearFuture - yearOfBirth;
    window.alert("You will be " + age + " years old in 2027");
}

