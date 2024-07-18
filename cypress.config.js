const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default
require('dotenv').config()

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },

    env:{
      ...process.env,
    },

    baseUrl: process.env.BASE_URL,
    video: false,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 10000,
    specPattern: '**/*.feature',
    viewportWidth: 1024,
    viewportHeight: 768,
    experimentalRunAllSpecs: true,
  },
  
});
