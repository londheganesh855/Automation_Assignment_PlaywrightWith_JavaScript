class loginPageClass {
    constructor(page) {
        this.page = page;
        this.emailField = page.getByLabel('Email address');
        this.passwordField = page.getByLabel('Password');
        this.signInButton = page.getByText('Login');
    }

    async loginUser() {
        await this.signInButton.click();
        await this.emailField.fill(process.env.userID);
        await this.passwordField.fill(process.env.password);
        await this.signInButton.click();
    }
}
module.exports = { loginPageClass };

