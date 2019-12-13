const productsUl = document.querySelector('section.products ul');
const input = document.querySelector('.search input');
const sortSelect = document.querySelector('.sort select');
const cartUl = document.querySelector('.cart ul');
const totalSpan = document.querySelector('.total span');
const userH2 = document.getElementById("userId");
const source = fetch("https://jsonplaceholder.typicode.com/users/1");

const randomProducts = getAvailableProducts();

const productInCartArray = [];

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    renderProducts() {
        const li = document.createElement('li');
        li.innerHTML = `
                <ul>
                    <li>${this.name}</li>
                    <li>${this.price}</li>
                </ul>
            `;
        li.addEventListener('click', () => {
            let ShoppingCartObject = new ShoppingCart();
            ShoppingCartObject.addProduct([this.name, this.price]);
        });
        productsUl.appendChild(li);
    }

    convertToCurrency(currency) {
        let price;
        switch (currency) {
            case "euro":
                price = this.price / (7.5);
                break;
            case "dollar":
                price = this.price / (6.7);
                break;
            default:
                Console.log("No value found");

        }
        return price;
    }

}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }

    addProduct(product) {
        productInCartArray.push(product);
        this.products = productInCartArray;
        this.renderProducts();
    }

    removeProduct(productIndex) {
        productInCartArray.splice(productIndex, 1);
        this.products = productInCartArray;
        this.renderProducts();
    }

    searchProduct(productName, sortStyle) {
        const matchingProducts = randomProducts.filter(product => product.name.toLowerCase().includes(productName.toLowerCase()));
        switch (sortStyle) {
            case "cheap":
                matchingProducts.sort((a, b) => a.price - b.price);
                break;
            case "expensive":
                matchingProducts.sort((a, b) => b.price - a.price);
                break;
            case "name":
                matchingProducts.sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    if (nameA > nameB) {
                        return 1;
                    }
                    if (nameA < nameB) {
                        return -1;
                    }
                    return 0;
                });
                break;
        }
        renderProductsInTheHtml(matchingProducts);
    }

    getTotal() {
        let sum = 0;
        this.products.forEach(product => {
            sum += product[1];
        });
        totalSpan.innerText = sum;
    }

    renderProducts() {

        cartUl.innerHTML = '';

        for (let i = 0; i < this.products.length; i++) {
            let product = this.products[i];
            const li = document.createElement('li');
            cartUl.appendChild(li);

            const nameDiv = document.createElement('div');
            nameDiv.classList.add('name');
            nameDiv.innerText = product[0];
            li.appendChild(nameDiv);

            const priceDiv = document.createElement('div');
            priceDiv.classList.add('price');
            priceDiv.innerText = product[1];
            li.appendChild(priceDiv);

            li.addEventListener('click', () => {
                this.removeProduct(i);
            });
        };
        this.getTotal();
    }

    get User() {
        source.then(response => response.json())
            .then(response => {
                userH2.innerText = response.name;

            });

    }


}

function renderProductsInTheHtml(products) {
    productsUl.innerHTML = '';
    products.forEach(product => {
        let productObject = new Product(product.name, product.price);
        productObject.renderProducts();
    });
};
renderProductsInTheHtml(randomProducts);

let ShoppingCartObject = new ShoppingCart();
ShoppingCartObject.User; //to show the name of data that I've fetch in the h2 element


input.addEventListener('input', () => {
    let ShoppingCartObject = new ShoppingCart();
    ShoppingCartObject.searchProduct(input.value, sortSelect.value);
});

//part 3 : convertToCurrency
let productObject2 = new Product('plant', 50);
console.log(productObject2.convertToCurrency("euro").toFixed(2), " Euro");
console.log(productObject2.convertToCurrency("dollar").toFixed(2), " Dollar");