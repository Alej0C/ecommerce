const ItemProducts = ({ grid, name, price, img }) => {
    return `
    <div class="${grid}">
        <div class="card">
            <img id="test" src="public/products/${img}" alt="" class="card__image" />
            <div class="card__body">
                <h2 class="card__b--title">${name}</h2>
                <div class="card__info">
                    <p class="card__price">$${price}</p>
                    <button class="card__button--buy">
                        <img
                            src="public/assets/iconShop.png"
                            alt=""
                            class="icon"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
};

export { ItemProducts };
