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
    return console.log(song.title + " has been added.")
}

console.log(songDatabase);

function getSongByTitle(title) {
    for (var i = 0; i < songDatabase.length; i++) {
        if (songDatabase[i].title === title) {
            return songDatabase[i];
        }
    }
    return console.log(title + " is not in the list.");
}

getSongByTitle("Radio Ga Ga"); //Wrong value

const searchedSong = []; //For solving that problem you mentioned I declared "searchedSong" an array
searchedSong.push(getSongByTitle('Wish You Were Here'));
console.log(searchedSong);

function getSongByFuzzySearch(title) {
    for (var i = 0; i < songDatabase.length; i++) {
        if (songDatabase[i].title.includes(title)) {
            return songDatabase[i];
        }
    }
    return console.log(title + " is not in the list.");
}

const FuzzysearchedSong = getSongByFuzzySearch('Wish You Were');
console.log(FuzzysearchedSong);
getSongByFuzzySearch("Radio Ga Ga"); //Wrong value

const myPlaylist = [];

function addSongToMyPlaylist(title) {
    myPlaylist.push(getSongByTitle(title));
}

addSongToMyPlaylist("Rhythm Of Love");
addSongToMyPlaylist("Dancing Queen");

console.log(myPlaylist);