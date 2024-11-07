'use strict';

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
});

When('the user clicks on the search bar', async () => {
  await boardsPage.header.headerSearchBlockClick();
});

Then('the user should see a search popup', async () => {
  await browser.waitUntil(async () => {
    return await boardsPage.header.searchBoard.searchBoardPopUp.isDisplayed();
  }, {
    timeout: 8000,
    timeoutMsg: 'Search popup did not appear in Firefox',
  });
});

When('the user entered the board name', async () => {
  await boardsPage.header.searchBoard.searchField.setValue(credentials.searchingBoardTitle);
});

Then('the relevant board should appear in the search results', async () => {
  await boardsPage.header.searchBoard.searchResult.waitForDisplayed({ timeout: 8000 });
  await expect(boardsPage.header.searchBoard.searchResult).toBeDisplayed();
});
