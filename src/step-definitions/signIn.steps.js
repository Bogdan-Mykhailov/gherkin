'use strict';

const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');

let userName = '';

Given('the user is on the Trello sign-in page', async () => {
  await browser.url('https://trello.com/login');
});

When('the user enters their email and clicks the \'Continue\' button', async () => {
  const emailInput = await $('input[data-testid="username"]');
  const signUpButton = await $('button[id="login-submit"]');

  await emailInput.setValue('babashka80930372542@gmail.com');
  await signUpButton.click();
});

Then('the user should see the password field', async () => {
  const passwordInput = await $('input[data-testid="password"]');
  await expect(passwordInput).toBeDisplayed();
});

When('the user enters their password and clicks the \'Log in\' button', async () => {
  const passwordInput = await $('input[data-testid="password"]');
  const signUpButton = await $('button[id="login-submit"]');
  const testPassword = 'Qwerty!12345';

  await passwordInput.setValue(testPassword);
  await signUpButton.click();
  await browser.pause(5000);
});

Then('the user should be redirected to their Trello home page', async () => {
  const currentUrl = await browser.getUrl();

  const urlParts = currentUrl.split('/');
  userName = urlParts[urlParts.indexOf('u') + 1];

  const expectedUrl = `https://trello.com/u/${userName}/boards`;
  const actualUrl = await browser.getUrl();

  await expect(expectedUrl).toBe(actualUrl);
});
