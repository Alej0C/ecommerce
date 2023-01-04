const Navbar = () => {
    return `
    <nav class="nav">
        <img src="public/assets/logo.png" alt="Escalab" />

        <ul>
            <li>
                <a href="#periferic">Productos</a>
            </li>

            <li>
                <a href="#pc">Disponibles</a>
            </li>

            <li id="compras">
                <a href="#">Carrito</a>
                <div class="list">
                    <div class="list__items--buy">
                        <div class="list__item">
                            <img src="" alt="" class="list__img" />
                            <div>
                                <h1 class="list__title">Name Product</h1>
                                <p class="list__price">$0,00</p>
                            </div>
                        </div>
                        <div class="list__item">
                            <img src="" alt="" class="list__img" />
                            <div>
                                <h1 class="list__title">Name Product</h1>
                                <p class="list__price">$0,00</p>
                            </div>
                        </div>
                        <div class="list__item">
                            <img src="" alt="" class="list__img" />
                            <div>
                                <h1 class="list__title">Name Product</h1>
                                <p class="list__price">$0,00</p>
                            </div>
                        </div>
                        <div class="list__item">
                            <img src="" alt="" class="list__img" />
                            <div>
                                <h1 class="list__title">Name Product</h1>
                                <p class="list__price">$0,00</p>
                            </div>
                        </div>
                        <div class="list__item">
                            <img src="" alt="" class="list__img" />
                            <div>
                                <h1 class="list__title">Name Product</h1>
                                <p class="list__price">$0,00</p>
                            </div>
                        </div>
                    </div>
                    <div class="list__buttons">
                        <button class="list__compra">Comprar</button>
                    </div>
                </div>
            </li>

        </ul>

    </nav>
    `;
};

export { Navbar };
