import { test, expect } from '../../fixtures/base.fixture';
import {products} from '../../test-data/products';

test('user can add product to cart', async ({ authenticatedPage, productsPage, cartPage }) => {
    await test.step('Go to product page', async () => {
        await productsPage.header.goToProductsPage();
    });
    await test.step('Add first product and open cart', async () => {
        await productsPage.addFirstProductAndOpenCart();
    });
    await test.step('Verify that first product in cart exists', async () => {
        await expect(cartPage.getProductRow(products.blueTop.id)).toBeVisible();
    });
    await test.step('Verify product exists', async () => {
       await cartPage.verifyProduct(products.blueTop);
    });

    await test.step('Remove first product', async () => {
        await cartPage.removeProduct(products.blueTop.id);
        await expect(cartPage.getProductRow(products.blueTop.id)).toBeHidden();
    });
});
