'use strict';

class AddListPopUp {
  constructor() {
    this.selectors = {
      addAListButton: 'button[data-testid="list-composer-button"]',
      listField: '//form[@class="vVqwaYKVgTygrk"]//textarea[@data-testid="list-name-textarea"]',
      addListButton: '//button[@data-testid="list-composer-add-list-button"]',
      createdList: '//li[@data-testid="list-wrapper"][last()]//h2[@data-testid="list-name"][last()]',
      addACardButton: '//li[@data-testid="list-wrapper"][last()]//button[@data-testid="list-add-card-button"]',
      newCardTitleField: '//li[@data-testid="list-wrapper"][last()]//textarea[@data-testid="list-card-composer-textarea"]',
      addCardButton: '//li[@data-testid="list-wrapper"][last()]//button[@data-testid="list-card-composer-add-card-button"]',
      addedCard: '//li[@data-testid="list-wrapper"][last()]//a[@data-testid="card-name"][last()]',
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

  get addACardButton() {
    return $(this.selectors.addACardButton);
  }

  get newCardTitleField() {
    return $(this.selectors.newCardTitleField);
  }

  get addCardButton() {
    return $(this.selectors.addCardButton);
  }

  get addedCard() {
    return $(this.selectors.addedCard);
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

  async addACardButtonClick() {
    return await this.addACardButton.click();
  }

  async enterNewCardTitle(cardTitle) {
    return await this.newCardTitleField.setValue(cardTitle);
  }

  async addCardButtonClick() {
    return this.addCardButton.click();
  }
}

module.exports = AddListPopUp;
