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