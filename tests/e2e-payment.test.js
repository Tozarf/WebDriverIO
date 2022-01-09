import App from "../page-objects/App";
import Navbar from "../page-objects/components/Navbar";
import PayBills from "../page-objects/components/PayBills";
import LoginPage from "../page-objects/pages/LoginPage";

describe("", () => {
    it("should login into application", async () => {
        App.openLoginPage();
        // await LoginPage.formIsVisible();
        // await LoginPage.fillForm("username", "password");
        // await LoginPage.submitForm();
        await LoginPage.login("username", "password");
        await Navbar.insideNavbarIsVisible();
    });
    it("should carry out payment", async () => {
        await PayBills.clickOnPayBillsTab();
        const selectPayee = await PayBills.selectPayee;
        selectPayee.waitForExist();
        await selectPayee.selectByAttribute("value", "apple");
        const selectAccount = await PayBills.selectAccount;
        selectAccount.waitForExist();
        await PayBills.setValues(
            "200",
            "2022-01-12",
            "Testing the description"
        );
        await PayBills.clickOnPayButton();
        const message = PayBills.message;
        await expect(message).toBeDisplayed();
        await expect(message).toHaveText(
            "The payment was successfully submitted."
        );
    });
});
