import AppkitImportAndExportReclassesLocators from "../locator files/Appkit-Import&Export-Reclasses.locator"

var appkitImportAndExportReclassesLocators = new AppkitImportAndExportReclassesLocators

class AppkitImportAndExportReclassesFunctions{
    openReclasses(){
        cy.xpath(appkitImportAndExportReclassesLocators.IMPORT_AND_EXPORT_DATA).click();
        cy.xpath(appkitImportAndExportReclassesLocators.RECLASSES).eq(0).click();
    }
    verifyReclassesUI(){
        cy.xpath(appkitImportAndExportReclassesLocators.RECLASS_UI).should('exist');
    }
    applyFilters(){
        cy.wait(3000);
        cy.xpath(appkitImportAndExportReclassesLocators.FILE_NAME).type('2021 George Bluth K1_1_14.pdf');
        cy.wait(1000);
        cy.xpath(appkitImportAndExportReclassesLocators.RECLASS_NAME).type('Automation');
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    verifyFilterResults(){
        cy.xpath(appkitImportAndExportReclassesLocators.FILE_NAME_VALUE).should('have.text','2021 George Bluth K1_1_14.pdf');
        cy.xpath(appkitImportAndExportReclassesLocators.RECLASS_NAME_VALUE).should('have.text','Automation');
    }
}

export default AppkitImportAndExportReclassesFunctions;