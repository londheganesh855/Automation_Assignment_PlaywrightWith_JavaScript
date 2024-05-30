import { test, expect } from '@playwright/test';
import { loginPageClass } from '../pages/loginPagePo';

test('Verify Login functionality', async ({ page }) => {
    test.setTimeout(120000)
    const loginPage = new loginPageClass(page);
    await page.goto(process.env.baseUrl || "/");
    await loginPage.loginUser();
})
