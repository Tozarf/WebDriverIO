describe("E2E Test - Currency Exchange", () => {
    it("should log into application", async () => {
        browser.url("http://zero.webappsecurity.com/");

        await $("#signin_button").waitForExist();
        await $("#signin_button").click();

        await $("#login_form").waitForExist();
        await $("#user_login").setValue("username");

        await $("#user_password").setValue("password");

        await $("input[type='submit']").click();
    });
    it("should make currency exchange", async () => {
        await $("#pay_bills_tab").waitForExist();
        await $("#pay_bills_tab").click();
        await $("#tabs > ul > li:nth-child(3) > a").waitForExist();
        await $("#tabs > ul > li:nth-child(3) > a").click();
        const currencySelect = $("#pc_currency");
        await currencySelect.waitForExist();
        currencySelect.selectByAttribute("value", "GBP");
        await $("#pc_amount").setValue("500");
        await $("#pc_inDollars_true").click();
        await $("#purchase_cash").click();
        const message = $("#alert_content");

        await expect(message).toBeDisplayed();
        await expect(message).toHaveText(
            "Foreign currency cash was successfully purchased."
        );
    });
});
