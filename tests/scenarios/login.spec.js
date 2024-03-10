const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/login');

test('Success Login', async ({ page }) => {

    const login = new LoginPage(page);

    await page.pause();

    //Go to Url
    await login.goTo();
    

    //Accept Popup
    await login.clickAcceptButtonPopup();

    //taps to giriş yap butonu move to element gerekebilir
    await login.tapsToLoginButton();

    //check login page
    await login.checkLoginPage();

    //click e mail textbox and senkey
    await login.sendKeyEmailTextbox('denemepoc123@gmail.com');

    //taps to login button
    await login.clickLogginButtonEmailTextbox();

    //check password textbox
    await login.checkPasswordTextbox();

    //click password textbox and senkey
    await login.sendKeyPasswordTextbox('Denemepoc123');

    //taps to login button on the password textbox,
    await login.clickLoginButtonPasswordTextbox();

    //should see Logged In Home Page 
    await login.checkLoggedIn();

    //Close browser
    await page.close();

});
