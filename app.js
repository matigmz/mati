const gridContainer = document.getElementById("js-gridContainer");
const searchInput = document.getElementById("js-searchBarInput");
//const searchButton = document.getElementById("js-searchButton");


const htmlTemplate = (products) => {
    return `<div class="card">
    <p class="card-name">${products.name}</p>
    <p class="card-price">$${products.price}</p>
    <input type="number" placeholder="ingrese la cantidad">
    <button type="submit">Agregar al carrito</button>
    </div>`;
};



const renderHTML = (products, container) => {
    container.innerHTML = "";

    if (products.length > 0) {

        for (const product of products) {
            const producInHTML = htmlTemplate(product);


            container.innerHTML += producInHTML;

        }
    } else {
        container.innerHTML = `<p class="container__message">No se encontro el Producto</p>`
    }

};

renderHTML(products, gridContainer);


const filterProducts = () => {
    const searchInputValue = searchInput.value;

    const filterProducts = products.filter((products) => {
        const productNameLowerCase = products.name.toLowerCase();
        return productNameLowerCase.includes(searchInputValue.toLowerCase());
    })

    renderHTML(filterProducts, gridContainer);
};

//searchButton.addEventListener("click", filterProducts);

searchInput.addEventListener("keyup", filterProducts)