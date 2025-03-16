import AppkitImportAndExportImportStatusLocators from "../locator files/Appkit-ImportAndExport-ImportStatus.locator";
import ImportAndExportBusinessEntitiesLocators from "../locator files/Import&Export-BusinessEntities.locator";


var appkitImportAndExportImportStatusLocators = new AppkitImportAndExportImportStatusLocators
var importAndExportBusinessEntitiesLocators = new ImportAndExportBusinessEntitiesLocators

class AppkitImportAndExportImportStatusFunctions{
openImportStatus(){
    cy.xpath(importAndExportBusinessEntitiesLocators.IMPORT_AND_EXPORT_DATA).click();
    cy.xpath(appkitImportAndExportImportStatusLocators.IMPORT_STATUS_TAB).eq(0).click();
    cy.wait(3000);
}
verifyImportStatusUI(){
    cy.xpath(appkitImportAndExportImportStatusLocators.IMPORT_STATUS_UI).should('exist');
}
applyFilters(){
    cy.xpath(appkitImportAndExportImportStatusLocators.IMPORT_FILE_NAME).type('2021 DataFlow_BusEnt-QA.xlsx')
    cy.xpath(appkitImportAndExportImportStatusLocators.IMPORT_SHEET).type('Business Entities')
    cy.xpath(appkitImportAndExportImportStatusLocators.NUMBER_OF_ERRORS).type('0')
    cy.xpath(appkitImportAndExportImportStatusLocators.NUMBER_OF_DUPLICATES).type('10')
    cy.xpath(appkitImportAndExportImportStatusLocators.IMPORTED_BY).type('dautomatio004')
    cy.xpath(appkitImportAndExportImportStatusLocators.IMPORT_STATUS_COLUMN).type('Successful')
}
verifyFilterResults(){
    cy.xpath(appkitImportAndExportImportStatusLocators.IMPORT_FILE_NAME_VALUE).should('have.text','2021 DataFlow_BusEnt-QA.xlsx')
    cy.xpath(appkitImportAndExportImportStatusLocators.IMPORT_SHEET_VALUE).should('have.text','Business Entities')
    cy.xpath(appkitImportAndExportImportStatusLocators.NUMBER_OF_ERRORS_VALUE).should('have.text','0')
    cy.xpath(appkitImportAndExportImportStatusLocators.NUMBER_OF_DUPLICATES_VALUE).should('have.text','10')
    cy.xpath(appkitImportAndExportImportStatusLocators.IMPORTED_BY_VALUE).should('have.text','dautomatio004')
    cy.xpath(appkitImportAndExportImportStatusLocators.IMPORT_STATUS_COLUMN_VALUE).should('have.text','Successful')
}

}

export default AppkitImportAndExportImportStatusFunctions;