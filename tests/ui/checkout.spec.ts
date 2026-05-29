import { test, expect } from '../../fixtures/base.fixture';
import paymentData  from '../../test-data/paymentData.json';

test('Authenticated user can place an order', async ({authenticatedPage, paymentPage, checkoutPage, productsPage }) => {

    await test.step('Go to product page', async () => {
        await productsPage.header.goToProductsPage();
    });
    await test.step('Add first product and open cart', async () => {
        await productsPage.addFirstProductAndOpenCart();
    });
    await test.step('Open checkout page', async () => {
        await checkoutPage.proceedToCheckout();
    });
    await test.step('Verify address delivery exists', async () => {
        await expect(checkoutPage.addressDeliveryBlock).toBeVisible();
    });
    await test.step('Verify first product in checkout exists', async () => {
        await expect(checkoutPage.firstProductInCheckout).toBeVisible();
    });
    await test.step('Verify total of first product in checkout exists', async () => {
        await expect(checkoutPage.firstProductTotalPrice).toBeVisible();
    });
      await test.step('Add comment and place order', async()=> {
        await checkoutPage.completeCheckout('Please deliver fast');
    })
    await test.step('Verify redirection to payment page', async() => {
        await expect(paymentPage.paymentFormTitle).toBeVisible();
    });
    await test.step('Fill payment data and Pay', async() => {
        await paymentPage.pay(paymentData);
    })
    await test.step('Verify successful order message', async() => {
        await expect(paymentPage.successOrderMessage).toBeVisible();
    });
});