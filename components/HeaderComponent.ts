import {Page, Locator} from '@playwright/test'

export class HeaderComponent {
    page: Page;
    productsLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.productsLink = page.getByRole("link", { name: "Products" });
    };

    async goToProductsPage() {
        await this.productsLink.click();
        if (this.page.url().includes('#google_vignette')) {
             await this.page.goto('/products');
        }
    }
}

 