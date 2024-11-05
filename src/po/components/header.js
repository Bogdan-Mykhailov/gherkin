const CreateBoard = require('./create.board');

class Header {
  constructor() {
    this.createBoard = new CreateBoard();
    this.selectors = {
      createButton: '//button[@data-testid="header-create-menu-button"]',
      accountButton: '//div[@data-testid="header-member-menu-avatar"]',
    };
  }

  get headerCreateButton() {
    return $(this.selectors.createButton);
  }

  get headerAccountButton() {
    return $(this.selectors.accountButton);
  }

  async headerCreateButtonClick() {
    await this.headerCreateButton.click();
  }

  async headerAccountButtonClick() {
    await this.headerAccountButton.click();
  }
}

module.exports = Header;
