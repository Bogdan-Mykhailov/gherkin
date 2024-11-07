'use strict';

const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const BoardsPage = require('../po/pages/boards.page');
const WorkspaceSettingsPage = require('../po/pages/workspace.settings.page');
const { credentials } = require('../data/credentials');

const boardsPage = new BoardsPage();
const workspaceSettingsPage = new WorkspaceSettingsPage();

Given('the user on Trello boards page', async () => {
  await boardsPage.open(credentials.userName);
});

When('the user press settings button', async () => {
  await boardsPage.settingsButtonClick();
});

Then('the user navigates to the Trello workspace settings page', async () => {
  await expect(await workspaceSettingsPage.verifyRedirectionToWorkspaceSettingsPage())
    .toBe(workspaceSettingsPage.workspacePageUrl);
});

When('the user press pencil icon', async () => {
  await workspaceSettingsPage.organizationDetailForm.editWorkspaceButtonClick();
});

Then('the user should see a organization detail form', async () => {
  await workspaceSettingsPage.organizationDetailForm.detailsForm.waitForDisplayed({ timeout: 8000 });
  await expect(workspaceSettingsPage.organizationDetailForm.detailsForm).toBeDisplayed();
});

When('the user enters a new workspace name and click save button', async () => {
  await workspaceSettingsPage.organizationDetailForm.enterNewWorkspaceName(credentials.updatedWorkspaceName);
  await workspaceSettingsPage.organizationDetailForm.saveButtonClick();
});

Then('the workspace title should be updated', async () => {
  await workspaceSettingsPage.workspacePageTitle.waitForDisplayed({ timeout: 8000 });
  await expect(workspaceSettingsPage.workspacePageTitle).toBeDisplayed();
  await expect(await workspaceSettingsPage.workspacePageTitle.getText()).toBe(credentials.updatedWorkspaceName);
});
