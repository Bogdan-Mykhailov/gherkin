const BasePage = require('./base.page');
const { credentials } = require('../../data/credentials');

class BoardsPage extends BasePage {
  constructor() {
    super();
    this.selectors = {
      settingsButton: '//a[@data-testid="home-team-settings-tab"]',
    };
  }

  get settingsButton() {
    return $(this.selectors.settingsButton);
  }

  async settingsButtonClick() {
    return await this.settingsButton.click();
  }

  async open(userName) {
    return browser.url(`https://trello.com/u/${userName}/boards`);
  }

  async verifyRedirectionToBoardsPage() {
    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl === credentials.boardsPageUrl;
      },
      {
        timeout: 8000,
        timeoutMsg: `Expected to be redirected to ${credentials.boardsPageUrl} but was not.`,
      },
    );
    return await browser.getUrl();
  }
}

module.exports = BoardsPage;
