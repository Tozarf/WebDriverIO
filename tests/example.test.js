const { mobile, tablet, desktop } = require("../lib/devices");
const { short, medium, long } = require("../lib/timeouts");

describe("first steps with wdio", () => {
    it("Load example website", async () => {
        browser.url("http://www.example.com/");

        await expect(browser).toHaveUrl("http://www.example.com/");
        await expect(browser).toHaveTitle("Example Domain");
    });
    it("H1 should be visible", async () => {
        const h1 = $("h1");
        await expect(h1).toBeDisplayed();
    });
    it("P should be visible", async () => {
        const p = $("p");
        await expect(p).toBeDisplayed();
    });
    it("Check link value", async () => {
        const link = $("a");
        await expect(link).toHaveLink("https://www.iana.org/domains/example");
    });
    it("Get Element text", async () => {
        const text = $("h1").getText();
        console.log(text);
        const elementText = $("h1");
        elementText.waitForExist();
        await expect(elementText).toHaveText("Example Domain");
    });
    it("assert attribute", async () => {
        await browser.url("https://devexpress.github.io/testcafe/example/");
        const button = $("#submit-button");
        button.waitForExist();

        await expect(button).toHaveAttrContaining("type", "submit");
    });
    it("Assert Value", async () => {
        const button = $("#populate");
        button.waitForExist();
        await expect(button).toHaveValue("Populate");
    });
    it("Save Screenshot", async () => {
        await browser.saveScreenshot("tozarf-wdio.png");
    });
    it("Change browser viewport", async () => {
        browser.setWindowSize(1650, 1050);
        await browser.pause(short);
    });
    it("Set Mobile View", async () => {
        browser.setWindowSize(mobile[0], mobile[1]);
        await browser.pause(short);
    });
    it("Set Tablet View", async () => {
        browser.setWindowSize(tablet[0], tablet[1]);
        await browser.pause(short);
    });
    it("Set Desktop", async () => {
        browser.setWindowSize(desktop[0], desktop[1]);
        await browser.pause(short);
    });
});
