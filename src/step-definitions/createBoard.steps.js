'use strict';

const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const getUpdatedTitle = require('../utils/helpers');

let userName = '';
let boardTitle = 'board';

Given('the user is on the Trello dashboard', async () => {
  const currentUrl = await browser.getUrl();
  const urlParts = currentUrl.split('/');
  userName = urlParts[urlParts.indexOf('u') + 1];

  await browser.url(`https://trello.com/u/${userName}/boards`);
});

When('the user clicks on the \'Create\' button', async () => {
  const createMenuButton = await $('//button[@data-testid="header-create-menu-button"]');

  await createMenuButton.click();
});

Then('the user should see a create board options list', async () => {
  const optionsList = await $('div[class="q2PzD_Dkq1FVX3"]');

  await expect(optionsList).toBeDisplayed();
});

When('the user clicks on the \'Create board\' button', async () => {
  const createBoardButton = await $('//button[@data-testid="header-create-board-button"]');

  await createBoardButton.click();
});

Then('the user should see create board menu', async () => {
  const createBoardMenu = await $('div[class="q2PzD_Dkq1FVX3 pt-0"]');

  await expect(createBoardMenu).toBeDisplayed();
  await browser.pause(5000);
});

When('the user enters a title for the board and clicks \'Create\' button', async () => {
  const boardTitleField = await $('input[data-testid="create-board-title-input"]');
  const createButton = await $('//button[@data-testid="create-board-submit-button"]');
  boardTitle = getUpdatedTitle(boardTitle);

  await boardTitleField.setValue(boardTitle);
  await createButton.click();
  await browser.pause(5000);
});

Then('the new board should be created and navigated to it', async () => {
  let boardId = '';
  const currentUrl = await browser.getUrl();
  const urlParts = currentUrl.split('/');
  boardId = urlParts[urlParts.indexOf('b') + 1];

  const expectedUrl = `https://trello.com/b/${boardId}/${boardTitle}`;
  await expect(expectedUrl).toBe(currentUrl);
});
