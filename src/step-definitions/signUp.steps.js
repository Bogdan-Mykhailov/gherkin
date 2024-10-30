'use strict';

const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');

Given('the user is on the Trello sign-up page', async () => {
  await browser.url('https://id.atlassian.com/signup');
});

When('the user enters a valid email and clicks the \'Sign Up\' button', async () => {
  const emailInput = await $('input[id="email"]');
  const signUpButton = await $('button[id="signup-submit"]');

  await emailInput.setValue('bogdan@mailinator.com');
  await signUpButton.click();
});

Then('the user should see a "What brings you here today?" title', async () => {
  const pageHeading = await $('div=What brings you here today?');
  await expect(pageHeading).toBeDisplayed();
});

When('the user clicks the \'Skip\' button', async () => {
  const skipButton = await $('button[class="y3qsM1P5OoRSsX bxgKMAm3lq5BpA SEj5vUdI3VvxDc"]');
  await skipButton.click();
});

Then('the user should see an "It all starts with the board" title', async () => {
  const pageHeading = await $('h1=It all starts with the board');
  await expect(pageHeading).toBeDisplayed();
});

When('the user clicks the \'Skip\' button', async () => {
  const skipButton = await $('button[data-testid="name-board-skip-button"]');
  await skipButton.click();
});

Then('the user should see an "Invite your team" title', async () => {
  const pageHeading = await $('h1=Invite your team');
  await expect(pageHeading).toBeDisplayed();
});

When('the user clicks the \'Skip\' button', async () => {
  const skipButton = await $('button[data-testid="invite-skip-button"]');
  await skipButton.click();
});

Then('a verification email should be sent to the registered email address', async () => {
  const confirmationMessage = await $('h2=Let\'s verify your email');
  await expect(confirmationMessage).toBeDisplayed();
});
