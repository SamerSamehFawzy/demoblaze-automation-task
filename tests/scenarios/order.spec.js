// tests/scenarios/order.spec.js

const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const ProductPage = require('../pages/productPage');
const CartPage = require('../pages/cartPage');
const { generateRandomString } = require('../utils/helpers');
const config = require('../utils/config');
const exp = require('constants');

test.describe('Order Scenario', () => {
    let page;
    let homePage;
    let productPage;
    let cartPage;

    test.beforeAll(async ({ browser }) => {
       // browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        homePage = new HomePage(page);
        await homePage.navigate(config.baseURL);
        await homePage.clickLogin();
        await homePage.login(config.validUser.username, config.validUser.password);
        await expect(homePage.welcomeText).toHaveText(`Welcome ${config.validUser.username}`);
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('should create an order for a product', async () => {
        await homePage.selectProduct(config.product.name);
        productPage = new ProductPage(page);
        await productPage.addToCart();

        // Navigate to the cart and place the order
        await homePage.clickCart();
        cartPage = new CartPage(page);
        await cartPage.placeOrder(
            'Samer Sameh',  // Name
            'USA',       // Country
            'New York',  // City
            '1234567890',// Credit card
            '12',        // Month
            '2024'       // Year
        );

        // Add assertions to verify the order was placed successfully
        const orderConfirmation = await page.locator('text=Thank you for your purchase!');
        await expect(orderConfirmation).toBeVisible();
    });
});
