const BasePage = require('./base.page');
const AccountMenu = require('../components/account.menu');

class EditUserProfilePage extends BasePage {
  constructor(userName) {
    super();
    this.url = `https://trello.com/u/${userName}`;
    this.actualUrl = '';
    this.accountMenu = new AccountMenu();
  }

  async open(userName) {
    return browser.url(`https://trello.com/u/${userName}/boards`);
  }

  async verifyRedirectionToEditProfilePage() {
    await browser.waitUntil(async () => {
      return this.actualUrl = await browser.getUrl();
    }, { timeout: 8000 });

    return { actualUrl: this.actualUrl, expectedUrl: this.url };
  }
}

module.exports = EditUserProfilePage;
