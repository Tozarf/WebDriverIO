describe("End to end - Login /Logout Flow", () => {
    it("should not login with invalid credentials", async () => {
        browser.url("http://zero.webappsecurity.com/");
        const button = $("#signin_button");
        await button.waitForExist();
        button.click();
        const loginForm = $("#login_form");
        await loginForm.waitForExist();
        const userLogin = $("#user_login");
        await userLogin.setValue("invalid");
        const password = $("#user_password");
        await password.setValue("invalid");
        const submitButton = $("input[type='submit']");
        submitButton.click();
        const error = $(".alert.alert-error");
        await error.waitForExist();
        await expect(error).toHaveText("Login and/or password are wrong.");
    });
    it("should login with valid credentials", async () => {
        browser.url("http://zero.webappsecurity.com/");
        const button = $("#signin_button");
        await button.waitForExist();
        button.click();
        const loginForm = $("#login_form");
        await loginForm.waitForExist();
        const userLogin = $("#user_login");
        await userLogin.setValue("username");
        const password = $("#user_password");
        await password.setValue("password");
        const submitButton = $("input[type='submit']");
        await submitButton.click();
        const navTab = $(".nav-tabs");
        navTab.waitForExist();
        await expect(navTab).toBeDisplayed();
    });
    it("should logout from app", async () => {
        const iconUser = $(".icon-user");
        await iconUser.waitForExist();
        await iconUser.click();
        const logOut = $("#logout_link");
        await logOut.waitForExist();
        await logOut.click();
        const signIn = $("#signin_button");
        await signIn.waitForExist();
        await expect(signIn).toBeDisplayed();
    });
});
