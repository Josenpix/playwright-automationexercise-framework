import { Page, Locator } from "@playwright/test";

export class LoginPage {
    page: Page;
    emailInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    loginSignupLink: Locator;
    logoutButton: Locator;
    loginSuccessMessage: Locator;
    loginErrorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailInput = page.getByPlaceholder("Email Address").first();
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginButton = page.getByRole('button', {name: "Login"});
        this.loginSignupLink = page.getByRole("link", {name: 'Signup / Login'} );
        this.logoutButton = page.getByRole("link", {name: 'Logout'});
        this.loginSuccessMessage = page.getByText('Logged in as');
        this.loginErrorMessage = page.getByText('Your email or password is incorrect!');
    }
    async login(email: string, password: string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async goToLoginPage(){ 
        await this.page.goto("/");
        await this.loginSignupLink.click();
    }

    async logout(){
        await this.logoutButton.click();
    }
}

