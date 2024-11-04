class LoginForm {
  constructor() {
    this.selectors = {
      emailInput: 'input[data-testid="username"]',
      signUpButton: 'button[id="login-submit"]',
      passwordInput: 'input[data-testid="password"]',
    };
  }

  get emailInputField() {
    return $(this.selectors.emailInput);
  }

  get passwordInputField() {
    return $(this.selectors.passwordInput);
  }

  get loginButton() {
    return $(this.selectors.signUpButton);
  }

  async enterEmail(email) {
    await this.emailInputField.setValue(email);
  }

  async enterPassword(password) {
    await this.passwordInputField.setValue(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
}

module.exports = LoginForm;
