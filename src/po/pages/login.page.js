'use strict';

const BasePage = require('./base.page');
const LoginForm = require('../components/login.form');

class LoginPage extends BasePage {

  constructor() {
    super();
    this.url = 'https://trello.com/login';
    this.loginForm = new LoginForm();
  }

  async open() {
    await super.open(this.url);
  }
}

module.exports = LoginPage;
