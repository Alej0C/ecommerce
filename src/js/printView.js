import { products } from "../utils/data.js";
import { containProducts } from "../js/node.js"

let carrito = []

const templateCard = (product) => {
    console.log(product);
    return `
        <div class="card" onclick="window.location.href='sproduct.html';">
                <figure class="containImg">
                    <img src="public/products/${product.url}" alt="" class="imgCard">
                </figure>
                <h2 class="nameProduct">${product.name}</h2>
                <div>
                    <p class="price">$${product.price}</p>
                    <button id="buy"><i class="fa fa-shopping-cart"></i></button>
                </div>
        </div>
    `
}

const view = () => {
    const view = products.map((product) => templateCard(product));
    containProducts.innerHTML = view.join(" ");
}

export { view, };
