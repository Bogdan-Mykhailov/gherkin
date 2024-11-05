class AccountMenu {
  constructor() {
    this.selectors = {
      profileAndVisibilityButton: '//a[@data-testid="account-menu-profile"]',
      accountMenu: 'div[data-testid="account-menu"]',
      userNameField: 'input[id="username"]',
      bioField: 'textarea[id="bio"]',
      saveButton: '//button[@type="submit"]',
      alert: '//span[@class="QMKgZFIlTLiEJN"]',
    };
  }

  get profileAndVisibilityButton() {
    return $(this.selectors.profileAndVisibilityButton);
  }

  get accountMenu() {
    return $(this.selectors.accountMenu);
  }

  get userNameField() {
    return $(this.selectors.userNameField);
  }

  get bioField() {
    return $(this.selectors.bioField);
  }

  get saveButton() {
    return $(this.selectors.saveButton);
  }

  get alert() {
    return $(this.selectors.alert);
  }

  async profileAndVisibilityButtonClick() {
    return await this.profileAndVisibilityButton.click();
  }

  async updateUserName(username){
    return await this.userNameField.setValue(username);
  }

  async returnPreviousUserName(username){
    return await this.userNameField.setValue(username);
  }

  async updateUserBio(bio){
    return await this.bioField.setValue(bio);
  }

  async saveButtonClick(){
    return await this.saveButton.click();
  }
}

module.exports = AccountMenu;
