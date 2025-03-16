import AppkitImportAndExportDocumentsLocators from '../locator files/Appkit-Import&Export-Documents.locator'

var appkitImportAndExportDocumentsLocators = new AppkitImportAndExportDocumentsLocators

class AppkitImportAndExportDocumentsFunctions{
    openDocuments(){
        cy.xpath(appkitImportAndExportDocumentsLocators.IMPORT_AND_EXPORT_DATA).click();
        cy.xpath(appkitImportAndExportDocumentsLocators.DOCUMENTS).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    verifyDocumentsUI(){
        cy.xpath(appkitImportAndExportDocumentsLocators.DOCUMENTS_UI).should('exist');
    }
    applyFilters(){
        cy.xpath(appkitImportAndExportDocumentsLocators.FILE_NAME).type('Perf_test_3_forms_4_79_96.pdf');
        cy.xpath(appkitImportAndExportDocumentsLocators.INVESTOR_NAME).type('QUEEN OF ENGLAND, L.P.');
        cy.xpath(appkitImportAndExportDocumentsLocators.INVESTMENT_NAME).type('1065 SMART REVIEW TOOL');
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    verifyFilterResults(){
        cy.xpath(appkitImportAndExportDocumentsLocators.FILE_NAME_VALUE).should('have.text','Perf_test_3_forms_4_79_96.pdf');
        cy.xpath(appkitImportAndExportDocumentsLocators.INVESTOR_NAME_VALUE).should('have.text','QUEEN OF ENGLAND, L.P.');
        cy.xpath(appkitImportAndExportDocumentsLocators.INVESTMENT_NAME_VALUE).should('have.text','1065 SMART REVIEW TOOL');
    }
}

export default AppkitImportAndExportDocumentsFunctions;