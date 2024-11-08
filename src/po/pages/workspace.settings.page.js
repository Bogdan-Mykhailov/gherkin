'use strict';

const BasePage = require('./base.page');
const OrganizationDetailForm = require('../components/organization.detail.form');
const { credentials } = require('../../data/credentials');

class WorkspaceSettingsPage extends BasePage {
  constructor() {
    super();
    this.selectors = {
      workspacePageTitle: '//h2[@class="SiP6d2d_8FAAkC"]',
    };
    this.organizationDetailForm = new OrganizationDetailForm();
    this.url = `https://trello.com/w/${credentials.userAccountId}/account`;
  }

  get workspacePageUrl() {
    return this.url;
  }

  get workspacePageTitle() {
    return $(this.selectors.workspacePageTitle);
  }

  async open() {
    await super.open(this.url);
  }

  async verifyRedirectionToWorkspaceSettingsPage() {
    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl === this.url;
      },
      { timeout: 15000 },
    );
    return await browser.getUrl();
  }
}

module.exports = WorkspaceSettingsPage;
