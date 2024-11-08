'use strict';

const logger = require('../config/logger.config');
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
  logger.info('Correct page was opened');
});

When('the user clicks on the \'Create\' button', async () => {
  await boardsPage.header.headerCreateButtonClick();
  logger.info('Create button was clicked');
});

Then('the user should see a create board options list', async () => {
  await boardsPage.header.createBoard.optionsList.waitForDisplayed({ timeout: 15000 });
  await expect(boardsPage.header.createBoard.optionsList).toBeDisplayed();
  logger.info('Board option list was presented');
});

When('the user clicks on the \'Create board\' button', async () => {
  await boardsPage.header.createBoard.createBoardButtonClick();
  logger.info('Create board button was clicked');
});

Then('the user should see create board menu', async () => {
  await boardsPage.header.createBoard.createBoardMenu.waitForDisplayed({ timeout: 15000 });
  await expect(boardsPage.header.createBoard.createBoardMenu).toBeDisplayed();
  logger.info('Create board menu was presented');
});

When('the user enters a title for the board and clicks \'Create\' button', async () => {
  await boardsPage.header.createBoard.enterTheBoardTitle(credentials.boardTitle);
  await boardsPage.header.createBoard.createButtonClick();
  logger.info('Title for board was entered and Create button clicked');
});

Then('the new board should be created and navigated to it', async () => {
  const { actualUrl, expectedUrl } = await singleBoardPage.verifyBoardCreationAndNavigation();
  await expect(actualUrl).toBe(expectedUrl);
  logger.info('New board created and navigated on it');
});
