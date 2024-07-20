// tests/scenarios/logout.spec.js

const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const config = require('../utils/config');

test.describe('Logout Scenario', () => {
    let page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        const homePage = new HomePage(page);
        await homePage.navigate(config.baseURL);
        await homePage.clickLogin();
        await homePage.login(config.validUser.username, config.validUser.password);
        await expect(homePage.welcomeText).toHaveText('Welcome '+config.validUser.username);
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('should log out successfully', async () => {
        const homePage = new HomePage(page);
        await homePage.clickLogout();
        
    });
});
