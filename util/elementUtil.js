const { test, expect } = require('@playwright/test');
import assert from 'assert';

exports.ElementUtil = class ElementUtil {

    constructor(page) {
        this.page = page;
    }

    async clickElement(locator) {
        await this.page.waitForLoadState('load', { timeout: 12000 });
        await locator.click({ timeout: 10000 });
    }

    async checkElement(locator){
        await this.page.waitForLoadState('load', { timeout: 12000 });
        await expect(locator).toBeVisible({ timeout: 10000 });
    }

    async sendKey(text){
        await this.page.waitForLoadState('load', { timeout: 12000 });
        await this.page.keyboard.type(text);
    }

    async equalsElementText(locator,text) {
        //burası duzeltılecek element yanlıs suan
        await this.page.waitForLoadState('load', { timeout: 12000 });
        await this.checkElement(locator);
        const elementText = await locator.textContent(); 
        assert.strictEqual(elementText, text);
    }

    async checkElementNotEmpty(locator) {
        await this.page.waitForLoadState('load', { timeout: 12000 });
        const elements = await locator.count();
        if (elements < 1) {
        throw new Error("Element not found.");}
    }

    async clickRandomElementFromElements(locator) {
        await this.page.waitForLoadState('load', { timeout: 12000 });
        const elements = await locator.all();
        const randomIndex = Math.floor(Math.random() * elements.length);
        await this.clickElement(elements[randomIndex]);    
    }
    async newWindowHandle() {
        const page2 = await this.page.context();
        await this.page === await page2;
        await this.page.waitForLoadState('load', { timeout: 12000 });
        console.log(await this.page.title())
    }

}
