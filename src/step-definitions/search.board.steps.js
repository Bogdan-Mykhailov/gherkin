'use strict';

const logger = require('../config/logger.config');
const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const BoardsPage = require('../po/pages/boards.page');
const { credentials } = require('../data/credentials');

const boardsPage = new BoardsPage();

Given('the user is on the Trello homepage', async () => {
  await boardsPage.open(credentials.userName);
  logger.info('Homepage was opened');
});

When('the user clicks on the search bar', async () => {
  await boardsPage.header.headerSearchBlockClick();
  logger.info('Clicked on search bar successfully');
});

Then('the user should see a search popup', async () => {
  await browser.waitUntil(async () => {
    return await boardsPage.header.searchBoard.searchBoardPopUp.isDisplayed();
  }, { timeout: 15000 });
  logger.info('Search board popup was opened');
});

When('the user entered the board name', async () => {
  await boardsPage.header.searchBoard.enterSearchingBoardTitle(credentials.searchingBoardTitle);
  logger.info('Board title was entered');
});

Then('the relevant board should appear in the search results', async () => {
  await boardsPage.header.searchBoard.searchResult.waitForDisplayed({ timeout: 15000 });
  await expect(boardsPage.header.searchBoard.searchResult).toBeDisplayed();
  logger.info('Relevant board was find successfully');
});
