// Find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function findShortestWord() {
    var min;
    min = danishWords[0];
    for (let i = 1; i < danishWords.length; i++) {
        if (min.length > danishWords[i].length) {
            min = danishWords[i];
        }
    }
    document.getElementById('showShortestWord').innerText = min;
    document.getElementById('showShortestWord').setAttribute("class", "p-2 bg-secondary");
    document.getElementById('showShortestWord').style.textAlign = "center";
    document.getElementById('showShortestWord').style.border = "2px solid yellow";
    document.getElementById('showShortestWord').style.marginTop = "5px";
    document.getElementById('showShortestWord').style.color = "white";
    document.getElementById('showShortestWord').style.fontSize = "3vw";
}


// Average & Median

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function funcAverageMedian() {
    var sum = 0;
    for (let i = 0; i < housePrices.length; i++) {
        sum += housePrices[i];
    }
    var avg = (sum / housePrices.length).toFixed(2);
    var med = parseInt(housePrices.length / 2);
    var avgMedObj = {
        'avg': avg,
        'med': housePrices[med]
    };
    document.getElementById('averageMedian').innerText='The average is: '+avgMedObj.avg+' and the median is: '+avgMedObj.med+'.';
    document.getElementById('averageMedian').setAttribute("class", "p-2 bg-secondary");
    document.getElementById('averageMedian').style.textAlign = "center";
    document.getElementById('averageMedian').style.border = "2px solid yellow";
    document.getElementById('averageMedian').style.marginTop = "5px";
    document.getElementById('averageMedian').style.color = "white";
    document.getElementById('averageMedian').style.fontSize = "3vw";
}

