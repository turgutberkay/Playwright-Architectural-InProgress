const { test, expect } = require('@playwright/test');
import assert from 'assert';
const { ElementUtil } = require('../util/elementUtil');

exports.SearchPage = class SearchPage {

    constructor(page) {
        this.page = page;
        this.elementUtil = new ElementUtil(this.page);
        this.productName = this.page.locator('[data-test-id="product-card-name"]');
    }

    async checkNotEmptyProductList() {
        await this.elementUtil.checkElementNotEmpty(this.productName);
    }

    async clickRandomProduct() {
        await this.elementUtil.clickRandomElementFromElements(this.productName);
    }
    
}
