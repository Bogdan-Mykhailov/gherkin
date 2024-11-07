'use strict';

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
  await singleBoardPage.addListPopUp.createdList.waitForDisplayed({ timeout: 8000 });
  await expect(singleBoardPage.addListPopUp.createdList).toBeDisplayed();
});

When('the user clicks on the \'+ Add a card\' button', async () => {
  await singleBoardPage.addListPopUp.addACardButtonClick();
});

Then('the user should see a new card field', async () => {
  await singleBoardPage.addListPopUp.newCardTitleField.waitForDisplayed({ timeout: 8000 });
  await expect(singleBoardPage.addListPopUp.newCardTitleField).toBeDisplayed();
});

When('the user enters a card name and clicks on the \'Add a card\' button', async () => {
  await singleBoardPage.addListPopUp.enterNewCardTitle(credentials.cardTitle);
  await singleBoardPage.addListPopUp.addCardButtonClick();
});

Then('the new card should be added to the list', async () => {
  await singleBoardPage.addListPopUp.addedCard.waitForDisplayed({ timeout: 8000 });
  await expect(await singleBoardPage.addListPopUp.addedCard.getText()).toBe(credentials.cardTitle);
});
