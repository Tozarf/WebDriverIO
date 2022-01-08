describe("E2E - Help", () => {
    it("should login into the application", async () => {
        browser.url("http://zero.webappsecurity.com/");

        await $("#signin_button").waitForExist();
        await $("#signin_button").click();

        await $("#login_form").waitForExist();
        await $("#user_login").setValue("username");

        await $("#user_password").setValue("password");

        await $("input[type='submit']").click();
    });
    it("should display correctly the HELP section", async () => {
        await $(".icon-cog").click();
        await $("#help_link").waitForExist();
        await $("#help_link").click();
        const title = $(".span8 > h3");
        await expect(title).toHaveText("How do I log into my account?");
        await $("*=transfer funds").click();
        await expect(title).toHaveText("How do I transfer funds?");
        await $("*=pay bills").click();
        await expect(title).toHaveText("How do I pay bills?");
    });
});
