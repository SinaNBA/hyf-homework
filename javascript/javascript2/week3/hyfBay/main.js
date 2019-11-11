const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
const input = document.querySelector('.search input');
const countrySelect = document.querySelector('.country select');
const sortSelect = document.querySelector('.sort select');
const cartUl = document.querySelector('.cart ul');
const totalSpan = document.querySelector('.total span');

const productInCartArray = [];

function addProductToCart(product) {
    productInCartArray.push(product);
    renderCart(productInCartArray);
}

function renderCart(cart) {
    let sum = 0;
    cartUl.innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        const li = document.createElement('li');
        cartUl.appendChild(li);

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('name');
        nameDiv.innerText = product.name;
        li.appendChild(nameDiv);

        const priceDiv = document.createElement('div');
        priceDiv.classList.add('price');
        priceDiv.innerText = product.price;
        li.appendChild(priceDiv);
        sum += product.price;

        li.addEventListener('click', () => {
            productInCartArray.splice(i, 1);
            renderCart(productInCartArray);

        });
    };
    totalSpan.innerText = sum;
}

function renderProducts(products) {
    productsUl.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');
        //const btn = document.createElement("button");

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        li.addEventListener('click', () => {
            addProductToCart(product);
        });

        productsUl.appendChild(li);
    });
}

searchForProducts('', '', 'cheap');

function searchForProducts(name, country, sort) {
    const matchingProducts = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
        .filter(product => {
            if (country) {
                return product.shipsTo.map(c => c.toLowerCase()).includes(country.toLowerCase())
            } else {
                return true;
            }
        });

    if (sort) {
        switch (sort) {
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
    }

    renderProducts(matchingProducts);
};


input.addEventListener('input', () => {
    searchForProducts(input.value, countrySelect.value, sortSelect.value);
});

countrySelect.addEventListener('change', () => {
    searchForProducts(input.value, countrySelect.value, sortSelect.value);
});

sortSelect.addEventListener('change', () => {
    searchForProducts(input.value, countrySelect.value, sortSelect.value);
});

const prices = products.map(value => value.price);
sendPricesToServer(prices, confirmation => {
    console.log(confirmation);

});