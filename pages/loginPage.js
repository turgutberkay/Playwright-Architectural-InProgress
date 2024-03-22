const { test, expect } = require('@playwright/test');
import assert from 'assert';
const { ElementUtil } = require('../util/elementUtil');

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.elementUtil = new ElementUtil(this.page);
        this.loginTextbox = this.page.locator('id=txtUserName');
        this.loginButtonEmail = this.page.locator('id=btnLogin');
        this.passwordTextbox = this.page.locator('input#txtPassword');
        this.loginButtonPassword = this.page.locator('id=btnEmailSelect');
        this.errorLoginText = this.page.locator('.hb-fzqNNl.bOhTD.so8jqwmkfiy');
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

    async checkErrorLogin() {
        await this.elementUtil.equalsElementText(this.loggedLoginText,'Lütfen tekrar deneyin. Hata Kodu: (N1E2)');
    }
}
