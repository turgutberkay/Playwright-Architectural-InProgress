const { test, expect } = require('@playwright/test');
import assert from 'assert';
const { ElementUtil } = require('../util/elementUtil');

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.elementUtil = new ElementUtil(this.page);
        this.acceptPopup = this.page.locator('id=onetrust-accept-btn-handler');
        this.loginOrSingUp = this.page.locator('id=myAccount');
        this.loginButton = this.page.locator('id=login');
        this.searchBox = this.page.locator('.MORIA-voltran-body.voltran-body.SearchBoxOld');
        this.searchBoxInput = this.page.locator('.theme-IYtZzqYPto8PhOx3ku3c.theme-JOTHTAYrQhCBEf9bVgI8');
        this.searchButton = this.page.locator('.searchBoxOld-yDJzsIfi_S5gVgoapx6f');
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

    async sendKeySearchBox(text) {
        await this.page.waitForTimeout(2500);
        await this.elementUtil.clickElement(this.searchBox);
        await this.page.waitForTimeout(2500);
        await this.elementUtil.sendKey(text);
    }

    async clickSearchButton() {
        await this.elementUtil.clickElement(this.searchButton);
    }
    
}