import { expect, test } from '@playwright/test';
import { loginPageClass } from '../pages/loginPagePo';
import { homePageClass } from '../pages/homePagePo';
import { managementNavigationPageClass } from '../pages/managementNavigationPagePo';
import { fileManagerPageClass } from '../pages/fileManagerPagePo';

test('Test Case_03 - Validate delete file functionality', async ({ page }) => {
    test.setTimeout(120000);
    const loginPage = new loginPageClass(page);
    const homePage = new homePageClass(page);
    const fileManagerPage = new fileManagerPageClass(page);
    const managementNavigationPage = new managementNavigationPageClass(page);

    // Act I - Login into the application
    await page.goto(process.env.baseUrl);;
    await loginPage.loginUser();
    await homePage.logo.waitFor();
    // Assert -I
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.welcomeMsg).toBeVisible();
    await expect(homePage.welcomeMsg).toContainText('Welcome back');
    // Act II - Click on the file manager link.
    await managementNavigationPage.fileManagerLink.click();
    // Assert II
    await expect(managementNavigationPage.fileManagertHeader).toBeVisible();
    await expect(managementNavigationPage.fileManagertHeader).toHaveText('File Manager');
    await fileManagerPage.fileManagerTableRows.last().waitFor();
    const beforeDeleteTableRowCount = await fileManagerPage.fileManagerTableRows.count();
    // Act III - Select all files.
    await fileManagerPage.allItemsCheckBox.click();
    // Assert III
    await expect(fileManagerPage.deleteIcon).toBeVisible();
    await expect(fileManagerPage.allItemsCheckBox).toBeChecked();
    expect(beforeDeleteTableRowCount).toStrictEqual(11);
    // Act IV - Click on delete icon
    await fileManagerPage.deleteIcon.click();
    // Assert IV
    await expect(fileManagerPage.deleteDialogBox).toBeVisible();
    await expect(fileManagerPage.dialogBoxHeader).toBeVisible();
    await expect(fileManagerPage.dialogBoxHeader).toHaveText('Delete');
    await expect(fileManagerPage.dialogboxSubText).toHaveText('Are you sure want to delete 30 items?');
    // Act V - Click on deleteButton
    await fileManagerPage.deleteButton.click();
    // Assert V
    const afterDeleteTableRowCount = await fileManagerPage.fileManagerTableRows.count();
    expect(afterDeleteTableRowCount).toStrictEqual(0);
});


