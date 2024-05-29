class filterJobsPageClass {
    constructor(page) {
        this.page = page;
        this.searchBar = page.getByPlaceholder('Search...');
        this.filters = page.locator('//*[text()="Filters"]');
        this.employmentTypeChip = page.locator('//span[contains(@class,"MuiChip-label MuiChip")]');
        this.filtersHeader = page.locator('//h6[contains(@class,"MuiTypography-root MuiTypography-h6")]');
        this.onDemandCheckBox = page.locator('//div[@class="simplebar-content"]//*[text()="On Demand"]');
        this.cancelFilterIcon = page.locator("//div[@role='presentation']//button[2]");
        this.onDemandEmploymentJobType = page.locator('//div[contains(@class,"MuiPaper-root MuiPaper-elevation")]//*[text()="On Demand"]');
    }
}
module.exports = { filterJobsPageClass };