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