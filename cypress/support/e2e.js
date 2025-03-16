import './commands'
import 'cypress-mochawesome-reporter/register';
import 'cypress-file-upload';
import 'cypress-real-events';

Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from failing the test
   return false
})
 
beforeEach(() => {  
   
   let baseURL = Cypress.env('baseURL')  
   if (baseURL.includes('qa')) {    
        cy.session('todos', () => {
      cy.origin(Cypress.env('loginURL'), () => {
         cy.visit(Cypress.env('loginURL'))
         cy.get('#initEmail')
            .type(Cypress.env('userEmail'))
         cy.contains('Next').click().wait(2000);
      })
      cy.origin(Cypress.env('loginURL'), () => {
         cy.visit(Cypress.env('baseURL'))
            .wait(5000);
      })
   })
   } else if (baseURL.includes('stg')) {    
         cy.visit(Cypress.env('loginURL'))
         cy.get('#initEmail').click().type(Cypress.env('userEmail'))
         cy.contains('Next').click().wait(5000);
         cy.visit(Cypress.env('baseURL'))
            .wait(5000);
   }
});
 
require("cypress-xpath");
 
if (Cypress.config('hideXHRInCommandLog')) {
   const app = window.top;

   if (
      app &&
      !app.document.head.querySelector('[data-hide-command-log-request]')
   ) {
      const style = app.document.createElement('style');
      style.innerHTML =
         '.command-name-request, .command-name-xhr { display: none }';
      style.setAttribute('data-hide-command-log-request', '');

      app.document.head.appendChild(style);
   }
 }
 