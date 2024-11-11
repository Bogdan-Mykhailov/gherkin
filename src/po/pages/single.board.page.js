'use strict';

const BasePage = require('./base.page');
const { credentials } = require('../../data/credentials');
const AddListPopUp = require('../components/add.list');
const SidebarMenu = require('../components/sidebar.menu');
const FilterCardsMenu = require('../components/filter.cards.menu');

class SingleBoardPage extends BasePage {
  constructor() {
    super();
    this.actualUrl = '';
    this.expectedUrl = '';
    this.addListPopUp = new AddListPopUp();
    this.sidebarMenu = new SidebarMenu();
    this.filterCardMenu = new FilterCardsMenu();
    this.selectors = {
      filterButton: '//button[@data-testid="filter-popover-button"]',
      assignedItem: '//div[@class="amUfYqLTZOvGsn"]//span[@title="Bogdan Mykhailov (bogdan_mykhailov1)"]',
    };
  }

  get filterButton() {
    return $(this.selectors.filterButton);
  }

  get assignedItems() {
    return $$(this.selectors.assignedItem);
  }

  async open() {
    return browser.url(credentials.singleBoardUrl);
  }

  async verifyBoardCreationAndNavigation() {
    await browser.waitUntil(async () => {
      this.actualUrl = await browser.getUrl();
      const urlParts = this.actualUrl.split('/');
      const boardId = urlParts[urlParts.indexOf('b') + 1];
      this.expectedUrl = `https://trello.com/b/${boardId}/${credentials.boardTitle}`;

      return this.actualUrl === this.expectedUrl;
    }, { timeout: 15000 });
    return { actualUrl: this.actualUrl, expectedUrl: this.expectedUrl };
  }

  async filterButtonClick() {
    return await this.filterButton.click();
  }

  async getAssignedItemsLength() {
    return await this.assignedItems.length;
  }
}

module.exports = SingleBoardPage;
