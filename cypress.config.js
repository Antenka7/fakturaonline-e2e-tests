const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.invoiceonline.com/",
    env: {
      domains: [
        "https://dev.fakturaonline.cz",
        "https://dev.invoiceonline.com",
        "https://dev.fakturaonline.sk"
      ]
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
