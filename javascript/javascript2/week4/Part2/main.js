const favBooks = [{
    'id': 'bible',
    'title': 'Bible',
    'language': 'Persian',
    'author': 'God',
    'source': 'img/bible.jpg'
}, {
    'id': 'khayyam-rubaiyat of omar khayyam',
    'title': 'Rubaiyat of omar khayyam',
    'language': 'Persian',
    'author': 'Khayyam',
    'source': 'img/rubaiyat of omar khayyam.jpg'
}, {
    'id': 'saadi shirazi-gulistan',
    'title': 'Gulistan',
    'language': 'Persian',
    'author': 'Saadi Shirazi',
    'source': 'img/gulistan.jpg'
}, {
    'id': 'shamlu-chidane sepide dam',
    'title': 'Chidane sepide dam',
    'language': 'Persian',
    'author': 'Shamlu',
    'source': 'img/chidane sepide dam.jpg'
}, {
    'id': 'shamlu-sokut sarshar az nagoftehast',
    'title': 'Sokut sarshar az nagoftehast',
    'language': 'Persian',
    'author': 'Shamlu',
    'source': 'img/sokut sarshar az nagoftehast.jpg'
}, {
    'id': 'nikos kazantzakis-zorba the greek',
    'title': 'Zorba the greek',
    'language': 'Persian',
    'author': 'Nikos Kazantzakis',
    'source': 'img/zorba the greek.jpg'
}, {
    'id': 'nikos kazantzakis-the last temptation of christ',
    'title': 'The last temptation of christ',
    'language': 'Persian',
    'author': 'Nikos Kazantzakis',
    'source': 'img/the last temptation of christ.jpg'
}, {
    'id': 'paulo coelho-brida',
    'title': 'Brida',
    'language': 'Persian',
    'author': 'Paulo Coelho',
    'source': 'img/brida.jpg'
}, {
    'id': 'paulo coelho-veronika decides to die',
    'title': 'Veronika decides to die',
    'language': 'Persian',
    'author': 'Paulo Coelho',
    'source': 'img/veronika decides to die.jpg'
}, {
    'id': 'gabriel garcía márquez-one hundred years of solitude',
    'title': 'One hundred years of solitude',
    'language': 'Persian',
    'author': 'Gabriel García Márquez',
    'source': 'img/one hundred years of solitude.jpg'
}];

function makeLines() {
    var olVar = document.createElement("ol");
    document.getElementById("mainDiv").appendChild(olVar);

    for (let i = 0; i < favBooks.length; i++) {
        var liVar = document.createElement("li");
        var imgVar = document.createElement("img");
        var pVar = document.createElement("p");
        liVar.className = "font-weight-bolder";
        olVar.appendChild(liVar);
        imgVar.setAttribute("src", favBooks[i].source);
        imgVar.setAttribute("width", "304");
        imgVar.setAttribute("alt", "The Pulpit Rock");
        imgVar.setAttribute("class", "img-thumbnail");
        olVar.appendChild(imgVar);
        liVar.innerHTML = favBooks[i].title;
        liVar.setAttribute("class", "badge-pill badge-info");
        liVar.style = "font-size:20px"
        olVar.appendChild(pVar);
        pVar.innerText = 'The author: ' + favBooks[i].author + '\nLanguage: ' + favBooks[i].language;
    }

}