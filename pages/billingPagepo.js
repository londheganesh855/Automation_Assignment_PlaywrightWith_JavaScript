class billingPageClass {
    constructor(page) {
        this.page = page;
        this.billingTab = page.locator('//div[@role="tablist"]//*[text()="Billing"]');
        this.billingplanHeader = page.locator('//div[contains(@class,"MuiCardHeader-content ")]//span');
        this.arrowDownIcon = page.locator('//span[contains(@class,"MuiButton-endIcon")]');
        this.dialogBox = page.getByRole("dialog");
        this.dialogBoxHeader = page.locator("//h6[contains(@class,'MuiTypography-root MuiTypography-h6')]");
        this.accountName = page.locator('//div[text()="Billing name"]/ancestor::div[contains(@class,"MuiGrid2-direction-xs-row")]//button');
        this.searchBar = page.getByPlaceholder('Search...');
        this.paymentMethod = page.locator('//div[text()="Payment method"]/ancestor::div[contains(@class,"MuiGrid2-direction-xs-row")]//button');
    }
}
module.exports = { billingPageClass };

