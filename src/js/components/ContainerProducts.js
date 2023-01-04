// Import needed component
import { ItemProducts } from './ItemProduct.js';

const ContainerProduct = ({ title, products, target }) => {

    return `
    <section id="${target}" class="section">
        <h2 class="contain__p--subtitle">Productos Destacados</h2>
        <h1 class="contain__p--title">${title}</h1>
        <div class="product">
            ${products.map((element) => ItemProducts(element)).join('')}
        </div>
    </section>
    `;
};

export { ContainerProduct };
