const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { HomePage } = require('../../pages/homePage');


test('Success Login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);


    await page.pause();

    //Go to Url
    await homePage.goTo();
    
    //Accept Popup
    await homePage.clickAcceptButtonPopup();

    //taps to giriş yap butonu move to element gerekebilir
    await homePage.tapsToLoginButton();

    //check login page
    await loginPage.checkLoginPage();

    //click e mail textbox and senkey
    await loginPage.sendKeyEmailTextbox('denemepoc123@gmail.com');

    //taps to login button
    await loginPage.clickLogginButtonEmailTextbox();

    //check password textbox
    await loginPage.checkPasswordTextbox();

    //click password textbox and senkey
    await loginPage.sendKeyPasswordTextbox('Denemepoc123');

    //taps to login button on the password textbox,
    await loginPage.clickLoginButtonPasswordTextbox();

    //should see Logged In Home Page 
    await loginPage.checkErrorLogin();

    //Close browser
    await page.close();

});
