// tests/pages/homePage.js

const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.signUpLink = 'a#signin2';
        this.loginLink = 'a#login2';
        this.cartLink = 'a#cartur';
        this.logoutLink = 'a#logout2';
        this.usernameField = '#loginusername';
        this.passwordField = '#loginpassword';
        this.loginButton = 'button[onclick="logIn()"]';
        this.welcomeText = page.locator('#nameofuser');
        this.registerUsernameField = '#sign-username';
        this.registerPasswordField = '#sign-password';
        this.signUpButton = 'button[onclick="register()"]';
        this.nextButton = 'button#next2';
       // this.productLink = 'a:has-text("${config.product.name}")';
        
    }

    async clickSignUp() {
        await this.page.click(this.signUpLink);
    }

    async clickLogin() {
        await this.page.click(this.loginLink);
    }

    async clickCart() {
        await this.page.click(this.cartLink);
    }

    async clickLogout() {
        await this.page.click(this.logoutLink);
    }
    async clickNext(){
        await this.page.click(this.nextButton);
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }
    async register(username, password) {
        await this.page.fill(this.registerUsernameField, username);
        await this.page.fill(this.registerPasswordField, password);
        await this.page.click(this.signUpButton);
    }

    async selectProduct(productName) {
        let productNotFound = true;

        while (productNotFound) {
            const productLink = await this.page.$(`//a[text()='${productName}']`);
            if (productLink) {
                console.log(`Product "${productName}" found.`);
                await productLink.scrollIntoViewIfNeeded();
                await productLink.click();
                productNotFound = false;
            } else {
                const nextButton = await this.page.$(this.nextButton);
                if (nextButton) {
                    console.log(`Clicking next button.`);
                    await nextButton.click();
                    await this.page.waitForTimeout(500);
                } else {
                    throw new Error(`Product "${productName}" not found and no next button available.`);
                }
            }
        }   
    }
}

module.exports = HomePage;
