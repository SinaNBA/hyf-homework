//Item array removal


const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

function removeArrayItem(itemToRemove) {
    for (var i = 0; i < names.length; i++) {
        if (names[i] === itemToRemove) {
            delete names[i];
            return itemToRemove + " have been removed!";
        }
    }
    return itemToRemove + " not in the list!";


}

console.log(removeArrayItem(nameToRemove));

//Series duration of my life

const seriesDurations = [{
        title: 'Game of thrones',
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: 'Peaky Blinders',
        days: 4,
        hours: 1,
        minutes: 0,
    },
    {
        title: 'Breaking Bad',
        days: 5,
        hours: 23,
        minutes: 30,
    }
];
const EqualsMinutes80Years = 42048000;

function percentageOfLife() {
    var GameOfThronesMin = 0;
    var PeakyBlindersMin = 0;
    var BreakingBadMin = 0;
    var TotalMin = 0;
    GameOfThronesMin += (seriesDurations[0].days * 24 * 60) + (seriesDurations[0].hours * 60) + (seriesDurations[0].minutes);
    PeakyBlindersMin += (seriesDurations[1].days * 24 * 60) + (seriesDurations[1].hours * 60) + (seriesDurations[1].minutes);
    BreakingBadMin += (seriesDurations[2].days * 24 * 60) + (seriesDurations[2].hours * 60) + (seriesDurations[2].minutes);
    TotalMin += (GameOfThronesMin + PeakyBlindersMin + BreakingBadMin);

    var GameOfThronesPercent = ((GameOfThronesMin * 100) / EqualsMinutes80Years).toFixed(3);
    var PeakyBlindersPercent = ((PeakyBlindersMin * 100) / EqualsMinutes80Years).toFixed(3);
    var BreakingBadPercent = ((BreakingBadMin * 100) / EqualsMinutes80Years).toFixed(3);
    var TotalMinPercent = ((TotalMin * 100) / EqualsMinutes80Years).toFixed(3);

    console.log("Game of thrones took " + GameOfThronesPercent + "% of my life");
    console.log("Peaky Blinders took " + PeakyBlindersPercent + "% of my life");
    console.log("Breaking Bad took " + BreakingBadPercent + "% of my life");
    console.log(" ");
    console.log("In total that is " + TotalMinPercent + "% of my life");

}
console.log(percentageOfLife());

//My favorite songs

const songDatabase = [];

var favSong = {};
addSongToDatabase(favSong = {
    songId: 1,
    title: 'Purple Rain',
    artist: 'Prince'
});
addSongToDatabase(favSong = {
    songId: 2,
    title: 'Dancing Queen',
    artist: 'ABBA'
});
addSongToDatabase(favSong = {
    songId: 3,
    title: 'Rhythm Of Love',
    artist: 'Scorpions'
});
addSongToDatabase(favSong = {
    songId: 4,
    title: 'Wish You Were Here',
    artist: 'Pink Floyd'
});

function addSongToDatabase(song) {
    songDatabase.push(song);
}

console.log(songDatabase);

function getSongByTitle(title) {
    for (var i = 0; i < songDatabase.length; i++) {
        if (songDatabase[i].title === title) {
            return songDatabase[i];
        }
    }
}

const searchedSong = []; //For solving that problem you mentioned I declared "searchedSong" an array
searchedSong.push(getSongByTitle('Wish You Were Here'));
console.log(searchedSong);

function getSongByFuzzySearch(title) {
    for (var i = 0; i < songDatabase.length; i++) {
        if (songDatabase[i].title.includes(title)) {
            return songDatabase[i];
        }
    }
}

const FuzzysearchedSong = getSongByFuzzySearch('Wish You Were');
console.log(FuzzysearchedSong);

const myPlaylist = [];

function addSongToMyPlaylist(title) {
    myPlaylist.push(getSongByTitle(title));
}
for (var i = 0; i < songDatabase.length; i++) {
    addSongToMyPlaylist(songDatabase[i].title);
}
console.log(myPlaylist);

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