import { Page, Locator, expect } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent";

export class ProductsPage {
    page: Page;
    header: HeaderComponent;
    viewCartLink: Locator;
    searchInput: Locator;
    searchButton: Locator;
    firstProductResult: Locator;
    continueShoppingButton: Locator;
    productCards: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderComponent(page);
        this.viewCartLink = page.getByRole('link', { name: 'View Cart' }).last();
        this.searchInput = page.getByPlaceholder("Search Product");
        this.searchButton = page.locator("#submit_search");
        this.firstProductResult = page.locator(".single-products").first();
        this.continueShoppingButton = page.getByRole('button', {name: "Continue Shopping"});
        this.productCards = page.locator('.product-image-wrapper');

    };
    async continueShopping() {
        await this.continueShoppingButton.click();
    }
    async openCartFromModal() {
        await expect(this.viewCartLink).toBeVisible();
        await this.viewCartLink.click();
    }
    async searchProduct(searchText: string) {
        await this.searchInput.fill(searchText);
        await this.searchButton.click();
    }
    async addFirstProductAndOpenCart(){
       await this.addProductToCart(0);
       await this.openCartFromModal(); 
    }
   async addProductToCart(productIndex: number){
       const productCard = this.productCards.nth(productIndex);
       await productCard.hover();
       await productCard.locator('.product-overlay [data-product-id]').click();

   }
}

