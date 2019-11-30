//This data should be showed in your app:
// The chosen city
// Temperature
// Icon for the weather type
// Wind speed
// How clowdy it is
// When sunrise and sunset is
// Optional a map showing where the city is located
const text = document.getElementById("citiesName");
const div1 = document.getElementById("div1");
const cityH1 = document.createElement("h1");
const tempH2 = document.createElement("h2");
const weatherIcon = document.createElement("img");
const windH2 = document.createElement("h2");
const clowdyH2 = document.createElement("h2");
const sunriseH2 = document.createElement("h2");
const sunsetH2 = document.createElement("h2");

function weatherFunc() {
    citiesName = text.value;
    if (citiesName == "") {
        console.log("Please Enter a valid value!");
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citiesName}&appid=2e25dbf00856f7ce6a37b38640397b97`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                cityH1.innerText = citiesName;
                div1.appendChild(cityH1);
                tempH2.innerHTML = response.main.temp + " &#8457;";
                div1.appendChild(tempH2);
                weatherIcon.src = `https://openweathermap.org/img/w/${response.weather[0].icon}.png`;
                weatherIcon.style = "height:50px";
                div1.appendChild(weatherIcon);
                windH2.innerText = "Wind speed is: " + response.wind.speed;
                div1.appendChild(windH2);
                clowdyH2.innerText = response.weather[0].description;
                div1.appendChild(clowdyH2);
                let sunrise = response.sys.sunrise;
                let sunset = response.sys.sunset;
                let sunrisedate = new Date(sunrise * 1000);
                let sunsetdate = new Date(sunset * 1000);
                sunriseH2.innerText = "Sunrise: " + sunrisedate;
                sunsetH2.innerText = "Sunset: " + sunsetdate;
                div1.appendChild(sunriseH2);
                div1.appendChild(sunsetH2);
                
            });
    }
};

