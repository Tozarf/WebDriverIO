import Base from "../Base";

class PayBillsPage extends Base {
    get payBillsTab() {
        return $("#pay_bills_tab");
    }
    get purchaseForeignCurrency() {
        return $("#tabs > ul > li:nth-child(3) > a");
    }
    get currencySelect() {
        return $("#pc_currency");
    }
    get amount() {
        return $("#pc_amount");
    }
    get dollars() {
        return $("#pc_inDollars_true");
    }
    get purchaseButton() {
        return $("#purchase_cash");
    }
    get message() {
        return $("#alert_content");
    }
    async clickOnPayBills() {
        await this.payBillsTab.waitForExist();
        await this.payBillsTab.click();
    }
    async clickOnPurchaseForeignCurrency() {
        await this.purchaseForeignCurrency.waitForExist();
        await this.purchaseForeignCurrency.click();
    }
    async setAmount(value) {
        await this.amount.waitForExist();
        await this.amount.setValue(value);
    }
    async clickOnDollars() {
        await this.dollars.waitForExist();
        await this.dollars.click();
    }
    async clickOnPurchaseButton() {
        await this.purchaseButton.waitForExist();
        await this.purchaseButton.click();
    }
}
export default new PayBillsPage();
