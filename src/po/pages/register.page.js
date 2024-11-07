const BasePage = require('./base.page');
const RegisterForm = require('../components/register.form');

class RegisterPage extends BasePage {
  constructor() {
    super();
    this.url = 'https://id.atlassian.com/signup';
    this.registerForm = new RegisterForm();
  }

  async open() {
    await super.open(this.url);
  }
}

module.exports = RegisterPage;
