import { test, expect } from '../../fixtures/base.fixture';
import { verifyProductStructure } from '../../utils/assertions/productAssertions';

test('Get API response', async ({ productsApi }) => {
    const response = await productsApi.getAllProducts();
    expect(response.status()).toBe(200);
    const body = await productsApi.getAllProductsData();

    expect(body.products.length).toBeGreaterThan(0);

    body.products.forEach((product) => {
        verifyProductStructure(product);
    });
});

test('Negative API response', async ({ productsApi }) => {
    const response = await productsApi.invalidProductsMethod();
    const body = await productsApi.invalidProductsMethodData();

    expect(response.status()).toBe(200);
    expect(body.responseCode).toBe(405);
    expect(body.message).toBe('This request method is not supported.');
});

test('GET single product', async ({ productsApi }) => {
    const response = await productsApi.getAllProductsData();
    const result = response.products.find((product) => product.name === 'Blue Top');
    expect(result).toBeDefined();
    if (!result) {
        throw new Error('Product was not found');
    }
    expect(result.name).toBe('Blue Top');
    expect(result.brand).toBe('Polo');
    expect(result.price).toBe('Rs. 500');
});

test('Post to Search product', async ({ productsApi }) => {
    const body = await productsApi.searchProduct('top');
    const result = body.products.find((product) => product.name.includes('Top'));
    expect(body.responseCode).toBe(200);
    expect(body.products).toBeDefined();
    expect(body.products.length).toBeGreaterThan(0);
    if (!result) {
        throw new Error('Product was not found');
    }
    expect(result.name).toContain('Top');

});

test('Negative bad search product', async ({ productsApi }) => {
    const response = await productsApi.invalidSearchProduct();
    expect(response.status()).toBe(200);
    const body = await productsApi.invalidSearchMethodData();
    expect(body.responseCode).toBe(400);
    expect(body.message).toBe('Bad request, search_product parameter is missing in POST request.');
});