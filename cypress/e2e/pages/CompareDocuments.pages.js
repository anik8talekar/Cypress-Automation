import CompareDocumentLocators from "../locator files/CompareDocuments.locators";

var compareDocumentLocators = new CompareDocumentLocators

class CompareDocumentFunctions{
    ClickOnViewSideBySideOption(){
        cy.contains('View Side by Side').click()
    }
    VerifyInvestmentName(){
        cy.get(compareDocumentLocators.VERIFY_INVESTMENT_NAME).should('contain',' SITWELL COMPANY ')
        cy.get(compareDocumentLocators.VERIFY_INVESTMENT_NAME).should('contain',' FT12 ')
        cy.get(compareDocumentLocators.VERIFY_INVESTMENT_NAME).should('contain',' STANLEY SITWELL FUND ')
        cy.get(compareDocumentLocators.VERIFY_INVESTMENT_NAME).should('contain',' Actual ')
    }
    VerifyDocumentsCount(){
        cy.get(compareDocumentLocators.VERIFY_DOCUMENTS_COUNT).should('contain','Documents (2): ') 
    }
}
export default CompareDocumentFunctions;