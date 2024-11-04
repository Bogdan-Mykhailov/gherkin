'use strict';

const BoardsPage = require('../po/pages/boards.page');
const SingleBoardPage = require('../po/pages/single.board.page');
const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const { credentials } = require('../data/credentials');

const boardsPage = new BoardsPage();
const singleBoardPage = new SingleBoardPage();

Given('the user is on the Trello dashboard', async () => {
  await boardsPage.open(credentials.userName);
});

When('the user clicks on the \'Create\' button', async () => {
  await boardsPage.header.headerCreateButtonClick();
});

Then('the user should see a create board options list', async () => {
  await boardsPage.header.createBoard.optionsList.waitForDisplayed({ timeout: 5000 });
  await expect(boardsPage.header.createBoard.optionsList).toBeDisplayed();
});

When('the user clicks on the \'Create board\' button', async () => {
  await boardsPage.header.createBoard.createBoardButtonClick();
});

Then('the user should see create board menu', async () => {
  await boardsPage.header.createBoard.createBoardMenu.waitForDisplayed({ timeout: 5000 });
  await expect(boardsPage.header.createBoard.createBoardMenu).toBeDisplayed();
});

When('the user enters a title for the board and clicks \'Create\' button', async () => {
  await boardsPage.header.createBoard.enterTheBoardTitle(credentials.boardTitle);
  await boardsPage.header.createBoard.createButtonClick();
});

Then('the new board should be created and navigated to it', async () => {
  const { actualUrl, expectedUrl } = await singleBoardPage.verifyBoardCreationAndNavigation();
  await expect(actualUrl).toBe(expectedUrl);
});
