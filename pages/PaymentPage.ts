import { Page, Locator } from "@playwright/test";
import { PaymentData } from "../types/paymentData";

export class PaymentPage {
    page: Page;
    nameOnCardInput: Locator;
    cardNumberInput: Locator;
    cvcInput: Locator;
    expirationMonthInput: Locator;
    expirationYearInput: Locator;
    payOrderButton: Locator;
    paymentFormTitle: Locator;
    successOrderMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameOnCardInput = page.locator('[data-qa="name-on-card"]');
        this.cardNumberInput = page.locator('[data-qa="card-number"]');
        this.cvcInput = page.locator('[data-qa="cvc"]');
        this.expirationMonthInput = page.locator('[data-qa="expiry-month"]');
        this.expirationYearInput = page.locator('[data-qa="expiry-year"]');
        this.payOrderButton = page.getByRole('button', {name:'Pay and Confirm Order'});
        this.paymentFormTitle = page.getByText("Name on Card");
        this.successOrderMessage = page.getByText('Congratulations! Your order has been confirmed!');
    };

    async fillPaymentData(paymentData: PaymentData){
        await this.nameOnCardInput.fill(paymentData.nameOnCard);
        await this.cardNumberInput.fill(paymentData.cardNumber);
        await this.cvcInput.fill(paymentData.cvc);
        await this.expirationMonthInput.fill(paymentData.expirationMonth);
        await this.expirationYearInput.fill(paymentData.expirationYear);

    }
    async submitPayment(){
        await this.payOrderButton.click();
    }
    async pay(paymentData: PaymentData){
        await this.fillPaymentData(paymentData);
        await this.submitPayment();
    }
};
