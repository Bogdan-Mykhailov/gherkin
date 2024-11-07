'use strict';

class OrganizationDetailForm {
  constructor() {
    this.selectors = {
      editWorkspaceButton: '//span[@data-testid="EditIcon"]',
      detailsForm: '//form[@aria-label="OrganizationDetailForm"]',
      workspaceNameField: '//input[@id="displayName"]',
      saveButton: '//button[@type="submit"]',
    };
  }

  get editWorkspaceButton() {
    return $(this.selectors.editWorkspaceButton);
  }

  get detailsForm() {
    return $(this.selectors.detailsForm);
  }

  get workspaceNameField() {
    return $(this.selectors.workspaceNameField);
  }

  get saveButton() {
    return $(this.selectors.saveButton);
  }

  async editWorkspaceButtonClick() {
    return await this.editWorkspaceButton.click();
  }

  async enterNewWorkspaceName(workspaceName) {
    return await this.workspaceNameField.setValue(workspaceName);
  }

  async saveButtonClick() {
    return await this.saveButton.click();
  }
}

module.exports = OrganizationDetailForm;
