import DashboardNewJurisdictionsLocators from "../locator files/Dashboard-NewJurisdictions.locator";

var dashboardNewJurisdictionsLocators = new DashboardNewJurisdictionsLocators

class DashboardNewJurisdictionsFunctions{
 verifyNewJurisdictionsWidget(){
   cy.xpath(dashboardNewJurisdictionsLocators.NEW_JURISDICTIONS).scrollIntoView();
   cy.xpath(dashboardNewJurisdictionsLocators.NEW_JURISDICTIONS).should('be.visible')
 }

 turnToggleOff(){
  cy.wait(1000)
  cy.xpath(dashboardNewJurisdictionsLocators.NEW_JURIS_TOGGLE).click();
  cy.wait(2000)
 }

 turnToggleOn(){
   cy.xpath(dashboardNewJurisdictionsLocators.ALL_JURIS_TOGGLE).click();
   cy.wait(2000)
 }

 selectTaxYear(){
  cy.xpath(dashboardNewJurisdictionsLocators.TAX_YEAR_DROPDOWN).eq(2).click();
  cy.xpath(dashboardNewJurisdictionsLocators.TAX_YEAR_OPTION).click();
 }

 clickOnShowDetails(){
   cy.xpath(dashboardNewJurisdictionsLocators.SHOW_DETAILS_BTN).click();
 }

 applyFilters(){
   cy.xpath(dashboardNewJurisdictionsLocators.FILTER_DROPDOWN).eq(0).click();
   cy.xpath(dashboardNewJurisdictionsLocators.TAX_YEAR_OPTION).click();
   cy.wait(2000);

   cy.xpath(dashboardNewJurisdictionsLocators.FILTER_DROPDOWN).eq(1).click();
   cy.xpath(dashboardNewJurisdictionsLocators.SELECT_INVESTOR).click();
   cy.wait(2000);

   cy.xpath(dashboardNewJurisdictionsLocators.FILTER_DROPDOWN).eq(2).click();
   cy.xpath(dashboardNewJurisdictionsLocators.SELECT_JURISDICTIONS).click();
   cy.xpath(dashboardNewJurisdictionsLocators.SHOW_JURISDICTIONS_DROPDOWN).click();
   cy.wait(2000);

   cy.xpath(dashboardNewJurisdictionsLocators.FILTER_DROPDOWN).eq(3).click();
   cy.xpath(dashboardNewJurisdictionsLocators.SELECT_ALL).click();
   cy.wait(2000);
 }
  
 clickOnResetSelectionButton(){
   cy.xpath(dashboardNewJurisdictionsLocators.RESET_SELECTION_BTN).click();
 }
}
export default DashboardNewJurisdictionsFunctions;