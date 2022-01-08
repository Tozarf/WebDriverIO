describe("E2E - Transactions ", () => {
    it("should login into the application", async () => {
        browser.url("http://zero.webappsecurity.com/");

        await $("#signin_button").waitForExist();
        await $("#signin_button").click();

        await $("#login_form").waitForExist();
        await $("#user_login").setValue("username");

        await $("#user_password").setValue("password");

        await $("input[type='submit']").click();
    });
    it("should carry out transaction", async () => {
        await $("#account_activity_tab > a").waitForExist();
        await $("#account_activity_tab > a").click();
        await $("#tabs > ul > li:nth-child(2) > a").waitForExist();
        await $("#tabs > ul > li:nth-child(2) > a").click();
        await $("#aa_description").setValue("A testing description");
        await $("#aa_fromDate").setValue("2021-11-09");
        await $("#aa_toDate").setValue("2021-12-23");
        await $("#aa_fromAmount").setValue("100");
        await $("#aa_toAmount").setValue("10000");
        const selectType = $("#aa_type");
        await selectType.waitForExist();
        await selectType.selectByVisibleText("Deposit");
        await $('button[type="submit"]').click();
        const transactions = $("#filtered_transactions_for_account");
        await transactions.waitForExist();
        const message = $(".well");
        await expect(message).toHaveText("No results.");
        await expect(transactions).toBeDisplayed();
    });
});
