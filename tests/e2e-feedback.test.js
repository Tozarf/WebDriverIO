import App from "../page-objects/App";
import FeedbackPage from "../page-objects/pages/FeedbackPage";

describe("E2E - FEEDBACK", () => {
    it("should load feedback form", async () => {
        // App.openHomepage();
        // await $("#feedback").waitForExist();
        // await $("#feedback").click();
        App.openFeedback();
        await FeedbackPage.formIsVisible();
    });
    it("should submit feedback form", async () => {
        // await $("#name").setValue("Name");
        // await $("#email").setValue("Test@test.com");
        // await $("#subject").setValue("subject");
        // await $("#comment").setValue("Just a testing message");
        // await $("input[type='submit']").click();
        await FeedbackPage.fillForm(
            "Name",
            "Test@test.com",
            "subject",
            "Just a testing message"
        );
        await FeedbackPage.submitForm();
        await expect(browser).toHaveUrl(
            "http://zero.webappsecurity.com/sendFeedback.html"
        );
    });
});
