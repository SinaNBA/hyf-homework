//Student manager

const class07Students = [];

function addStudentToClass(studentName) {
    for (var i = 0; i <= class07Students.length; i++) {
        if (class07Students[i] === studentName) {
            return window.alert('Student ' + studentName + ' is already in the class');
        }
    }

    if (studentName === "") {
        window.alert("You cannot add an empty string to a class");
    } else if (class07Students.length >= 6 && !(studentName.toLowerCase() == "queen")) {
        window.alert("Cannot add more students to class 07");
    } else {
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
    return "The number of students in the class is " + class07Students.length;
}