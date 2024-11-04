const CreateBoard = require('./create.board');

class Header {
  constructor() {
    this.createBoard = new CreateBoard();
    this.selectors = {
      createButton: '//button[@data-testid="header-create-menu-button"]',
    };
  }

  get headerCreateButton() {
    return $(this.selectors.createButton);
  }

  async headerCreateButtonClick() {
    await this.headerCreateButton.click();
  }
}

module.exports = Header;
