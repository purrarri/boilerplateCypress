const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

//If using this approach, just call the key "setupNodeEvents" in the E2E configurations
// async function setupNodeEvents(on, config) {
//   await addCucumberPreprocessorPlugin(on, config);
//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     })
//   );
//   return config;
// }

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);
      
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.saucedemo.com/v1/",
    defaultCommandTimeout: 7000,
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    env: {
      browserPermissions: {
        notifications: "allow",
        geolocation: "allow",
      }
    }
    
  },
});