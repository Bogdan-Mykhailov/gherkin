class RegisterForm {
  constructor() {
    this.selectors = {
      emailInput: 'input[id="email"]',
      signUpButton: 'button[id="signup-submit"]',
      pageHeading: '//div[text()=\'What brings you here today?\']',
      skipButton: 'button[class="y3qsM1P5OoRSsX bxgKMAm3lq5BpA SEj5vUdI3VvxDc"]',
      createBoardPageTitle: '//h1[text()=\'It all starts with the board\']',
      skipCreateBoardButton: 'button[data-testid="name-board-skip-button"]',
      inviteTeamPageTitle: '//h1[text()=\'Invite your team\']',
      skipInviteTeamButton: 'button[data-testid="invite-skip-button',
      confirmationMessage: '//h2[text()="Let\'s verify your email"]',
    };
  }

  get emailInput() {
    return $(this.selectors.emailInput);
  }

  get signUpButton() {
    return $(this.selectors.signUpButton);
  }

  get pageHeading() {
    return $(this.selectors.pageHeading);
  }

  get skipButton() {
    return $(this.selectors.skipButton);
  }

  get createBoardPageTitle() {
    return $(this.selectors.createBoardPageTitle);
  }

  get skipCreateBoardButton() {
    return $(this.selectors.skipCreateBoardButton);
  }

  get inviteTeamPageTitle() {
    return $(this.selectors.inviteTeamPageTitle);
  }

  get skipInviteTeamButton() {
    return $(this.selectors.skipInviteTeamButton);
  }

  get confirmationMessage() {
    return $(this.selectors.confirmationMessage);
  }

  async enterValidEmail(data) {
    return await this.emailInput.setValue(data);
  }

  async signUpButtonClick() {
    return await this.signUpButton.click();
  }

  async skipButtonClick() {
    return this.skipButton.click();
  }

  async skipCreateBoardButtonClick() {
    return this.skipCreateBoardButton.click();
  }

  async skipInviteTeamButtonClick() {
    return this.skipInviteTeamButton.click();
  }
}

module.exports = RegisterForm;
