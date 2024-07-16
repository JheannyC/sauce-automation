const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "",
    video: false,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 10000,
  },
});
