import { test as setup, expect } from '@playwright/test';
import data from '../../test-data/users.json';
import { LoginPage } from '../../pages/LoginPage';

setup('authenticate user', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();

    await loginPage.login(
        data.validUser.email,
        data.validUser.password
    );

    await expect(
        loginPage.loginSuccessMessage
    ).toBeVisible();

    await page.context().storageState({
        path: 'playwright/.auth/user.json',
    });
});