const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const { generateRandomString } = require('../utils/helpers');
const config = require('../utils/config');

test.describe('Register Scenario', () => {
    let page;
    let homePage;
    let dynamicUsername;
    let dynamicPassword;

    test.beforeAll(async ({ browser }) => {
        dynamicUsername = `user_${generateRandomString(6)}`;
        dynamicPassword = generateRandomString(10);
        page = await browser.newPage();
        homePage = new HomePage(page);
        await homePage.navigate(config.baseURL);
        await homePage.clickSignUp()
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('register a new user and show an alert', async () => {
        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('Sign up successful');
            await dialog.accept();
        });

        await homePage.register(dynamicUsername, dynamicPassword);       
        await page.waitForEvent('dialog');
    });
});
