import { test, expect } from '@playwright/test';
import {LoginPageClass} from '../pages/LoginPagePo';

test('Verify Login functionality', async ({ page }) => {
    test.setTimeout(120000)
    const loginPage = new LoginPageClass(page);
    await page.goto("/");
    await loginPage.loginUser();
})
