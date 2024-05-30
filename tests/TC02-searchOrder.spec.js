import { expect, test } from '@playwright/test';
import { loginPageClass } from '../pages/loginPagePo';
import { homePageClass } from '../pages/homePagePo';
import { searchOrderPageClass } from '../pages/searchOrderPo';

test('Test Case_02 - Validate search order Functionality', async ({ page }) => {
    test.setTimeout(120000);
    const loginPage = new loginPageClass(page);
    const homePage = new homePageClass(page);
    const searchOrderPage = new searchOrderPageClass(page);

    // Act I - Login into the application
    await page.goto("/");
    await loginPage.loginUser();
    await homePage.logo.waitFor();
    // Assert -I
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.welcomeMsg).toBeVisible();
    await expect(homePage.welcomeMsg).toContainText('Welcome back');
    // Act III - click on search icon and enter name into the search bar.
    await searchOrderPage.searchIcon.click();
    await searchOrderPage.searchBar.fill('Order');
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    // Assert III
    await expect(searchOrderPage.SearchListHeader).toBeVisible();
    await expect(searchOrderPage.SearchListHeader).toHaveText('List');
    await expect(searchOrderPage.tableRow).toHaveCount(6);
    // Act IV - enter name into search box to filter name list
    await searchOrderPage.searchCustomer.fill('Cor');
    // Assert Iv
    await expect(searchOrderPage.tableRow).toHaveCount(2);
    await expect(searchOrderPage.searchedUser).toContainText('Cortez Herring');
});