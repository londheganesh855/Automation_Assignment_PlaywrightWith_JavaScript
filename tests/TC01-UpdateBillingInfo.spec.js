import { expect, test } from '@playwright/test';
import { LoginPageClass } from '../pages/loginPagePo';
import { homePageClass } from '../pages/homePagePo';
import { billingPageClass } from '../pages/billingPagepo';
import { managementNavigationPageClass } from '../pages/managementNavigationPagePo';

test('Test Case_01 - Update Billing Information)', async ({ page }) => {
    test.setTimeout(120000);
    const loginPage = new LoginPageClass(page);
    const homePage = new homePageClass(page);
    const billingPage = new billingPageClass(page);
    const managementNavigationPage = new managementNavigationPageClass(page);
    // Act I - Login into the application
    await page.goto("/");
    await loginPage.loginUser();
    await homePage.logo.waitFor();
    // Assert -I
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.welcomeMsg).toBeVisible();
    await expect(homePage.welcomeMsg).toContainText('Welcome back');
    // Act II - Click on the user link and then navigate to the account section.
    await managementNavigationPage.userLink.click();
    await managementNavigationPage.accoountLink.waitFor();
    await managementNavigationPage.accoountLink.click();
    // Assert II
    await expect(managementNavigationPage.accounHeader).toBeVisible();
    await expect(managementNavigationPage.accounHeader).toHaveText('Account');
    // Act III - click on billing tab.
    await billingPage.billingTab.click();
    // Assert III
    await expect(billingPage.billingplanHeader.first()).toBeVisible();
    await expect(billingPage.billingplanHeader.first()).toHaveText('Plan');
    // Act IV - Click on the arrow down icon in the account name section
    await billingPage.arrowDownIcon.first().click();
    // Assert IV
    await expect(billingPage.dialogBox).toBeVisible();
    await expect(billingPage.dialogBoxHeader).toBeVisible();
    await expect(billingPage.dialogBoxHeader).toHaveText('Address Book');
    // Act V - Update account name
    await billingPage.searchBar.fill('Deja Brady');
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter');
    // Assert V
    await expect(billingPage.accountName.first()).toHaveText('Deja Brady');
    // Act VI - Click on the arrow down icon in the payment method section
    await billingPage.arrowDownIcon.nth(1).click();
    // Assert VI
    await expect(billingPage.dialogBox).toBeVisible();
    await expect(billingPage.dialogBoxHeader).toBeVisible();
    await expect(billingPage.dialogBoxHeader).toHaveText('Cards');
    // Act VII - click on search bar and update payment method.
    await billingPage.searchBar.click();
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter');
    // Assert VII
    await expect(billingPage.paymentMethod.nth(1)).toContainText('1234');
});


