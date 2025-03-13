const translations = {
    en: {
        title: "Welcome to our Store",
        products: "Products",
        cart: "Cart",
        welcome: "Find the best products for you!",
        product1: "Product 1",
        product2: "Product 2",
        price: "Price",
        add-to-cart: "Add to Cart",
        clear-cart: "Clear Cart"
    },
    uk: {
        title: "Ласкаво просимо до нашого магазину",
        products: "Товари",
        cart: "Кошик",
        welcome: "Знайдіть найкращі товари для себе!",
        product1: "Товар 1",
        product2: "Товар 2",
        price: "Ціна",
        add-to-cart: "Додати у кошик",
        clear-cart: "Очистити кошик"
    },
    pl: {
        title: "Witamy w naszym sklepie",
        products: "Produkty",
        cart: "Koszyk",
        welcome: "Znajdź najlepsze produkty dla siebie!",
        product1: "Produkt 1",
        product2: "Produkt 2",
        price: "Cena",
        add-to-cart: "Dodaj do koszyka",
        clear-cart: "Wyczyść koszyk"
    }
};

document.getElementById("language-selector").addEventListener("change", function() {
    const lang = this.value;
    document.querySelectorAll("[data-lang]").forEach(el => {
        el.textContent = translations[lang][el.getAttribute("data-lang")];
    });
});
