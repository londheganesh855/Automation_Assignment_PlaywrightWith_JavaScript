import { expect, test } from '@playwright/test';
import { loginPageClass } from '../pages/loginPagePo';
import { homePageClass } from '../pages/homePagePo';
import { filterJobsPageClass } from '../pages/filterJobsPo';
import { managementNavigationPageClass } from '../pages/managementNavigationPagePo';

test('Test Case_03 - Validate filter job functionality', async ({ page }) => {
    test.setTimeout(120000);
    const loginPage = new loginPageClass(page);
    const homePage = new homePageClass(page);
    const filterJobsPage = new filterJobsPageClass(page);
    const managementNavigationPage = new managementNavigationPageClass(page);

    // Act I - Login into the application
    await page.goto(process.env.baseUrl);;
    await loginPage.loginUser();
    await homePage.logo.waitFor();
    // Assert -I
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.welcomeMsg).toBeVisible();
    await expect(homePage.welcomeMsg).toContainText('Welcome back');
    // Act II - Click on the job link and then navigate to the list section.
    await managementNavigationPage.jobLink.click();
    await managementNavigationPage.listLink.waitFor();
    await managementNavigationPage.listLink.click();
    // Assert II
    await expect(managementNavigationPage.listHeader).toBeVisible();
    await expect(managementNavigationPage.listHeader).toHaveText('List');
    // Act III - click on filter.
    await filterJobsPage.filters.click();
    // Assert III
    await expect(filterJobsPage.filtersHeader).toBeVisible();
    await expect(filterJobsPage.filtersHeader).toHaveText('Filters');
    // Act IV - Click on on Demanad checkBox
    await filterJobsPage.onDemandCheckBox.click();
    // Assert IV
    await expect(filterJobsPage.onDemandCheckBox).toBeChecked();
    // Act V - click on cancel icon of filter list
    await filterJobsPage.cancelFilterIcon.click();
    // Assert
    await expect(filterJobsPage.filtersHeader).not.toBeVisible();
    await expect(filterJobsPage.employmentTypeChip).toBeVisible();
    await expect(filterJobsPage.employmentTypeChip).toHaveText('On Demand');
    const onDemenadjob = await filterJobsPage.onDemandEmploymentJobType.allTextContents();
    const filterJobs = await filterJobsPage.onDemandEmploymentJobType.count();
    expect(filterJobs).toBe(onDemenadjob.length);
});


