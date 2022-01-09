import App from "../page-objects/App";
import Navbar from "../page-objects/components/Navbar";
import LoginPage from "../page-objects/pages/LoginPage";
import PayBillsPage from "../page-objects/pages/PayBillsPage";

describe("E2E Test - Currency Exchange", () => {
    it("should log into application", async () => {
        App.openLoginPage();
        await LoginPage.formIsVisible();
        await LoginPage.fillForm("username", "password");
        await LoginPage.submitForm();
        await Navbar.insideNavbarIsVisible();
    });
    it("should make currency exchange", async () => {
        await PayBillsPage.clickOnPayBills();
        await PayBillsPage.clickOnPurchaseForeignCurrency();
        const currencySelect = await PayBillsPage.currencySelect;
        await currencySelect.waitForExist();
        await currencySelect.selectByAttribute("value", "GBP");
        await PayBillsPage.setAmount("233");
        await PayBillsPage.clickOnDollars();
        await PayBillsPage.clickOnPurchaseButton();

        await expect(PayBillsPage.message).toBeDisplayed();
        await expect(PayBillsPage.message).toHaveText(
            "Foreign currency cash was successfully purchased."
        );
    });
});
