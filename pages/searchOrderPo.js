class searchOrderPageClass {
    constructor(page) {
        this.page = page;
        this.joblink = page.locator('//div[@role="button"]//*[text()="job"]');
        this.searchIcon = page.locator("//div[contains(@class,'MuiStack-root css-u')]//button[@type='button']");
        this.searchBar = page.getByPlaceholder('Search...');
        this.SearchListHeader = page.locator('//h4[contains(@class,"MuiTypography-root MuiTypography-h4")]');
        this.searchCustomer = page.getByPlaceholder('Search customer or order number...');
        this.tableRow = page.locator('//tr[contains(@class,"MuiTableRow-root MuiTableRow")]');
        this.searchedUser = page.locator('//tr[contains(@class,"MuiTableRow-root MuiTableRow")]//td[3]');
    }
}
module.exports = { searchOrderPageClass };