import { terminalLog } from "support/utils/logging";

describe('login form', () => {
  it('should check accessibility', () => {
    cy.visit('http://localhost:6006/iframe.html?args=&id=login--default&viewMode=story')
    cy.injectAxe();
    //cy.checkA11y();
    cy.checkA11y(null, null, terminalLog, true);
  });
});