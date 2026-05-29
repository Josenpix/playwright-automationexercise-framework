import { test, expect } from '../../fixtures/base.fixture';
import data from '../../test-data/users.json';

test.use({ storageState: { cookies: [], origins: [] } });

test('user can login', async ({ loginPage, page }) => {
    await test.step('Go to login page', async () => {
        await loginPage.goToLoginPage();
    });
    await test.step('Enter valid login data', async () => {
        await loginPage.login(data.validUser.email, data.validUser.password);
    });
    await test.step('Verify successful login', async () => {
        await expect(loginPage.loginSuccessMessage).toBeVisible();
    });
    await test.step('Logout', async () => {
        await loginPage.logout();
    });
    await test.step('Verify redirect', async () => {
        await expect(page).toHaveURL("/login");
    });
});

test('user cannot login with invalid password', async ({ loginPage }) => {
    await test.step('Go to login page', async () => {
        await loginPage.goToLoginPage();
    });
    await test.step('Input invalid login data', async () => {
        await loginPage.login(data.invalidUser.email, data.invalidUser.password);
    });
    await test.step('Verify login error message', async () => {
        await expect(loginPage.loginErrorMessage).toBeVisible();
    });
});



