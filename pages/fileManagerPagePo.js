class fileManagerPageClass {
    constructor(page) {
        this.page = page;
        this.chatLink = page.locator('//div[@role="button"]//*[text()="File Manager"]');
        this.fileManagertHeader = page.locator('//h4[contains(text(),"File Manager")]');
        this.fileManagerTableRows = page.locator('//tr[contains(@class,"MuiTableRow-root c")]');
        this.allItemsCheckBox = page.locator('//div[contains(@class,"MuiTableContainer")]//th//input[@type="checkbox"]');
        this.deleteIcon = page.getByLabel('Delete');
        this.deleteDialogBox = page.locator('//div[@role="dialog"]');
        this.dialogBoxHeader = page.locator('//h2[text()="Delete"]');
        this.dialogboxSubText = page.locator('//div[contains(@class,"MuiDialogContent-root")]');
        this.deleteButton = page.locator('//button[text()="Delete"]');
    }
}
module.exports = { fileManagerPageClass };