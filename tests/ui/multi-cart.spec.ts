import { test, expect } from '../../fixtures/base.fixture';

test('user can add several products to cart', async ({ authenticatedPage, productsPage, cartPage }) => {
    await test.step('Go to product page', async () => {
        await productsPage.header.goToProductsPage();
    });
    await test.step('Add first product to the cart', async () => {
        await productsPage.addProductToCart(0);
    });
    await test.step('Click continue shopping from modal window', async () => {
        await productsPage.continueShopping();
    });
    await test.step('Add second product to the cart', async () => {
        await productsPage.addProductToCart(1);
    });
    await test.step('Open cart from modal window', async () => {
        await productsPage.openCartFromModal();
    });
    await test.step('Verify products exist', async () => {
       await expect(cartPage.getProductRow(1)).toBeVisible();
       await expect(cartPage.getProductRow(2)).toBeVisible();
       await expect(cartPage.cartItems).toHaveCount(2);
    });
    await test.step('Remove products from cart', async()=> {
        await cartPage.removeProduct(1);
        await cartPage.removeProduct(2);
    });
});
