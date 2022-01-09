import App from "../page-objects/App";
import Navbar from "../page-objects/components/Navbar";

describe("E2E Tests - Search", () => {
    it("Should load homepage", async () => {
        App.openHomepage();
    });
    it("Should submit searchbox", async () => {
        Navbar.search("bank");

        const resultsTitle = $("h2");
        await resultsTitle.waitForExist();
        await expect(resultsTitle).toHaveText("Search Results:");
    });
});
