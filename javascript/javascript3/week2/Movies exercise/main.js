fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(response => {
        console.log(response);
        const badMovies = response.filter(item => item.rating < 6);
        console.log(badMovies);
        const badMovies2000 = response.filter(item => item.rating < 6 && item.year < 2000);
        console.log(badMovies2000);
        const badMovies2000Titles = response.filter(item => item.rating < 6 && item.year < 2000)
            .map(item => item.title);
        console.log(badMovies2000Titles);
    });

    