'use strict';

const logger = require('../config/logger.config');
const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const EditUserProfilePage = require('../po/pages/edit.user.profile.page');
const { credentials } = require('../data/credentials');

const editProfile = new EditUserProfilePage();

Given('the user on the Trello boards page', async () => {
  await editProfile.open(credentials.userName);
  logger.info('Boards page was presented');
});

When('the user click on account icon', async () => {
  await editProfile.header.headerAccountButtonClick();
  logger.info('Edit account icon was clicked');
});

Then('the user should see a account menu', async () => {
  await editProfile.header.accountMenu.accountMenu.waitForDisplayed({ timeout: 15000 });
  await expect(editProfile.header.accountMenu.accountMenu).toBeDisplayed();
  logger.info('Account menu was presented');
});

When('the user click on Profile and visibility button', async () => {
  await editProfile.header.accountMenu.profileAndVisibilityButtonClick();
  logger.info('Profile and visibility button was clicked');
});

Then('the user navigates to the profile settings', async () => {
  const { actualUrl, expectedUrl } = editProfile.verifyRedirectionToEditProfilePage();
  await expect(actualUrl).toBe(expectedUrl);
  logger.info('Successfully navigated to the profile settings page');
});

When('the user update their profile information and click save button', async () => {
  await editProfile.header.accountMenu.updateUserName(credentials.userNameForUpdate);
  await editProfile.header.accountMenu.updateUserBio(credentials.userBio);
  await editProfile.header.accountMenu.saveButtonClick();
  logger.info('User info was updated and saved');
});

Then('the changes should be saved successfully, and the user will see an alert', async () => {
  await editProfile.header.accountMenu.alert.waitForDisplayed({ timeout: 15000 });
  await expect(editProfile.header.accountMenu.alert).toBeDisplayed();
  await editProfile.header.accountMenu.returnPreviousUserName(credentials.userName);
  await editProfile.header.accountMenu.saveButtonClick();
  logger.info('Changes was saved and alert was presented');
  logger.info('User name was return to previous version');
});
