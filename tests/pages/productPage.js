// tests/pages/productPage.js

const BasePage = require('./basePage');

class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.addToCartButton = 'a:has-text("Add to cart")';
    }

    async addToCart() {
        await this.page.click(this.addToCartButton);
    }
}

module.exports = ProductPage;
