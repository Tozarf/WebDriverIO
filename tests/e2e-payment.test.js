describe("", () => {
    it("should login into application", async () => {
        browser.url("http://zero.webappsecurity.com/");

        await $("#signin_button").waitForExist();
        await $("#signin_button").click();

        await $("#login_form").waitForExist();
        await $("#user_login").setValue("username");

        await $("#user_password").setValue("password");

        await $("input[type='submit']").click();
    });
    it("should carry out payment", async () => {
        await $("#pay_bills_tab").click();
        const selectPayee = $("#sp_payee");
        await selectPayee.waitForExist();
        await selectPayee.selectByAttribute("value", "apple");
        const selectAccount = $("#sp_account");
        await selectAccount.waitForExist();
        await selectAccount.selectByVisibleText("Loan");
        await $("#sp_amount").setValue("200");
        await $("#sp_date").setValue("2022-01-12");
        await $("#sp_description").setValue("Testing the description");
        await $("#pay_saved_payees").click();
        const message = $("#alert_content");
        await expect(message).toBeDisplayed();
        await expect(message).toHaveText(
            "The payment was successfully submitted."
        );
    });
});
