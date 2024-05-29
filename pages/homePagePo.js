class homePageClass {
    constructor(page) {
        this.page = page;
        this.welcomeMsg = page.locator('//h4[contains(@class,"MuiTypography-root MuiTypography-h4")]');
        this.logo = page.locator('(//*[name()="svg"])[7]');
    }
}
module.exports = { homePageClass };