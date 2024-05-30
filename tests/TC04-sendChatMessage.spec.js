import { expect, test } from '@playwright/test';
import { loginPageClass } from '../pages/loginPagePo';
import { homePageClass } from '../pages/homePagePo';
import { chatPageClass } from '../pages/chatPagePo';
import { managementNavigationPageClass } from '../pages/managementNavigationPagePo';

test('Test Case_03 - Validate send message functionality', async ({ page }) => {
    test.setTimeout(120000);
    const loginPage = new loginPageClass(page);
    const homePage = new homePageClass(page);
    const chatPage = new chatPageClass(page);
    const managementNavigationPage = new managementNavigationPageClass(page);
    const textMessage = 'Hello, how are you?'
    const userName = 'Deja Brady';

    // Act I - Login into the application
    await page.goto("/");
    await loginPage.loginUser();
    await homePage.logo.waitFor();
    // Assert -I
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.welcomeMsg).toBeVisible();
    await expect(homePage.welcomeMsg).toContainText('Welcome back');
    // Act II - Click on the job link and then navigate to the list section.
    await managementNavigationPage.chatLink.click();
    // Assert II
    await expect(managementNavigationPage.chatHeader).toBeVisible();
    await expect(managementNavigationPage.chatHeader).toHaveText('Chat');
    // Act III select the chat recipient from the list
    await chatPage.toRecipients.click();
    await chatPage.toRecipients.fill(userName);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Escape');
    // Assert III
    await chatPage.chatRecipients.waitFor();
    await expect(chatPage.chatRecipients).toBeVisible();
    await expect(chatPage.chatRecipients).toHaveText(userName);
    // Act IV - click on chat box and send message to the recipent
    await chatPage.sendMessage.click();
    await chatPage.sendMessage.fill(textMessage);
    await page.keyboard.press('Enter');
    // Assert IV
    await expect(chatPage.sentMessage).toBeVisible();
    await expect(chatPage.sentMessage).toHaveText(textMessage);  
});


