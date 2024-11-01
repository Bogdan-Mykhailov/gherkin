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
  userName = await getUserNameFromUrl(currentUrl);

  await browser.url(`https://trello.com/u/${userName}/boards`);
});

When('the user click on account icon and select Profile and visibility', async () => {
  const accountMenuButton = await $('//div[@data-testid="header-member-menu-avatar"]');
  const profileAndVisibilityButton = await $('//a[@data-testid="account-menu-profile"]');

  await accountMenuButton.waitForClickable({ timeout: 5000 });
  await accountMenuButton.click();
  await profileAndVisibilityButton.waitForClickable({ timeout: 5000 });
  await profileAndVisibilityButton.click();
});

Then('the user navigates to the profile settings', async () => {
  const expectedUrl = `https://trello.com/u/${userName}`;
  let currentUrl = '';

  await browser.waitUntil(async () => {
    currentUrl = await browser.getUrl();
    return currentUrl === expectedUrl;
  }, { timeout: 5000 });

  await expect(currentUrl).toBe(expectedUrl);
});

When('the user update their profile information and click save button', async () => {
  const userNameField = await $('input[id="username"]');
  const bioField = await $('textarea[id="bio"]');
  const saveButton = await $('//button[@type="submit"]');
  const updatedName = getUpdatedText(userName);

  await userNameField.waitForEnabled({ timeout: 5000 });
  await userNameField.setValue(updatedName);
  await bioField.waitForEnabled({ timeout: 5000 });
  await bioField.setValue('awesome fellow');
  await saveButton.waitForClickable({ timeout: 5000 });
  await saveButton.click();
});

Then('the changes should be saved successfully, and the user will see an alert', async () => {
  const alert = await $('//span[@class="QMKgZFIlTLiEJN"]');

  await alert.waitForDisplayed({ timeout: 5000 });
  await expect(alert).toBeDisplayed();
});
