'use strict';

const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');

Given('the user has a list on a Trello board', async () => {
  const boardUrl = 'https://trello.com/b/ekR1kwK2/board1';
  await browser.url(boardUrl);

  const listItem = await $('//li[@data-testid="list-wrapper"][last()]');
  await listItem.waitForDisplayed();
  await expect(listItem).toBeDisplayed();
});

When('the user clicks on the \'+ Add a card\' button', async () => {
  const addACardButton = await $('//li[@data-testid="list-wrapper"][last()]//button[@data-testid="list-add-card-button"]');

  await addACardButton.waitForClickable();
  // await browser.pause(2000);
  await addACardButton.click();
});

Then('the user should see a new card field and enters a card name', async () => {
  const newCardTitleField = await $('//li[@data-testid="list-wrapper"][last()]//textarea[@data-testid="list-card-composer-textarea"]');

  await newCardTitleField.waitForDisplayed();
  // await browser.pause(2000);
  await expect(newCardTitleField).toBeDisplayed();
  // await browser.pause(2000);
  await newCardTitleField.setValue('new card22');
});

When('the user clicks on the \'Add a card\' button', async () => {
  const addCardButton = await $('//li[@data-testid="list-wrapper"][last()]//button[@data-testid="list-card-composer-add-card-button"]');

  await addCardButton.waitForClickable();
  // await browser.pause(2000);
  await addCardButton.click();
});

Then('the new card should be added to the list', async () => {
  const addedCard = await $('//li[@data-testid="list-wrapper"][last()]//a[@data-testid="card-name"][last()]');

  await addedCard.waitForDisplayed();
  // await browser.pause(4000);
  const actualText = await addedCard.getText();
  await expect(actualText).toBe('new card22');
});
