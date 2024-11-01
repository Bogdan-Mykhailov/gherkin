'use strict';

const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const { getUserNameFromUrl } = require('../utils/helpers');

let userName = '';
const boardTitle = 'board';

Given('the user is on the Trello dashboard', async () => {
  const currentUrl = await browser.getUrl();
  userName = getUserNameFromUrl(currentUrl);

  await browser.url(`https://trello.com/u/${userName}/boards`);
});

When('the user clicks on the \'Create\' button', async () => {
  const createMenuButton = await $('//button[@data-testid="header-create-menu-button"]');

  await createMenuButton.click();
});

Then('the user should see a create board options list', async () => {
  const optionsList = await $('div[class="q2PzD_Dkq1FVX3"]');

  await optionsList.waitForDisplayed();
  await expect(optionsList).toBeDisplayed();
});

When('the user clicks on the \'Create board\' button', async () => {
  const createBoardButton = await $('//button[@data-testid="header-create-board-button"]');

  await createBoardButton.waitForClickable({ timeout: 5000 });
  await createBoardButton.click();
});

Then('the user should see create board menu', async () => {
  const createBoardMenu = await $('div[class="q2PzD_Dkq1FVX3 pt-0"]');

  await createBoardMenu.waitForDisplayed({ timeout: 5000 });
  await expect(createBoardMenu).toBeDisplayed();
});

When('the user enters a title for the board and clicks \'Create\' button', async () => {
  const boardTitleField = await $('input[data-testid="create-board-title-input"]');
  const createButton = await $('//button[@data-testid="create-board-submit-button"]');

  await boardTitleField.setValue(boardTitle);
  await createButton.waitForClickable({ timeout: 5000 });
  await createButton.click();
});

Then('the new board should be created and navigated to it', async () => {
  let currentUrl = '';
  let expectedUrl = '';

  await browser.waitUntil(async () => {
    currentUrl = await browser.getUrl();
    const urlParts = currentUrl.split('/');
    const boardId = urlParts[urlParts.indexOf('b') + 1];
    expectedUrl = `https://trello.com/b/${boardId}/${boardTitle}`;

    return currentUrl === expectedUrl;
  }, {
    timeout: 5000,
    timeoutMsg: 'Expected URL not reached after board creation',
  });

  await expect(currentUrl).toBe(expectedUrl);
});
