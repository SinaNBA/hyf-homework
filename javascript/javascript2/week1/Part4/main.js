console.log('Script loaded');

const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];

var sectionProducts = document.getElementsByClassName("products");
var ul1 = sectionProducts[0].firstElementChild;

function renderProducts(products) {
    products.forEach(function (item) {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} | ${item.price} | ${item.rating} | ${item.shipsTo}`;
        ul1.appendChild(li);
    });
}

var ul2 = sectionProducts[0].lastElementChild;
ul2.style.padding = '20px';

function renderProductsLists(products) {
    products.forEach(function (item) {
        const ul = document.createElement("ul");
        ul.innerHTML = item.name;
        ul.innerHTML += `<li>price: ${item.price}</li><li>rating: ${item.rating}</li><li>shipsTo: ${item.shipsTo}</li><li>*****</li>`;
        ul2.appendChild(ul);

    });
}

const arrayOfProducts = [];

addProducts(product = {
    'id': 1,
    'name': 'Flat screen',
    'price': '4000',
    'rating': '4.2',
    'shipsTo': ['denmark', 'germany']
});
addProducts(product = {
    'id': 2,
    'name': 'Mobile phone',
    'price': '2000',
    'rating': '3.8',
    'shipsTo': ['denmark', 'germany', 'sweden']
});
addProducts(product = {
    'id': 3,
    'name': 'Wallet',
    'price': '500',
    'rating': '3.2',
    'shipsTo': ['denmark', 'germany', 'sweden', 'finland']
});

function addProducts(itm) {
    arrayOfProducts.push(itm);
    return console.log(itm.name + " has been added.")
}

function getAvailableProducts() {
    return arrayOfProducts;
}

console.log(getAvailableProducts());

renderProducts(arrayOfProducts);

renderProductsLists(arrayOfProducts);