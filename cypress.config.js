const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nod727',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
