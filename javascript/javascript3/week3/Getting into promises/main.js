const wael85Ul = document.querySelector("#wael85Repo");
const zenkaeserUl = document.querySelector("#zenkaeserRepo");
const ricardoaguiarUl = document.querySelector("#ricardoaguiarRepo");

const source1 = fetch("https://api.github.com/search/repositories?q=user:wael85");
const source2 = fetch("https://api.github.com/search/repositories?q=user:zenkaeser");
const source3 = fetch("https://api.github.com/search/repositories?q=user:ricardoaguiar");



Promise.all([source1, source2, source3])
    .then(response => {
        response.forEach(response => {
            renderProcess(response.json());
        })
    });

let renderProcess = (response) => {
    response.then(data => {
        console.log(data);
        data.items.forEach(item => {
            console.log(item.name);
            let li = document.createElement("li");
            li.innerText = `${item.name} : ${item.url}`;
            if (item.owner.login == "wael85") {
                wael85Ul.appendChild(li);
            } else if (item.owner.login == "zenkaeser") {
                zenkaeserUl.appendChild(li);
            } else if (item.owner.login == "ricardoaguiar") {
                ricardoaguiarUl.appendChild(li);
            };

        })

    })
}