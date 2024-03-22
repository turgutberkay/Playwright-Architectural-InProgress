const { test, expect } = require('@playwright/test');
import assert from 'assert';
const { ElementUtil } = require('../util/elementUtil');

exports.ProductDetailPage = class ProductDetailPage {

    constructor(page) {
        this.page = page;
        this.elementUtil = new ElementUtil(this.page);
        this.productCarousel = this.page.locator('id=productDetailsCarousel');
        this.likeButtonText = this.page.locator('.customerAccount-Like-13gj2');
    }

    async checkProductDetailPage() {
        await this.page.waitForTimeout(2000);
        await this.elementUtil.newWindowHandle();
        await this.elementUtil.checkElement(this.productCarousel);
    }

    async clickLikeButton() {
        await this.elementUtil.clickElement(this.likeButtonText);
    }





}
