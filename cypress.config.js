const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mfiaxc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/example/*.js',
    supportFile: 'cypress/support/e2e.js'
  },
});
