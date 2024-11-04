const Header = require('../components/header');

class BasePage {
  constructor() {
    this.header = new Header();
  }

  async open(path) {
    await browser.url(path);
  }
}

module.exports = BasePage;
