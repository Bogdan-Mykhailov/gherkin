'use strict';

const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');

const EMAIL = 'babashka80930372542@gmail.com';
const PASSWORD = 'Qwerty!12345';

Given('the user is on the Trello sign-in page', async () => {
  await browser.url('https://trello.com/login');
});

When('the user enters their email and clicks the \'Continue\' button', async () => {
  const emailInput = await $('input[data-testid="username"]');
  const signUpButton = await $('button[id="login-submit"]');

  await emailInput.setValue(EMAIL);
  await signUpButton.click();
});

Then('the user should see the password field', async () => {
  const passwordInput = await $('input[data-testid="password"]');

  await passwordInput.waitForDisplayed({ timeout: 5000 });
  await expect(passwordInput).toBeDisplayed();
});

When('the user enters their password and clicks the \'Log in\' button', async () => {
  const passwordInput = await $('input[data-testid="password"]');
  const signUpButton = await $('button[id="login-submit"]');

  await passwordInput.waitForEnabled({ timeout: 5000 });
  await passwordInput.setValue(PASSWORD);
  await signUpButton.waitForClickable({ timeout: 5000 });
  await signUpButton.click();
});

Then('the user should be redirected to their Trello home page', async () => {
  const expectedUrl = 'https://trello.com/u/bogdan_mykhailov1/boards';
  let actualUrl = '';

  await browser.waitUntil(
    async () => {
      actualUrl = await browser.getUrl();
      return actualUrl === expectedUrl;
    },
    { timeout: 5000 },
  );

  await expect(actualUrl).toBe(expectedUrl);
});
