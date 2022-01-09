import App from "../page-objects/App";
import Navbar from "../page-objects/components/Navbar";
import HelpPage from "../page-objects/pages/HelpPage";
import LoginPage from "../page-objects/pages/LoginPage";

describe("E2E - Help", () => {
    it("should login into the application", async () => {
        App.openLoginPage();
        await LoginPage.login("username", "password");
        await Navbar.insideNavbarIsVisible();
    });
    it("should display correctly the HELP section", async () => {
        await Navbar.clickSettings();
        await Navbar.clickHelp();
        const title = HelpPage.title;
        await expect(title).toHaveText("How do I log into my account?");
        await HelpPage.clickOnTransFunds();
        await expect(title).toHaveText("How do I transfer funds?");
        await HelpPage.clickOnPayBills();
        await expect(title).toHaveText("How do I pay bills?");
    });
});
