import ImportAndExportBusinessEntitiesLocators from "../locator files/Import&Export-BusinessEntities.locator";
import ImportAndExportExpectedDocumentsLocators from "../locator files/Import&Export-ExpectedDocuments.locators"

var importAndExportBusinessEntitiesLocators = new ImportAndExportBusinessEntitiesLocators
var importAndExportExpectedDocumentsLocators = new ImportAndExportExpectedDocumentsLocators

class ImportAndExportBusinessEntitiesFunctions {
    openImportAndExportBE() {
        cy.xpath(importAndExportBusinessEntitiesLocators.IMPORT_AND_EXPORT_DATA).click();
        cy.xpath(importAndExportBusinessEntitiesLocators.BUSINESS_ENTITIES).eq(1).click();
    }
    verifyImportTemplate() {
        cy.readFile('cypress/downloads/BusinessEntities-ImportTemplate.xlsx').should('exist')
    }
    applyAndVerifyFilters() {
        cy.wait(1000);
        cy.xpath(importAndExportBusinessEntitiesLocators.IS_FOREIGN_OR_DOMESTIC).click();
        cy.wait(3000);
        cy.xpath(importAndExportBusinessEntitiesLocators.IS_FOREIGN_OR_DOMESTIC).click();
        cy.xpath(importAndExportBusinessEntitiesLocators.DOMESTIC).click();
        cy.wait(1000);
        cy.xpath(importAndExportBusinessEntitiesLocators.BE_1).should('have.text', 'Domestic')
        cy.xpath(importAndExportBusinessEntitiesLocators.BE_2).should('have.text', 'Domestic')
        cy.xpath(importAndExportBusinessEntitiesLocators.BE_3).should('have.text', 'Domestic')
        cy.xpath(importAndExportBusinessEntitiesLocators.BE_4).should('have.text', 'Domestic')
        cy.xpath(importAndExportBusinessEntitiesLocators.BE_5).should('have.text', 'Domestic')
        cy.xpath(importAndExportBusinessEntitiesLocators.BE_6).should('have.text', 'Domestic')
        cy.xpath(importAndExportBusinessEntitiesLocators.BE_7).should('have.text', 'Domestic')
        cy.xpath(importAndExportBusinessEntitiesLocators.BE_8).should('have.text', 'Domestic')
        cy.xpath(importAndExportBusinessEntitiesLocators.BE_9).should('have.text', 'Domestic')
        cy.xpath(importAndExportBusinessEntitiesLocators.BE_10).should('have.text', 'Domestic')
        cy.wait(1000);
        cy.get(importAndExportBusinessEntitiesLocators.LAST_UPDATED_DATE).type('5/8/2023');
        cy.xpath(importAndExportBusinessEntitiesLocators.DATE_DROPDOWN).eq(1).click();
    }
    uploadMultipleEntities() {
        cy.wait(5000)
        cy.get(importAndExportExpectedDocumentsLocators.UPLOAD_AREA).click({ force: true }).attachFile('2021 DataFlow_BusEnt-QA.xlsx', { subjectType: 'drag-n-drop' })
        cy.wait(3000)
        cy.xpath(importAndExportExpectedDocumentsLocators.FILE_NAME_LABEL).eq(0).should('have.text', ' 2021 DataFlow_BusEnt-QA.xlsx ')
    }
}
export default ImportAndExportBusinessEntitiesFunctions;