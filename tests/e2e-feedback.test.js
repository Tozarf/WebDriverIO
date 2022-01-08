import App from "../page-objects/App";

describe("E2E - FEEDBACK", () => {
    it("should load feedback form", async () => {
        App.openHomepage();
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
