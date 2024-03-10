const { test, expect } = require('@playwright/test');
import assert from 'assert';
const { ElementUtil } = require('../util/elementUtil');

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.elementUtil = new ElementUtil(this.page);
        this.acceptPopup = this.page.locator('id=onetrust-accept-btn-handler');
        this.loginOrSingUp = this.page.locator('id=myAccount');
        this.loginButton = this.page.locator('id=login');
        this.loginTextbox = this.page.locator('id=txtUserName');
        this.loginButtonEmail = this.page.locator('id=btnLogin');
        this.passwordTextbox = this.page.locator('input#txtPassword');
        this.loginButtonPassword = this.page.locator('id=btnEmailSelect');
        this.loggedLoginText = this.page.locator('[data-test-id="account"]');
    }
    
    async goTo() {
        await this.page.goto('https://hepsiburada.com');
    }

    async checkHomePage() {
        await expect(this.page).toHaveURL('https://www.hepsiburada.com/');
    }

    async clickAcceptButtonPopup() {
        await this.elementUtil.clickElement(this.acceptPopup);
    }

    async tapsToLoginButton() {
        await this.elementUtil.clickElement(this.loginOrSingUp);
        await this.elementUtil.clickElement(this.loginButton);
    }

    async checkLoginPage() {
        await this.elementUtil.checkElement(this.loginButtonEmail);
    }

    async sendKeyEmailTextbox(email) {
        await this.elementUtil.clickElement(this.loginTextbox);
        await this.elementUtil.sendKey(email);
    }

    async clickLogginButtonEmailTextbox() {
        await this.elementUtil.clickElement(this.loginButtonEmail);
    }

    async checkPasswordTextbox() {
        await this.elementUtil.checkElement(this.passwordTextbox);
    }

    async sendKeyPasswordTextbox(password) {
        await this.elementUtil.clickElement(this.passwordTextbox);
        await this.elementUtil.sendKey(password);
    }

    async clickLoginButtonPasswordTextbox() {
        await this.elementUtil.clickElement(this.loginButtonPassword);
    }

    async checkLoggedIn() {
        await this.elementUtil.notEqualsElementText(this.loggedLoginText,'Giriş Yap');
    }
    
}
