'use strict';

const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const { getUserNameFromUrl } = require('../utils/helpers');

let userName = '';

Given('the user is on the Trello homepage', async () => {
  const currentUrl = await browser.getUrl();
  userName = getUserNameFromUrl(currentUrl);

  await browser.url(`https://trello.com/u/${userName}/boards`);
});

When('the user clicks on the search bar and entered the board name', async () => {
  const searchBlock = await $('//div[@class="hQdzCqwE1c7MY1"]');
  const searchField = await $('input[data-test-id="search-dialog-input"]');
  await searchBlock.click();
  await searchField.setValue('board4');
  await browser.pause(2000);
});

Then('the relevant board should appear in the search results', async () => {
  const searchResult = await $('//div[@data-test-id="search-dialog-dialog-wrapper"]//span[contains(text(), "board4")]');

  await expect(searchResult).toBeDisplayed();
});

