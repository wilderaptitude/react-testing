import { defineConfig } from "cypress";
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { pa11y } = require("@cypress-audit/pa11y");

export default defineConfig({
  projectId: "ado8cf",
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
      on("task", {
        lighthouse: lighthouse((lighthouseReport) => {
          console.log(lighthouseReport); // raw lighthouse reports
        }),
        pa11y: pa11y((pa11yReport) => {
          console.log(pa11yReport); // raw pa11y reports
        }), // calling the function is important
        // lighthouse: lighthouse(),
        // pa11y: pa11y(),
        log(message) {
          console.log(message)
          return null
        },
        table(message) {
          console.table(message)
          return null
        }
      });
    },
    video: false,
    screenshotOnRunFailure: false,
  },
});
