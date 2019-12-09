const div1 = document.getElementById("div1");
let p1 = new Promise((resolve, reject) => {
    let root = "https://random.dog/woof.json";
    setTimeout(resolve, 3000, root);
    //reject();
});


p1.then((root) => {
        return fetch(root);
    }).then(response => response.json())
    .then(response => {
        console.log(response);
        const img = document.createElement("img");
        img.setAttribute("src", response.url);
        img.setAttribute("class", "class1");
        div1.appendChild(img);

    }).catch((error) => {
        console.log(error.message);

    })