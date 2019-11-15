//const div1 = document.getElementById("div1");
fetch("https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=2e25dbf00856f7ce6a37b38640397b97")
    .then(response => response.json())
    .then(response => {
        console.log(response);
        //const img = document.createElement("img");
        //img.setAttribute("src", response.url);
        //img.setAttribute("class", "class1");
        //div1.appendChild(img);

    });