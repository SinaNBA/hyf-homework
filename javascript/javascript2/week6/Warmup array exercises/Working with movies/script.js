function shortTitleMovies() {
    const resultHtml = document.getElementById('result');
    let listHtml = '';
    let filterMoviesByShortTitle = movies.filter(movie => {
        let titl = movie.title;
        return titl.length < 10;
    });
    var i = 0;
    filterMoviesByShortTitle.forEach(movie => {
        i++;
        listHtml += `<div> ${movie.title} </div>`;
    });

    resultHtml.innerHTML = listHtml;
}

function longTitleMovies() {
    const resultHtml = document.getElementById('result');
    let listHtml = '';
    let filterMoviesByLongTitle = movies.filter(movie => {
        let titl = movie.title;
        return titl.length >= 10;
    });
    filterMoviesByLongTitle.forEach(movie => {
        listHtml += `<div> ${movie.title}</div>`;
    });

    resultHtml.innerHTML = listHtml;
}

function moviesBetween1980U1989() {
    const resultHtml = document.getElementById('result');
    let listHtml = '';
    let filterMoviesByYears = movies.filter(movie => {
        let years = movie.year;
        return (years >= 1980 && years <= 1989);
    });
    filterMoviesByYears.forEach(movie => {
        listHtml += `<div> ${movie.title}</div>`;
    });

    resultHtml.innerHTML = listHtml;

}

//Creating a new array that has an extra key called tag

function ratingMovies() {
    var randomNum;
    for (let i = 0; i < movies.length; i++) {
        randomNum = parseInt(Math.random() * 11);
        movies[i].tag = randomNum;
    }
    var moviesRatedHigher = movies.filter(movie => movie.tag > 6).map(movie => movie.title + '   =>   ' + movie.tag);

    const resultHtml = document.getElementById('result');
    let listHtml = '';
    moviesRatedHigher.forEach(movie => {
        listHtml += `<div> ${movie}</div>`;
    });

    resultHtml.innerHTML = listHtml;

}

//count the movies which contained Surfer&Alien&Benjamin

function SurferAlienBenjamin() {
    var j = 0;
    var surfer = "Surfer";
    var alien = "Alien";
    var benjamin = "Benjamin";
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title.includes(surfer)) {
            j++;
        } else if (movies[i].title.includes(alien)) {
            j++;
        } else if (movies[i].title.includes(benjamin)) {
            j++;
        }
    }
    alert(j);
}

var str = 'world all world';
var ustr = str.split(' ');
var wor;
for (let i = 0; i < ustr.length; i++) {
    if (ustr[i] === ustr[i + 1]) {
        wor = ustr[i];
    }

}

console.log(ustr + ' is duplicated');