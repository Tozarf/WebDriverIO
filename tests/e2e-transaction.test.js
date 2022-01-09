import App from "../page-objects/App";
import InsideNavbar from "../page-objects/components/Filter";
import Navbar from "../page-objects/components/Navbar";
import FiltersPage from "../page-objects/pages/FiltersPage";
import LoginPage from "../page-objects/pages/LoginPage";

describe("E2E - Transactions ", () => {
    it("should login into the application", async () => {
        App.openLoginPage();
        await LoginPage.login("username", "password");
        await Navbar.insideNavbarIsVisible();
    });
    it("should carry out transaction", async () => {
        await InsideNavbar.clickAccountActivityTab();
        await InsideNavbar.clickFiltersLink();

        await FiltersPage.fillDescription(
            "A testing description",
            "2021-11-09",
            "2021-12-23",
            "100",
            "10000",
            "Deposit"
        );
        await FiltersPage.submitFilter();
        const message = await FiltersPage.message;
        const transactions = await FiltersPage.transactions;
        await expect(message).toHaveText("No results.");
        await expect(transactions).toBeDisplayed();
    });
});
