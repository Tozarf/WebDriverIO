import Base from "../Base";

class LoginPage extends Base {
    get loginForm() {
        return $("#login_form");
    }
    get userNameInput() {
        return $("#user_login");
    }
    get passwordInput() {
        return $("#user_password");
    }
    get submitButton() {
        return $("input[type='submit']");
    }

    async formIsVisible() {
        await this.loginForm.waitForExist();
    }
    async fillForm(username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }
    async submitForm() {
        await this.submitButton.click();
    }
}

export default new LoginPage();