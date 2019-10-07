// console.log(mentors);

let modifiedMentors = mentors.map(function (mentor) {
    if (mentor["name"].length > 10) {
        mentor.name = 'Ms ' + mentor.name;
        return mentor;
    } else {
        mentor.name = 'Mr ' + mentor.name;
        return mentor;
    }
});

function filterMentorList(courseID) {
    const resultHtml = document.getElementById('result');
    let listHtml = '';



    let filteresListByCourseId = modifiedMentors.filter(function (mentor) {
        let sub = mentor.subject;
        return sub.indexOf(courseID) >= 0;
    });



    filteresListByCourseId.forEach(function (mentor) {

        listHtml += `<div>  ${mentor.name} </div>`;

    });

    resultHtml.innerHTML = listHtml;
    // console.log('courseID', resultHtml);

}

// mentors.forEach(mentor => listHtml += `<div>Mr ${mentor.name } </div>`);
// mentors.forEach(function (mentor) {
//     listHtml += `<div>Mr ${mentor.name } </div>`;
// });
//     listHtml += `<div>Mr ${mentor.name } </div>`;
// };
// mentors.forEach(findMentors);

// let findMentors = (mentor) => {
//     listHtml += `<div>Mr ${mentor.name } </div>`;
// };
// mentors.forEach(findMentors);

// for (let i = 0; i < mentors.length; i++) {
//     for (let j = 0; j < mentors["subject"].length; j++) {
//         if (courseID === mentors[i].subject[j]) {
//             listHtml += `<div>${mentors[i].name } </div>`;
//         }
//     }
// }

// let listHtml = '';
// listHtml += '<div> Fowad</div>';
// listHtml += '<div> Susane</div>';
// listHtml += '<div> Sara</div>';
// resultHtml.innerHTML = listHtml;