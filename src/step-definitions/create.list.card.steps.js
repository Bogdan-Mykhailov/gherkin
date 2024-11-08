'use strict';

const logger = require('../config/logger.config');
const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const SingleBoardPage = require('../po/pages/single.board.page');
const { credentials } = require('../data/credentials');

const singleBoardPage = new SingleBoardPage();

Given('the user has a list on a Trello board', async () => {
  await singleBoardPage.open();
  await singleBoardPage.addListPopUp.createdList.waitForDisplayed({ timeout: 15000 });
  await expect(singleBoardPage.addListPopUp.createdList).toBeDisplayed();
  logger.info('List on selected board was presented');
});

When('the user clicks on the \'+ Add a card\' button', async () => {
  await singleBoardPage.addListPopUp.addACardButtonClick();
  logger.info('+ Add a card button was clicked');
});

Then('the user should see a new card field', async () => {
  await singleBoardPage.addListPopUp.newCardTitleField.waitForDisplayed({ timeout: 15000 });
  await expect(singleBoardPage.addListPopUp.newCardTitleField).toBeDisplayed();
  logger.info('New card field was presented');
});

When('the user enters a card name and clicks on the \'Add a card\' button', async () => {
  await singleBoardPage.addListPopUp.enterNewCardTitle(credentials.cardTitle);
  await singleBoardPage.addListPopUp.addCardButtonClick();
  logger.info('Card name was entered and Add a card button clicked');
});

Then('the new card should be added to the list', async () => {
  await singleBoardPage.addListPopUp.addedCard.waitForDisplayed({ timeout: 15000 });
  await expect(await singleBoardPage.addListPopUp.addedCard.getText()).toBe(credentials.cardTitle);
  logger.info('Card was added to the list');
});
