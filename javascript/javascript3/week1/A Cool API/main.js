const div1 = document.getElementById("div1");
fetch("https://random.dog/woof.json")
    .then(response => response.json())
    .then(response => {
        console.log(response);
        const img = document.createElement("img");
        img.setAttribute("src", response.url);
        img.setAttribute("class", "class1");
        div1.appendChild(img);

    });