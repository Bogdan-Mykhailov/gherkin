'use strict';

const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const RegisterPage = require('../po/pages/register.page');

const registerPage = new RegisterPage();

Given('the user is on the Trello sign-up page', async () => {
  await registerPage.open();
});

When('the user enters a valid email and clicks the \'Sign Up\' button', async () => {
  await registerPage.registerForm.enterValidEmail('bogdan@mailinator.com');
  await registerPage.registerForm.signUpButtonClick();
});

Then('the user should see a "What brings you here today?" title', async () => {
  await registerPage.registerForm.pageHeading.waitForDisplayed({ timeout: 8000 });
  await expect(registerPage.registerForm.pageHeading).toBeDisplayed();
});

When('the user clicks the \'Skip\' button', async () => {
  await registerPage.registerForm.skipButtonClick();
});

Then('the user should see an "It all starts with the board" title', async () => {
  await registerPage.registerForm.createBoardPageTitle.waitForDisplayed({ timeout: 8000 });
  await expect(registerPage.registerForm.createBoardPageTitle).toBeDisplayed();
});

When('the user clicks the \'Skip\' button', async () => {
  await registerPage.registerForm.skipCreateBoardButtonClick();
});

Then('the user should see an "Invite your team" title', async () => {
  await registerPage.registerForm.inviteTeamPageTitle.waitForDisplayed({ timeout: 8000 });
  await expect(registerPage.registerForm.inviteTeamPageTitle).toBeDisplayed();
});

When('the user clicks the \'Skip\' button', async () => {
  await registerPage.registerForm.skipInviteTeamButtonClick();
});

Then('a verification email should be sent to the registered email address', async () => {
  await registerPage.registerForm.confirmationMessage.waitForDisplayed({ timeout: 8000 });
  await expect(registerPage.registerForm.confirmationMessage).toBeDisplayed();
});
