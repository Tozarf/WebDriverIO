describe("E2E Tests - Search", () => {
    it("Should load homepage", async () => {
        browser.url("http://zero.webappsecurity.com/index.html");
        await $("#searchTerm").waitForExist();
    });
    it("Should submit searchbox", async () => {
        await $("#searchTerm").setValue("bank");
        browser.keys("Enter");
        const resultsTitle = $("h2");

        await resultsTitle.waitForExist();
        await expect(resultsTitle).toHaveText("Search Results:");
    });
});
