//Item array removal

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomNumber = parseInt(Math.random() * 11);

function removeArrayItem(numbersToRemove) {
    for (var i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] === numbersToRemove) {
            delete numbersArray[i];
            return numbersToRemove + " have been removed!";
        }
    }
    return numbersToRemove + " not in the list!";


}

console.log(removeArrayItem(randomNumber));

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

//My favorite songs

const songDatabase = [];

function addSongToDatabase(song) {
    songDatabase.push(song);
}

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

function getNoteFromId(id) {
    for (var i = 0; i < notes.length; i++) {
        if (id === notes[i].id) {
            return notes[i];
        } else {
            return 'Id is incorrect';
        }
    }
}