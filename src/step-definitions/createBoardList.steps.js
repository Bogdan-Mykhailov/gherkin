'use strict';

const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const { getUpdatedText } = require('../utils/helpers');

let listTitle = '';

Given('the user is viewing a specific Trello board', async () => {
  const boardUrl = 'https://trello.com/b/ekR1kwK2/board1';

  await browser.url(boardUrl);
});

When('the user clicks on the \'+ Add List\' button', async () => {
  const addListButton = await $('button[data-testid="list-composer-button"]');

  await addListButton.waitForClickable();
  await addListButton.click();
});

Then('the user should see list name field', async () => {
  const listField = await $('//form[@class="vVqwaYKVgTygrk"]//textarea[@data-testid="list-name-textarea"]');

  await listField.waitForDisplayed();
  // await browser.pause(2000);
  await expect(listField).toBeDisplayed();
});

When('the user enters a list name and clicks on the \'Add list\' button', async () => {
  const listField = await $('//form[@class="vVqwaYKVgTygrk"]//textarea[@data-testid="list-name-textarea"]');
  const addListButton = await $('//button[@data-testid="list-composer-add-list-button"]');

  listTitle = getUpdatedText('new list');
  await browser.pause(2000);
  await listField.setValue(listTitle);
  await addListButton.waitForClickable();
  await addListButton.click();
});

Then('the new list should appear on the board', async () => {
  const currentListItem = await $('(//li[@data-testid="list-wrapper"][last()]//h2[@data-testid="list-name"][last()])');
  const actualText = await currentListItem.getText();

  await expect(actualText).toBe(listTitle);
});
