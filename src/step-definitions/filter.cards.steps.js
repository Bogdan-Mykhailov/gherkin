'use strict';

const logger = require('../config/logger.config');
const {
  Given,
  When,
  Then,
} = require('@wdio/cucumber-framework');
const SingleBoardPage = require('../po/pages/single.board.page');

const singleBoardPage = new SingleBoardPage();

Given('the user is on the test board page', async () => {
  await singleBoardPage.open();
  logger.info('Selected board was opened');
});

When('the user clicks the \'Filters\' button', async () => {
  await singleBoardPage.filterButtonClick();
  logger.info('Filters button was clicked');
});

Then('the user sees the filters menu', async () => {
  await singleBoardPage.filterCardMenu.filterMenu.waitForDisplayed({ timeout: 15000 });
  await expect(singleBoardPage.filterCardMenu.filterMenu).toBeDisplayed();
  logger.info('The filters menu was presented');
});

When('the user selects the \'Cards assigned to me\' checkbox', async () => {
  await singleBoardPage.filterCardMenu.assignedToMeCheckboxClick();
  logger.info('Checkbox was clicked');
});

Then('the user sees only the cards assigned to them', async () => {
  await expect(await singleBoardPage.getAssignedItemsLength()).toEqual(2);
  logger.info('Cards assigned to user were successfully presented');
});
