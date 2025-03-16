import ImportAndExportBusinessEntitiesLocators from "../locator files/Import&Export-BusinessEntities.locator";
import ImportAndExportExpectedDocumentsLocators from "../locator files/Import&Export-ExpectedDocuments.locators"

var importAndExportBusinessEntitiesLocators = new ImportAndExportBusinessEntitiesLocators
var importAndExportExpectedDocumentsLocators = new ImportAndExportExpectedDocumentsLocators


class ImportAndExportReclassesFunctions{
    openImportAndExportReclasses(){
        cy.xpath(importAndExportBusinessEntitiesLocators.IMPORT_AND_EXPORT_DATA).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
        cy.xpath(importAndExportBusinessEntitiesLocators.RECLASSES).eq(0).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    verifyImportTemplate(){
        cy.readFile('cypress/downloads/Reclasses-ImportTemplate.xlsx').should('exist')
    }
    uploadMultipleEntities() {
        cy.wait(5000)
        cy.get(importAndExportExpectedDocumentsLocators.UPLOAD_AREA).click({ force: true }).attachFile('Reclass Import file.xlsx', { subjectType: 'drag-n-drop' })
        cy.wait(3000)
        cy.xpath(importAndExportExpectedDocumentsLocators.FILE_NAME_LABEL).eq(0).should('have.text', ' Reclass Import file.xlsx ')
    }
}
export default ImportAndExportReclassesFunctions;