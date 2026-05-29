import { test, expect } from '../../fixtures/base.fixture';
import userData from '../../test-data/userData.json';

test.use({storageState: { cookies: [], origins: [] }});

test('user can signup', async ({ loginPage, signupPage, page }) => {
    const timestamp = Date.now();
    const email = `test${timestamp}@gmail.com`;
    const name = `user${timestamp}`;

    await test.step('Go to login page', async () => {
        await loginPage.goToLoginPage();
    });
    await test.step('start signup', async () => {
        await signupPage.startSignup(name, email);
    });
    await test.step('Verify signup text on page', async () => {
        await expect(signupPage.signupLoadChecker).toBeVisible();
    });
    await test.step('Verify name and email are autofilled', async () => {
        await expect(signupPage.accountName).toHaveValue(name);
        await expect(signupPage.accountEmail).toHaveValue(email);
    });
    await test.step('Enter Account Information part', async () => {
        await signupPage.fillAccountInformation(userData);
    });
    await test.step('Verify checkboxes are checked', async () => {
        await expect(signupPage.checkboxNewsletter).toBeChecked();
        await expect(signupPage.checkboxSpecialOffers).toBeChecked();
    });
    await test.step('Enter address information', async () => {
        await signupPage.fillAddressInformation(userData);

    });
    await test.step('Submit registration', async () => {
        await signupPage.submitRegistration();

    });
    await test.step("Verify account created message is visible", async () => {
        await expect(signupPage.accountCreatedMessage).toBeVisible();
    });
    await test.step("Click to continue from signup page", async () => {
        await signupPage.continueAfterSignup();
    });
    await test.step('Verify login name as Logged in on the page', async () => {
        await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();
    })
});
