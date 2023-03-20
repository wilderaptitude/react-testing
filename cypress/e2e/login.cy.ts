import { terminalLog } from "support/utils/logging";

describe('login form', () => {
  it('should login', () => {
    cy.visit('http://localhost:6006/iframe.html?args=&id=login--default&viewMode=story')
    cy.get('input[data-testid="email"]').type('wilder@aptitude.com');
    cy.get('input[data-testid="password"]').type('password');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert',(text)=>{
      expect(text).to.contains('wilder@aptitude.com, password');
    });
  });

  // wip: lighthouse command not working
  it.skip("should check performace", function () {
    cy.visit('http://localhost:6006/iframe.html?args=&id=login--default&viewMode=story')
    // const customThresholds = {
    //   performance: 50,
    //   accessibility: 50,
    //   seo: 70,
    //   'first-contentful-paint': 2000,
    //   'largest-contentful-paint': 3000,
    //   'cumulative-layout-shift': 0.1,
    //   'total-blocking-time': 500,
    // };
    // const desktopConfig = {
    //   formFactor: 'desktop',
    //   screenEmulation: { disabled: true },
    // };
    // cy.lighthouse(customThresholds, desktopConfig);
    // ---2---
    // cy.lighthouse({
    //   performance: 50,
    //   accessibility: 50,
    //   "best-practices": 50,
    //   seo: 50,
    //   pwa: 50,
    // });
    // ---3---
    cy.lighthouse(); // not working
    cy.pa11y();
  });

  it("should check load page performance", () => {
    cy.visit("http://localhost:6006/iframe.html?args=&id=login--default&viewMode=story", {
      onBeforeLoad: (win) => {
        win.performance.mark("start-loading");
      }
    })
    .its("performance").then((performance) => {
      cy.get("form button").should('be.visible')
      .then(() => performance.mark("end-loading"))
      .then(() => {
        performance.measure("pageLoad", "start-loading", "end-loading");
        const measure = performance.getEntriesByName("pageLoad")[0];
        const duration = measure.duration;
        assert.isAtMost(duration, 500);
        cy.log(
          `[PERFORMANCE] Page load duration: ${duration / 1000} seconds`
        );
      });
    });
  });

});