import App from "../page-objects/App";
import Navbar from "../page-objects/components/Navbar";
import LoginPage from "../page-objects/pages/LoginPage";

describe("End to end - Login /Logout Flow", () => {
    it("should not login with invalid credentials", async () => {
        App.openHomepage();
        await Navbar.clickSignIn();
        await LoginPage.formIsVisible();
        await LoginPage.fillForm("invalid", "invalid");
        await LoginPage.submitForm();
        const message = await LoginPage.error;

        await expect(message).toHaveText("Login and/or password are wrong.");
    });
    it("should login with valid credentials", async () => {
        App.openHomepage();
        await Navbar.clickSignIn();
        await LoginPage.formIsVisible();
        await LoginPage.fillForm("username", "password");
        await LoginPage.submitForm();
        await Navbar.insideNavbarIsVisible();

        await expect(Navbar.insideNavbar).toBeDisplayed();
    });
    it("should logout from app", async () => {
        await Navbar.clickUserIcon();
        await Navbar.clickLogOutButton();
        const signIn = await Navbar.signInButton;
        await signIn.waitForExist();
        await expect(signIn).toBeDisplayed();
    });
});
