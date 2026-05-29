import { test, expect } from '../../fixtures/base.fixture';

const searchText = 'sleeve';

test('user can use search', async ({ authenticatedPage, productsPage, page }) => {
    await test.step('Go to product page', async () => {
        await productsPage.header.goToProductsPage();
    });
    await test.step('search product', async () => {
        await productsPage.searchProduct(searchText);
    })
    await test.step('verify URL', async () => {
        await expect(page).toHaveURL(`/products?search=${searchText}`);
    });
    await test.step('input value', async () => {
        await expect(productsPage.searchInput).toHaveValue(searchText);
    });
    await test.step('verify at least one product', async () => {
        await expect(productsPage.firstProductResult).toContainText(/sleeve/i);
    })
});

