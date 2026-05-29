import { Page, Locator } from "@playwright/test";
import { UserData } from "../types/userData";

export class SignupPage{
    page: Page;
    signupNameInput: Locator;
    signupEmailInput: Locator;
    signupButton: Locator;

    signupLoadChecker: Locator;
    mrRadioButton: Locator;
    accountName: Locator;
    accountEmail: Locator;
    accountPassword: Locator;
    dateOfBirthDropdown: Locator;
    monthOfBirthDropdown: Locator;
    yearOfBirthDropdown: Locator;
    checkboxNewsletter: Locator;
    checkboxSpecialOffers: Locator;

    firstNameAccount: Locator;
    lastNameAccount: Locator;
    addressAccount: Locator;
    chooseCountryDropdown: Locator;
    stateAccount: Locator;
    cityAccount: Locator;
    zipcodeAccount: Locator;
    mobileNumberAccount: Locator;
    createAccountButton: Locator;

    accountCreatedMessage: Locator;
    continueButton: Locator;


    constructor(page:Page) {
        this.page = page;
        this.signupNameInput = page.getByPlaceholder("Name");
        this.signupEmailInput = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.getByRole('button', {name: "Signup"});
        //Enter Account Information
        this.signupLoadChecker = page.getByText("Enter Account Information");
        this.mrRadioButton = page.locator("#id_gender1");
        this.accountName = page.locator('[data-qa="name"]');
        this.accountEmail = page.locator('[data-qa="email"]');
        this.accountPassword = page.locator('[data-qa="password"]');
        this.dateOfBirthDropdown = page.locator('[data-qa="days"]');
        this.monthOfBirthDropdown = page.locator('[data-qa="months"]');
        this.yearOfBirthDropdown = page.locator('[data-qa="years"]');
        this.checkboxNewsletter = page.locator('#newsletter');
        this.checkboxSpecialOffers = page.locator('#optin');
        //Address Information
        this.firstNameAccount = page.locator('[data-qa="first_name"]');
        this.lastNameAccount = page.locator('[data-qa="last_name"]');
        this.addressAccount = page.locator('[data-qa="address"]');
        this.chooseCountryDropdown = page.locator('[data-qa="country"]');
        this.stateAccount = page.locator('[data-qa="state"]');
        this.cityAccount = page.locator('[data-qa="city"]');
        this.zipcodeAccount = page.locator('[data-qa="zipcode"]');
        this.mobileNumberAccount = page.locator('[data-qa="mobile_number"]');
        this.createAccountButton = page.getByRole('button', {name: 'Create Account'});
        //final step
        this.accountCreatedMessage = page.getByText('Account Created!');
        this.continueButton = page.getByRole('link', {name: 'Continue'});
    }


async startSignup(name: string, email: string){
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
}

async fillAccountInformation(userData: UserData){
    await this.mrRadioButton.click();
    await this.accountPassword.fill(userData.password);
    await this.dateOfBirthDropdown.selectOption(userData.dayOfBirth);
    await this.monthOfBirthDropdown.selectOption(userData.monthOfBirth);
    await this.yearOfBirthDropdown.selectOption(userData.yearOfBirth);
    await this.checkboxNewsletter.check();
    await this.checkboxSpecialOffers.check();

};

async fillAddressInformation(userData: UserData){
    await this.firstNameAccount.fill(userData.firstName);
    await this.lastNameAccount.fill(userData.lastName);
    await this.addressAccount.fill(userData.address)
    await this.chooseCountryDropdown.selectOption(userData.country);
    await this.stateAccount.fill(userData.state);
    await this.cityAccount.fill(userData.city);
    await this.zipcodeAccount.fill(userData.zipcode);
    await this.mobileNumberAccount.fill(userData.mobileNumber);

};

async submitRegistration(){
    await this.createAccountButton.click();
};   

async continueAfterSignup(){
    await this.continueButton.click();
}
}