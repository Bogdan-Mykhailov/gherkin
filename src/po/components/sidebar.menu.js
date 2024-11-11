'use strict';

class SidebarMenu {
  constructor() {
    this.selectors = {
      listItem: '//li[@class="mlpxvZU4v4cMQN qUkRGnTnJDff85"][1]',
      boardActionButton: '//button[@aria-label="Board actions menu"][1]',
      closeButton: '//button[@title="Close board"]',
      closeBoardButton: '//button[@data-testid="popover-close-board-confirm"]',
    };
  }

  get listItem() {
    return $(this.selectors.listItem);
  }

  get boardActionButton() {
    return $(this.selectors.boardActionButton);
  }

  get closeButton() {
    return $(this.selectors.closeButton);
  }

  get closeBoardButton() {
    return $(this.selectors.closeBoardButton);
  }

  async closeBoard() {
    await this.listItem.waitForDisplayed({ timeout: 15000 });
    await this.listItem.moveTo();
    await this.boardActionButton.waitForDisplayed({ timeout: 15000 });
    await this.boardActionButton.click();
    await this.closeButton.waitForDisplayed({ timeout: 15000 });
    await this.closeButton.click();
    await this.closeBoardButton.waitForDisplayed({ timeout: 15000 });
    await this.closeBoardButton.click();
  }

}

module.exports = SidebarMenu;
