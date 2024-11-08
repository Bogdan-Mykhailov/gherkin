'use strict';

const BasePage = require('./base.page');
const LoginForm = require('../components/login.form');

class LoginPage extends BasePage {

  constructor() {
    super();
    this.path = '/login';
    this.loginForm = new LoginForm();
  }

  async open() {
    await super.open(this.path);
  }
}

module.exports = LoginPage;
