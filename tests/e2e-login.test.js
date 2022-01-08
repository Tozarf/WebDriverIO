import App from "../page-objects/App";
import LoginPage from "../page-objects/pages/LoginPage";

describe("End to end - Login /Logout Flow", () => {
    it("should not login with invalid credentials", async () => {
        App.openHomepage();
        const button = await $("#signin_button");
        await button.waitForExist();
        await button.click();
        // const loginForm = $("#login_form");
        // await loginForm.waitForExist();
        // const userLogin = $("#user_login");
        // await userLogin.setValue("invalid");
        // const password = $("#user_password");
        // await password.setValue("invalid");
        // const submitButton = $("input[type='submit']");
        // submitButton.click();
        await LoginPage.formIsVisible();
        await LoginPage.fillForm("invalid", "invalid");
        await LoginPage.submitForm();

        const error = await $(".alert.alert-error");
        await error.waitForExist();
        await expect(error).toHaveText("Login and/or password are wrong.");
    });
    it("should login with valid credentials", async () => {
        App.openHomepage();
        const button = await $("#signin_button");
        await button.waitForExist();
        await button.click();
        // const loginForm = $("#login_form");
        // await loginForm.waitForExist();
        // const userLogin = $("#user_login");
        // await userLogin.setValue("username");
        // const password = $("#user_password");
        // await password.setValue("password");
        // const submitButton = $("input[type='submit']");
        // await submitButton.click();
        await LoginPage.formIsVisible();
        await LoginPage.fillForm("username", "password");
        await LoginPage.submitForm();
        const navTab = await $(".nav-tabs");
        await navTab.waitForExist();
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
