//NOnoN0nOYes (Note taking app)

var notes = [];

function addNote(content, id) {
    var contentId = {
        'content': content,
        'id': id
    };
    notes.push(contentId);
}
addNote('my note 1', 1);
addNote('my note 2', 2);

function getNoteFromId(id) {
    for (var i = 0; i < notes.length; i++) {
        if (id === notes[i].id) {
            return notes[i];
        } else {
            return 'Id is incorrect';
        }
    }
}

console.log(getNoteFromId(1));

function getAllNotes() {
    return notes;
}

console.log(getAllNotes());

function logOutNotesFormatted() {
    for (var i = 0; i < notes.length; i++) {
        console.log("The note with id: " + notes[i].id + " , has the following note text: " + notes[i].content + ".");
    }
}

logOutNotesFormatted();

//CactusIO-interactive (Smart phone usage app)

var activities = [];

function addActivity(date, activity, duration) {
    if (date == null) {
        let d = new Date();
        let day = (d.getDate()).toString();
        let month = (d.getMonth() + 1).toString();
        let year = (d.getFullYear()).toString();
        year = year.slice(2, 4);
        date = (day + '/' + month + '-' + year).toString();
    }
    let activityObj = {
        'date': date,
        'activity': activity,
        'duration': duration
    }
    activities.push(activityObj);
}

addActivity('23/7-18', 'Youtube', 30);
addActivity('24/7-18', 'Youtube', 30);
addActivity('25/7-18', 'Youtube', 30);
console.log(activities);

function showStatus(activity) {
    var j = 0;
    var mins = 0;
    var setLimit = 90;
    for (let i = 0; i < activities.length; i++) {
        if (activities[i]['activity'] === activity) {
            j++;
            mins += activities[i]['duration'];
        }
    }
    if (mins > setLimit) {
        return "You have added " + j + " activities. They amount to " + mins + " min of usage \n You have reached your limit, no more smartphoning for you!";
    } else if (j === 0) {
        return "Add some activities before calling showStatus";
    } else {
        return "You have added " + j + " activities. They amount to " + mins + " min of usage";
    }
}

console.log(showStatus('Youtube'));
console.log(showStatus('instagram')); // For testing if there is an empty activities

addActivity('26/7-18', 'Youtube', 30);
console.log(showStatus('Youtube'));

addActivity(null, 'Facebook', 20); // For testing if there is an empty date
console.log(activities);