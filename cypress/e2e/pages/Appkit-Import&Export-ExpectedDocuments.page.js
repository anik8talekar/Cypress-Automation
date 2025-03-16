import AppkitImportAndExportExpectedDocumentsLocators from "../locator files/Appkit-Import&Export-ExpectedDocuments.locators";

var appkitImportAndExportExpectedDocumentsLocators = new AppkitImportAndExportExpectedDocumentsLocators
class AppkitImportAndExportExpectedDocumentsFunctions{
    openImportExportExpectedDocument(){
        cy.xpath(appkitImportAndExportExpectedDocumentsLocators.IMPORT_AND_EXPORT_DATA).click();
        cy.xpath(appkitImportAndExportExpectedDocumentsLocators.EXPECTED_DOCUMENT).eq(0).click();
    }
    verifyExpectedDocUI(){
        cy.xpath(appkitImportAndExportExpectedDocumentsLocators.EXPEC_DOC_UI).should('exist')
    }
    applyFilters(){
        cy.xpath(appkitImportAndExportExpectedDocumentsLocators.TAX_YEAR).click();
        cy.xpath(appkitImportAndExportExpectedDocumentsLocators.TAX_YEAR).type('2019');
        cy.xpath(appkitImportAndExportExpectedDocumentsLocators.INVESTOR_NAME).type('STANLEY SITWELL FUND');
        cy.xpath(appkitImportAndExportExpectedDocumentsLocators.INVESTMENT_NAME).type('SITWELL COMPANY');
    }
    verifyFilters(){
        cy.xpath(appkitImportAndExportExpectedDocumentsLocators.TAX_YEAR_VALUE).should('have.text','2019');
        cy.xpath(appkitImportAndExportExpectedDocumentsLocators.INVESTOR_NAME_VALUE).should('have.text','STANLEY SITWELL FUND');
        cy.xpath(appkitImportAndExportExpectedDocumentsLocators.INVESTMENT_NAME_VALUE).should('have.text','SITWELL COMPANY');
    }
}
export default AppkitImportAndExportExpectedDocumentsFunctions;