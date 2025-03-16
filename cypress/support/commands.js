Cypress.Commands.add('performInternalLogin', (email, password, baseUrl) => {
  cy.visit(baseUrl);
  cy.get('#initEmail')
    .type(email)
    .get('.move-right > .a-btn')
    .click()
    .get('.a-text-input')
    .type(password)
    .get(':nth-child(1) > .a-btn')
    .click()
});

Cypress.Commands.add('forceVisit', url => {
  cy.window().then(win => win.location.href = url)
});

Cypress.Commands.add('getTestData', () => {
  const environment = Cypress.env('baseURL');
  const filename = environment.includes('qa') ? 'data.qa.json' : 'data.stage.json'
 
  cy.fixture(filename).then((data)=>{
   cy.wrap(data);
  })
 });

Cypress.Commands.add('WriteDifferencesToFile', differences => {
  cy.writeFile('cypress/fixtures/API/differences.json',JSON.stringify(differences))
});

Cypress.Commands.add('SelectCurrentDate', () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String (today.getMonth() + 1).padStart(2, '0')
  const day = String (today.getDate()).padStart(2, '0')
  const CurrentDate = `${month}/${day}/${year}`
  cy.get("input[placeholder='Choose a date']").type(CurrentDate)  
});

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop');
import 'cypress-wait-until';
import "cypress-cucumber-attach-screenshots-to-failed-steps";
import "cypress-real-events";

const xlsx = require('xlsx');
 
Cypress.Commands.add('readExcel', (filePath) => {
  return cy.task('readExcel', filePath);
});
 
module.exports = (on, config) => {
  on('task', {
    readExcel(filePath) {
      const workbook = xlsx.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      return xlsx.utils.sheet_to_json(worksheet);
    }
  });
};

