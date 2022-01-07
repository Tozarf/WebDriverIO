const { short } = require("../lib/timeouts");

describe("Browser Actions", () => {
    it("Inputs", async () => {
        browser.url("https://devexpress.github.io/testcafe/example/");
        const input = $("#developer-name");
        input.waitForExists();
        input.setValue("Tozarf");
        await browser.pause(short);
        input.clearValue();
        await browser.pause(short);
        input.addValue("Tozarf");
        await browser.pause(short);
    });
    it("Click", async () => {
        const buttonPopulate = $("#populate");
        buttonPopulate.waitForExists();
        buttonPopulate.click();
        await browser.pause(short);
    });
    it("Checkbox & Radio Button", async () => {
        browser.url("https://devexpress.github.io/testcafe/example/");
        const radio = $("#linux");
        radio.waitForExist();
        radio.click();
        await browser.pause(short);
        const checkbox = $("#remote-testing");
        checkbox.waitForExist();
        checkbox.click();
        await browser.pause(short);
    });
    it("Select box ", async () => {
        browser.url("https://devexpress.github.io/testcafe/example/");
        const select = $("#preferred-interface");
        select.waitForExist();
        select.selectByVisibleText("JavaScript API");
        await browser.pause(short);
    });
});
