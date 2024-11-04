'use strict';

const BasePage = require('./base.page');
const { credentials } = require('../../data/credentials');

class SingleBoardPage extends BasePage {
  constructor() {
    super();
    this.actualUrl = '';
    this.expectedUrl = '';
  }

  async verifyBoardCreationAndNavigation() {
    await browser.waitUntil(async () => {
      this.actualUrl = await browser.getUrl();
      const urlParts = this.actualUrl.split('/');
      const boardId = urlParts[urlParts.indexOf('b') + 1];
      this.expectedUrl = `https://trello.com/b/${boardId}/${credentials.boardTitle}`;

      return this.actualUrl === this.expectedUrl;
    }, {
      timeout: 8000,
      timeoutMsg: 'Expected URL not reached after board creation',
    });
    return { actualUrl: this.actualUrl, expectedUrl: this.expectedUrl };
  }
}

module.exports = SingleBoardPage;