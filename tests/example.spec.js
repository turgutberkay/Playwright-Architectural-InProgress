// @ts-check
const { test, expect } = require('@playwright/test');


test('get started link', async ({ page }) => {
await page.goto('https://www.hepsiburada.com/');
await page.getByRole('button', { name: 'Kabul et' }).click();
await page.getByText('Moda', { exact: true }).click();
await page.getByRole('link', { name: 'Erkek', exact: true }).click();
await page.getByRole('heading', { name: 'Erkek Giyim Modelleri' }).click();
});

