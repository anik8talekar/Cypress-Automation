import AppkitImportAndExportBusinessEntitiesLocators from "../locator files/Appkit-Import&Export-BusinessEntities.locator";

var appkitImportAndExportBusinessEntitiesLocators = new AppkitImportAndExportBusinessEntitiesLocators

class AppkitImportAndExportBusinessEntitiesFunctions{
    openImportExportBusinessEntities(){
        cy.xpath(appkitImportAndExportBusinessEntitiesLocators.IMPORT_AND_EXPORT_DATA).click();
    }
    verifyBusinessEntityUI(){
        cy.xpath(appkitImportAndExportBusinessEntitiesLocators.BE_UI).should('exist');
    }
    applyFilters(){
        cy.xpath(appkitImportAndExportBusinessEntitiesLocators.PRIMARY_ID).type('Kathlyn')
        cy.xpath(appkitImportAndExportBusinessEntitiesLocators.NAME_1).type('Kathlyn')
        cy.xpath(appkitImportAndExportBusinessEntitiesLocators.NAME_2).type('Kathlyn')
        cy.xpath(appkitImportAndExportBusinessEntitiesLocators.TAX_IDENTIFIER).type('xohns')
        cy.xpath(appkitImportAndExportBusinessEntitiesLocators.UPDATED_BY).type('atalekar002')
    }
    verifyFilters(){
        cy.xpath(appkitImportAndExportBusinessEntitiesLocators.PRIMARY_ID_VALUE).should('have.text','Kathlyn')
        cy.xpath(appkitImportAndExportBusinessEntitiesLocators.NAME_1_VALUE).should('have.text','Kathlyn')
        cy.xpath(appkitImportAndExportBusinessEntitiesLocators.NAME_2_VALUE).should('have.text','Kathlyn')
        cy.xpath(appkitImportAndExportBusinessEntitiesLocators.TAX_IDENTIFIER_VALUE).should('have.text',' xohns ')
        cy.xpath(appkitImportAndExportBusinessEntitiesLocators.UPDATED_BY_VALUE).should('have.text','atalekar002')
    }
}

export default AppkitImportAndExportBusinessEntitiesFunctions;