import { Page, Locator, expect } from "@playwright/test";
import { ProductData } from '../types/productData';

export class CartPage {
    page: Page;
    emptyCartMessage: Locator;
    cartItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emptyCartMessage = page.getByText('Cart is empty!');
        this.cartItems = page.locator('tr[id^="product-"]');
    };

    getProductRow(productId: number){
      return this.page.locator(`#product-${productId}`);
    }
    getProductName(productId: number){
        return this
        .getProductRow(productId)
        .locator('.cart_description a');
    }
    getProductPrice(productId: number){
        return this
        .getProductRow(productId)
        .locator('.cart_price p');
    }
    getProductQuantity(productId: number){
        return this
        .getProductRow(productId)
        .locator('.disabled');
    }
     async removeProduct(productId: number) {
        await this.getProductRow(productId).locator('[data-product-id]').click();
    }
    async verifyProduct(product: ProductData){
        await expect(this.getProductName(product.id)).toHaveText(product.name);
        await expect(this.getProductPrice(product.id)).toContainText(product.price);
        await expect(this.getProductQuantity(product.id)).toHaveText(product.quantity);
    }
};