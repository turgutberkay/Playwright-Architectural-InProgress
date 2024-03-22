const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { HomePage } = require('../../pages/homePage');
const { ProductDetailPage } = require('../../pages/productDetailPage');
const { SearchPage } = require('../../pages/searchPage');



test('Not Logged User if has not liked a random product before like it', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const productDetailPage = new ProductDetailPage(page);
    const searchPage = new SearchPage(page);

    await page.pause();

    //Go to Url
    await homePage.goTo();

    //Accept Popup
    await homePage.clickAcceptButtonPopup();

    //write to macbook SearchBox on the Home Page
    await homePage.sendKeySearchBox('macbook');

    //taps to Search Button on the Home Page
    await homePage.clickSearchButton();

    //should see Not Empty Product List on the Search Page
    await searchPage.checkNotEmptyProductList();

    //taps to Random Product on the Search Page
    await searchPage.clickRandomProduct();

    //should see Product Detail Page
    await productDetailPage.checkProductDetailPage();

    //taps to Like Button on the Product Detail Page
    await productDetailPage.clickLikeButton();

    //should see Login Page
    await loginPage.checkLoginPage();

    //Close browser
    await page.close();

});
