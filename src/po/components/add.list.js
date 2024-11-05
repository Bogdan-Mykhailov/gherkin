'use strict';

class AddListPopUp {
  constructor() {
    this.selectors = {
      addAListButton: 'button[data-testid="list-composer-button"]',
      listField: '//form[@class="vVqwaYKVgTygrk"]//textarea[@data-testid="list-name-textarea"]',
      addListButton: '//button[@data-testid="list-composer-add-list-button"]',
      createdList: '//li[@data-testid="list-wrapper"][last()]//h2[@data-testid="list-name"][last()]',
    };
  }

  get addAListButton() {
    return $(this.selectors.addAListButton);
  }

  get listField() {
    return $(this.selectors.listField);
  }

  get addListButton() {
    return $(this.selectors.addListButton);
  }

  get createdList() {
    return $(this.selectors.createdList);
  }

  async addAListButtonClick() {
    await this.addAListButton.click();
  }

  async enterListTitle(title) {
    await this.listField.setValue(title);
  }

  async addListButtonClick() {
    await this.addListButton.click();
  }

  async getCreatedListText() {
    return await this.createdList.getText();
  }
}

module.exports = AddListPopUp;
