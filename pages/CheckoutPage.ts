import { Page, Locator } from "@playwright/test";

export class CheckoutPage {
    page: Page;
    checkoutButton: Locator;
    addressDeliveryBlock: Locator;
    firstProductInCheckout: Locator;
    firstProductTotalPrice: Locator;
    commentToOrder: Locator;
    placeOrderButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.getByText('Proceed To Checkout');
        this.addressDeliveryBlock = page.locator('#address_delivery');
        this.firstProductInCheckout = page.locator('tr[id="product-1"]');
        this.firstProductTotalPrice = this.firstProductInCheckout.locator('.cart_total_price');
        this.commentToOrder = page.locator('#ordermsg [name="message"]');
        this.placeOrderButton = page.getByRole("link", {name: 'Place Order'});

    };

    async proceedToCheckout(){
        await this.checkoutButton.click();
    }
    async addComment(comment: string){
        await this.commentToOrder.fill(comment);
    }
    async placeOrder(){
        await this.placeOrderButton.click();
    }
    async completeCheckout(comment: string){
        await this.addComment(comment);
        await this.placeOrder();
    }
};