import DashboardDocumentsLocators from "../locator files/Dashboard-Documents.locators";
import Smartk1Locators from "../locator files/Smart-k1.locators"
import ExpDocumentsRolloverLocators from "../locator files/ExpDocumentsRollover.locators"

var smartK1Locators = new Smartk1Locators
var expDocumentsRolloverLocators = new ExpDocumentsRolloverLocators
var dashboardDocumentsLocators = new DashboardDocumentsLocators

class DashboardDocumentsFunctions{
    TopSavedSearchTab(){
        cy.get(dashboardDocumentsLocators.TOP_SAVED_SEARCH).should('contain','Top Saved Searches')
        cy.get(dashboardDocumentsLocators.TOP_SAVED_SEARCH).should('contain',' Gamma Tests ')
        cy.get(dashboardDocumentsLocators.TOP_SAVED_SEARCH).should('contain',' Helmer ')
        cy.get(dashboardDocumentsLocators.TOP_SAVED_SEARCH).should('contain',' Horace ')
        cy.get(dashboardDocumentsLocators.TOP_SAVED_SEARCH).should('contain','Recently Updated Documents')
    }
    ClickOnShowDetailsButton(){
        cy.getTestData().then((data)=>{
        cy.get(data['SHOW_DETAILS_BUTTON_DOCS']).eq(3).click()
        })
    }
    VerifyDocumentsTab(){
        cy.getTestData().then((data)=>{
        cy.get(dashboardDocumentsLocators.DOCUMENT_CENTER).should('contain',data['VerifyDocumentsTab'])
        })
    }
}
export default DashboardDocumentsFunctions;
