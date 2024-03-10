const { test, expect } = require('@playwright/test');



//npx playwright test tests/tags.spec.js --project=chromium --grep "@smoke" ile tag ile kosum yapılabılıyor.
test('Assertions @smoke ', async ({page}) => {

    await page.pause();


    await page.goto('https://demoqa.com/');


    // Present / NotPresent
    await expect(page.locator('text=Forms')).toHaveCount(1);
    if(await page.$('text=Forms')){
        await page.click('text=Forms')
    }

    // expect.soft yazarsan --headed da yani debugta kalıyor oradan bakabiliyosun
    await expect.soft(page.locator('text=Please select an item from left to start practice.')).toBeHidden();

    //Visible / Hidden

    await expect(page.locator('text=Please select an item from left to start practice.')).toBeVisible();
    await expect.soft(page.locator('text=Please select an item from left to start practice.')).toBeHidden();

    //Enabled / Disabled

    await expect(page.locator('text=Please select an item from left to start practice.')).toBeEnabled();
    await expect.soft(page.locator('text=Please select an item from left to start practice.')).toBeDisabled();

    // Text matches value or not 
    await expect(page.locator('text=Please select an item from left to start practice.')).toHaveText('Please select an item from left to start practice.');
    await expect.soft(page.locator('text=Please select an item from left to start practice.')).not.toHaveText('ABCD');

    //check page url and title
    await expect(page).toHaveURL('https://demoqa.com/forms')
    await expect(page).toHaveTitle(/.*QA/)

    //


 
});