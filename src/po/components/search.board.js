class SearchBoardPopUp {
  constructor() {
    this.selectors = {
      searchBoardPopUp: 'div[data-test-id="search-dialog-dialog-wrapper"]',
      searchField: 'input[data-test-id="search-dialog-input"]',
      searchResult: '//div[@data-test-id="search-dialog-dialog-wrapper"]//span[contains(text(), "board4")]',
    };
  }

  get searchBoardPopUp() {
    return $(this.selectors.searchBoardPopUp);
  }

  get searchField() {
    return $(this.selectors.searchField);
  }

  get searchResult() {
    return $(this.selectors.searchResult);
  }

  async enterSearchingBoardTitle(boardTitle) {
    return await this.searchField.setValue(boardTitle);
  }
}

module.exports = SearchBoardPopUp;
