describe("E2E - FEEDBACK", () => {
    it("should load feedback form", async () => {
        browser.url("http://zero.webappsecurity.com/");
        await $("#feedback").waitForExist();
        await $("#feedback").click();
        await $("form").waitForExist();
    });
    it("should submit feedback form", async () => {
        await $("#name").setValue("Name");
        await $("#email").setValue("Test@test.com");
        await $("#subject").setValue("subject");
        await $("#comment").setValue("Just a testing message");
        await $("input[type='submit']").click();
        await expect(browser).toHaveUrl(
            "http://zero.webappsecurity.com/sendFeedback.html"
        );
    });
});
