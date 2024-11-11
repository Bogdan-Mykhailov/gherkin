'use strict';

class FilterCardsMenu {
  constructor() {
    this.selectors = {
      filterMenu: '//section[@class="rX4pAv5sWHFNjp js-react-root"]',
      assignedToMeCheckbox: '//label[@data-testid="clickable-checkbox"]//div[@title="Cards assigned to me"]',
    };
  }

  get filterMenu() {
    return $(this.selectors.filterMenu);
  }

  get assignedToMeCheckbox() {
    return $(this.selectors.assignedToMeCheckbox);
  }

  async assignedToMeCheckboxClick() {
    return await this.assignedToMeCheckbox.click();
  }

}

module.exports = FilterCardsMenu;
