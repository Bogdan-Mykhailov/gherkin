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
    return browser.url(`/u/${userName}/boards`);
  }

  async verifyRedirectionToBoardsPage() {
    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl === credentials.boardsPageUrl;
      },
      { timeout: 15000 },
    );
    return await browser.getUrl();
  }
}

module.exports = BoardsPage;
