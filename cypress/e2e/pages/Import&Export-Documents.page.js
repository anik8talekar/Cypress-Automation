import ImportAndExportBusinessEntitiesLocators from "../locator files/Import&Export-BusinessEntities.locator";
import ImportAndExportExpectedDocumentsLocators from "../locator files/Import&Export-ExpectedDocuments.locators"

var importAndExportBusinessEntitiesLocators = new ImportAndExportBusinessEntitiesLocators
var importAndExportExpectedDocumentsLocators = new ImportAndExportExpectedDocumentsLocators

class ImportAndExportDocumentsFunctions {
    openImportAndExportDocuments() {
        cy.xpath(importAndExportBusinessEntitiesLocators.IMPORT_AND_EXPORT_DATA).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
        cy.xpath(importAndExportBusinessEntitiesLocators.DOCUMENTS).eq(2).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:180000}).should('not.be.visible');
    }
    verifyImportTemplate() {
        cy.readFile('cypress/downloads/Documents-ImportTemplate.xlsx').should('exist')
    }
    uploadMultipleEntities() {
        cy.wait(5000)
        cy.get(importAndExportExpectedDocumentsLocators.UPLOAD_AREA).click({ force: true }).attachFile('Documents Import file.xlsx', { subjectType: 'drag-n-drop' })
        cy.wait(3000)
        cy.xpath(importAndExportExpectedDocumentsLocators.FILE_NAME_LABEL).eq(0).should('have.text', ' Documents Import file.xlsx ')
    }
}
export default ImportAndExportDocumentsFunctions;