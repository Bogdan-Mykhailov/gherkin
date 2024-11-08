'use strict';

const { config } = require('../../../wdio.conf');
const BasePage = require('./base.page');
const { credentials } = require('../../data/credentials');
const AddListPopUp = require('../components/add.list');

class SingleBoardPage extends BasePage {
  constructor() {
    super();
    this.actualUrl = '';
    this.expectedUrl = '';
    this.addListPopUp = new AddListPopUp();
  }

  async open() {
    return browser.url(credentials.singleBoardUrl);
  }

  async verifyBoardCreationAndNavigation() {
    await browser.waitUntil(async () => {
      this.actualUrl = await browser.getUrl();
      const urlParts = this.actualUrl.split('/');
      const boardId = urlParts[urlParts.indexOf('b') + 1];
      this.expectedUrl = `${config.baseUrl}/b/${boardId}/${credentials.boardTitle}`;

      return this.actualUrl === this.expectedUrl;
    }, { timeout: 15000 });
    return { actualUrl: this.actualUrl, expectedUrl: this.expectedUrl };
  }
}

module.exports = SingleBoardPage;
