const { defineConfig } = require ('cypress')
const path = require('path'); // Import path to handle file paths
const { readExcelFile } = require('./cypress/plugins/readExcel'); // Import the function to read the Excel file
 
module.exports = defineConfig({
  clientCertificates: [
    {
      url: 'https://*.pwcinternal.com/**',
      ca: [],
      certs: [
        {
          pfx: 'certs/dautomatio004.pfx',
          passphrase: 'certs/dautomatio004.txt',
        },
      ],
    },
  ],
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  trashAssetsBeforeRuns: true,
  projectId: 'omc4ks',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true,
    screenshotsFolder: 'cypress/screenshots',
  },
  video: false,
  viewportWidth: 1600,
  viewportHeight: 1000,
  hideXHRInCommandLog: true,
  e2e: {
    setupNodeEvents(on, config) {
      // Define custom tasks here
      on('task', {
        // Task to read data from an Excel file
        readExcelData() {
          const filePath = path.join(__dirname, 'cypress', 'fixtures', 'CSV_Data_Extract_2024-09-16--01-10-14.csv'); // Path to your Excel file
          return readExcelFile(filePath); // Call the function to read Excel data
        },
      });
 
      // Import and call the old plugins
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'https://login-stg.pwcinternal.com',
    specPattern: ['cypress/e2e/specs/**/*.{feature,features}'],
    excludeSpecPattern: [],
  },
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
});



