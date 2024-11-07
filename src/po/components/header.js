const CreateBoardPopUp = require('./create.board');
const SearchBoardPopUp = require('./search.board');
const AccountMenu = require('./account.menu');

class Header {
  constructor() {
    this.createBoard = new CreateBoardPopUp();
    this.searchBoard = new SearchBoardPopUp();
    this.accountMenu = new AccountMenu();
    this.selectors = {
      createButton: '//button[@data-testid="header-create-menu-button"]',
      accountButton: '//div[@data-testid="header-member-menu-avatar"]',
      searchBlock: '//div[@class="hQdzCqwE1c7MY1"]',
    };
  }

  get headerCreateButton() {
    return $(this.selectors.createButton);
  }

  get headerAccountButton() {
    return $(this.selectors.accountButton);
  }

  get headerSearchBlock() {
    return $(this.selectors.searchBlock);
  }

  async headerCreateButtonClick() {
    await this.headerCreateButton.click();
  }

  async headerAccountButtonClick() {
    await this.headerAccountButton.click();
  }
  async headerSearchBlockClick() {
    await this.headerSearchBlock.click();
  }
}

module.exports = Header;
