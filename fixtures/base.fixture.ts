import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { SignupPage } from '../pages/SignupPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';
import { ProductsApi } from '../tests/api/ProductsApi';

type Pages = {

    loginPage: LoginPage;
    productsPage: ProductsPage;
    cartPage: CartPage;
    signupPage: SignupPage;
    checkoutPage: CheckoutPage;
    paymentPage: PaymentPage;
    productsApi: ProductsApi;
    authenticatedPage: Page;

};

export const test = base.extend<Pages>({

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);

    },

    productsPage: async ({ page }, use) => {

        await use(new ProductsPage(page));

    },

    cartPage: async ({ page }, use) => {

        await use(new CartPage(page));

    },

    signupPage: async ({ page }, use) => {

        await use(new SignupPage(page));

    },


    checkoutPage: async ({ page }, use) => {

        await use(new CheckoutPage(page));

    },

    paymentPage: async ({ page }, use) => {
        await use(new PaymentPage(page));
    },
    authenticatedPage: async ({ page }, use) => {
        await page.goto('/');
        await use(page);
    },

    productsApi: async ({ request }, use) => {
        await use(new ProductsApi(request));
    }
});

export { expect } from '@playwright/test';