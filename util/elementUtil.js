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

    async notEqualsElementText(locator,text) {
        //burası duzeltılecek
        await this.checkElement(locator);
        const elementText = await this.page.textContent(locator.toString());
        assert.notStrictEqual(elementText, text);
    }

}
