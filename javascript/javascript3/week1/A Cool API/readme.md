I have found a API about dogs, it's name is "RandomDog"
When you just open it's URL, it will show you in the page a JSON file with 2 keys:
"fileSizeBytes","url"
so I just use it's URL in a Function called "fetch" like this:

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

It will show every random dog's picture with it's URL in the page.     