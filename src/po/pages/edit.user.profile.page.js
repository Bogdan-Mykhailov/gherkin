const BasePage = require('./base.page');

class EditUserProfilePage extends BasePage {
  constructor(userName) {
    super();
    this.url = `https://trello.com/u/${userName}`;
    this.actualUrl = '';
  }

  async open(userName) {
    return browser.url(`${this.url}/boards`);
  }

  async verifyRedirectionToEditProfilePage() {
    await browser.waitUntil(async () => {
      return this.actualUrl = await browser.getUrl();
    }, { timeout: 15000 });

    return { actualUrl: this.actualUrl, expectedUrl: this.url };
  }
}

module.exports = EditUserProfilePage;
