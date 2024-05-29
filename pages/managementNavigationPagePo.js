class managementNavigationPageClass {
    constructor(page) {
        this.page = page;
        this.userLink = page.locator('//div[@role="button"]//*[text()="user"]');
        this.accoountLink = page.locator('//div[@role="button"]//*[text()="account"]');
        this.accounHeader = page.locator('//h4[contains(text(),"Account")]');
        this.jobLink = page.locator('//div[@role="button"]//*[text()="job"]');
        this.listLink = page.locator('//div[@role="button"]//*[text()="list"]');
        this.listHeader = page.locator('//h4[contains(text(),"List")]');
        this.chatLink = page.locator('//div[@role="button"]//*[text()="chat"]');
        this.chatHeader = page.locator('//h4[contains(text(),"Chat")]');
        this.fileManagerLink = page.locator('//div[@role="button"]//*[text()="File Manager"]');
        this.fileManagertHeader = page.locator('//h4[contains(text(),"File Manager")]');
    }
}
module.exports = { managementNavigationPageClass };

