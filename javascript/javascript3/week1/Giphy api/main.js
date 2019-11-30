function searchForGif() {
    let giphySearch = document.getElementById("giphySearch").value;
    let giphyNumber = document.getElementById("giphyNumber").value;

    fetch(`http://api.giphy.com/v1/gifs/search?q=${giphySearch}&api_key=XUX315JJtPMG2eEtGhVTvt8UjMcn39a5&limit=${giphyNumber}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            for (let i = 0; i < giphyNumber; i++) {
                const img = document.createElement("img");
                img.src = response.data[i].images.downsized.url;
                const imgDiv = document.getElementById("imagesUl");
                imgDiv.appendChild(img);
            }


        })
}