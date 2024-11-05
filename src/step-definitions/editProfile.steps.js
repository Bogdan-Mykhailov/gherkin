'use strict';

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
});

When('the user click on account icon', async () => {
  await editProfile.header.headerAccountButtonClick();
});

Then('the user should see a account menu', async () => {
  await editProfile.accountMenu.accountMenu.waitForDisplayed({ timeout: 8000 });
  await expect(editProfile.accountMenu.accountMenu).toBeDisplayed();

});

When('the user click on Profile and visibility button', async () => {
  await editProfile.accountMenu.profileAndVisibilityButtonClick();
});

Then('the user navigates to the profile settings', async () => {
  const { actualUrl, expectedUrl } = editProfile.verifyRedirectionToEditProfilePage();
  await expect(actualUrl).toBe(expectedUrl);
});

When('the user update their profile information and click save button', async () => {
  await editProfile.accountMenu.updateUserName(credentials.userNameForUpdate);
  await editProfile.accountMenu.updateUserBio(credentials.userBio);
  await editProfile.accountMenu.saveButtonClick();

});

Then('the changes should be saved successfully, and the user will see an alert', async () => {
  await editProfile.accountMenu.alert.waitForDisplayed({ timeout: 8000 });
  await expect(editProfile.accountMenu.alert).toBeDisplayed();

  await editProfile.accountMenu.returnPreviousUserName(credentials.userName);
  await editProfile.accountMenu.saveButtonClick();
});
