'use strict';

const LoginPage = require('../po/pages/login.page');
const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const { credentials } = require('../data/credentials');
const BoardsPage = require('../po/pages/boards.page');

const loginPage = new LoginPage();
const boardsPage = new BoardsPage();

Given('the user is on the Trello sign-in page', async () => {
  await loginPage.open();
});

When('the user enters their email and clicks the \'Continue\' button', async () => {
  await loginPage.loginForm.enterEmail(credentials.email);
  await loginPage.loginForm.clickLoginButton();
});

Then('the user should see the password field', async () => {
  await loginPage.loginForm.passwordInputField.waitForDisplayed({ timeout: 8000 });
  await expect(loginPage.loginForm.passwordInputField).toBeDisplayed();
});

When('the user enters their password and clicks the \'Log in\' button', async () => {
  await loginPage.loginForm.enterPassword(credentials.password);
  await loginPage.loginForm.clickLoginButton();
});

Then('the user should be redirected to their Trello boards page', async () => {
  await expect(await boardsPage.verifyRedirectionToBoardsPage()).toBe(credentials.boardsPageUrl);
});
