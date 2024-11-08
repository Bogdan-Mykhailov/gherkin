class CreateBoardPopUp {
  constructor() {
    this.selectors = {
      createBoardButton: '//button[@data-testid="header-create-board-button"]',
      optionsList: '//nav[@class="IfckxJ5PbpJuxT"]',
      boardTitleField: '//input[@data-testid="create-board-title-input"]',
      createButton: '//button[@data-testid="create-board-submit-button"]',
      createBoardMenu: '//div[@class="q2PzD_Dkq1FVX3 pt-0"]',
    };
  }

  get optionsList() {
    return $(this.selectors.optionsList);
  }

  get createBoardButton() {
    return $(this.selectors.createBoardButton);
  }

  get createBoardMenu() {
    return $(this.selectors.createBoardMenu);
  }

  get boardTitleField() {
    return $(this.selectors.boardTitleField);
  }

  get createButton() {
    return $(this.selectors.createButton);
  }

  async createBoardButtonClick() {
    return this.createBoardButton.click();
  }

  async enterTheBoardTitle(board) {
    return this.boardTitleField.setValue(board);
  }

  async createButtonClick() {
    return this.createButton.click();
  }
}

module.exports = CreateBoardPopUp;
