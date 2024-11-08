'use strict';

const logger = require('../config/logger.config');
const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const { credentials } = require('../data/credentials');
const SingleBoardPage = require('../po/pages/single.board.page');

const singleBoardPage = new SingleBoardPage();

Given('the user is viewing a specific Trello board', async () => {
  await singleBoardPage.open();
  logger.info('Correct bord was verified');
});

When('the user clicks on the \'+ Add List\' button', async () => {
  await singleBoardPage.addListPopUp.addAListButtonClick();
  logger.info('+ Add List button was clicked');
});

Then('the user should see list name field', async () => {
  await singleBoardPage.addListPopUp.listField.waitForDisplayed({ timeout: 15000 });
  await expect(singleBoardPage.addListPopUp.listField).toBeDisplayed();
  logger.info('List name field was displayed');
});

When('the user enters a list name and clicks on the \'Add list\' button', async () => {
  await singleBoardPage.addListPopUp.enterListTitle(credentials.listTitle);
  await singleBoardPage.addListPopUp.addListButtonClick();
  logger.info('List name was entered and Add list button was clicked');
});

Then('the new list should appear on the board', async () => {
  await singleBoardPage.addListPopUp.createdList.waitForDisplayed({ timeout: 15000 });
  await expect(singleBoardPage.addListPopUp.createdList).toBeDisplayed();
  await expect(await singleBoardPage.addListPopUp.getCreatedListText()).toBe(credentials.listTitle);
  logger.info('New list was created');
});
