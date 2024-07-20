const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const config = require('../utils/config');

test.describe('Login Scenario', () => {
    let page;
    let homePage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        homePage = new HomePage(page);
        await homePage.navigate(config.baseURL);
        await homePage.clickLogin()
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('should log in with valid credentials', async () => {
        await homePage.login(config.validUser.username, config.validUser.password);
        await expect(homePage.welcomeText).toHaveText("Welcome "+config.validUser.username);
    });
});
