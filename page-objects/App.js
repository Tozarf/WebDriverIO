class App {
    openHomepage() {
        browser.url("http://zero.webappsecurity.com/");
    }
    openLoginPage() {
        browser.url("http://zero.webappsecurity.com/login.html");
    }
    openFeedback() {
        browser.url("http://zero.webappsecurity.com/feedback.html");
    }
}
export default new App();
