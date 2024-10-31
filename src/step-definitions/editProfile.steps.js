'use strict';

const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const { getUpdatedText, getUserNameFromUrl } = require('../utils/helpers');

let userName = '';

Given('the user is logged in to Trello workspace', async () => {
  const currentUrl = await browser.getUrl();
  userName = getUserNameFromUrl(currentUrl);

  await browser.url(`https://trello.com/u/${userName}/boards`);
});

When('the user click on account icon and select Profile and visibility', async () => {
  const accountMenuButton = await $('//div[@data-testid="header-member-menu-avatar"]');
  const profileAndVisibilityButton = await $('//a[@data-testid="account-menu-profile"]');

  await accountMenuButton.click();
  await profileAndVisibilityButton.click();
});

Then('the user navigates to the profile settings', async () => {
  const expectedUrl = `https://trello.com/u/${userName}`;
  const currentUrl = await browser.getUrl();

  await browser.pause(2000);
  expect(currentUrl).toContain(expectedUrl);
});

When('the user update their profile information and click save button', async () => {
  const userNameField = await $('input[id="username"]');
  const bioField = await $('textarea[id="bio"]');
  const saveButton = await $('//button[@type="submit"]');
  const updatedName = getUpdatedText(userName);

  // await userNameField.waitForDisplayed();
  await browser.pause(2000);
  await userNameField.setValue(updatedName);
  await bioField.setValue('awesome fellow');
  await saveButton.click();
});

Then('the changes should be saved successfully, and the user will see an alert', async () => {
  const alert = await $('//span[@class="QMKgZFIlTLiEJN"]');
  await expect(alert).toBeDisplayed({ message: 'Confirmation alert not displayed.' });
});
