// tests/pages/cartPage.js

const BasePage = require('./basePage');

class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.placeOrderButton = 'button:has-text("Place Order")';
        this.nameField = '#name';
        this.countryField = '#country';
        this.cityField = '#city';
        this.cardField = '#card';
        this.monthField = '#month';
        this.yearField = '#year';
        this.purchaseButton = 'button:has-text("Purchase")';
    }

    async placeOrder(name, country, city, card, month, year) {
        await this.page.click(this.placeOrderButton);
        await this.page.fill(this.nameField, name);
        await this.page.fill(this.countryField, country);
        await this.page.fill(this.cityField, city);
        await this.page.fill(this.cardField, card);
        await this.page.fill(this.monthField, month);
        await this.page.fill(this.yearField, year);
        await this.page.click(this.purchaseButton);
    }
}

module.exports = CartPage;
