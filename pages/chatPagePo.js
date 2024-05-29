class chatPageClass {
    constructor(page) {
        this.page = page;
        this.searchContact = page.getByPlaceholder('Search contacts...');
        this.sendMessage = page.getByPlaceholder('Type a message');
        this.toRecipients = page.getByPlaceholder('+ Recipients');
        this.ChatBox = page.getByPlaceholder('Type a message');
        this.sentMessage = page.locator('//div[@class="MuiStack-root css-t9gybc"]');
        this.chatRecipients = page.locator('//*[contains(@class,"MuiChip-label MuiChip")]');
    }
}
module.exports = { chatPageClass };