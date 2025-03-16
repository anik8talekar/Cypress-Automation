import ImportAndExportExpectedDocumentsLocators from "../locator files/Import&Export-ExpectedDocuments.locators";

var importAndExportExpectedDocumentsLocators = new ImportAndExportExpectedDocumentsLocators

class ImportAndExportExpectedDocumentsFunctions {
    openExpectedDocumentsSection() {
        cy.xpath(importAndExportExpectedDocumentsLocators.IMPORT_AND_EXPORT_DATA).click();
        cy.xpath(importAndExportExpectedDocumentsLocators.EXPECTED_DOCUMENTS_SECTION).eq(0).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    downloadBlankImportTemplate() {
        cy.xpath(importAndExportExpectedDocumentsLocators.DOWNLOAD_BLANK_IMPORT_TEMPLATE_BTN).click();
    }
    verifyImportTemplateDownload() {
        cy.readFile('cypress/downloads/ExpectedDocuments-ImportTemplate.xlsx').should('exist')
    }
    clickOnImportData() {
        cy.wait(3000)
        cy.xpath(importAndExportExpectedDocumentsLocators.IMPORT_DATA_BTN).click();
    }
    uploadMultipleEntities() {
        cy.get(importAndExportExpectedDocumentsLocators.UPLOAD_AREA).click({ force: true }).attachFile('ExpectedDocuments-ImportTemplate(QA Testing).xlsx', { subjectType: 'drag-n-drop' })
        cy.wait(3000)
        cy.xpath(importAndExportExpectedDocumentsLocators.FILE_NAME_LABEL).eq(0).should('have.text', ' ExpectedDocuments-ImportTemplate(QA Testing).xlsx ')
    }
    exportAllData() {
        cy.xpath(importAndExportExpectedDocumentsLocators.EXPORT_ALL_DATA_BTN).click();
    }
    applyAndVerifyFilters() {
        cy.xpath(importAndExportExpectedDocumentsLocators.SCHEDULE_DROPDOWN).click();
        cy.xpath(importAndExportExpectedDocumentsLocators.FED_K1).click();
        cy.wait(3000);
        cy.xpath(importAndExportExpectedDocumentsLocators.CATEGORY_DROPDOWN).click();
        cy.xpath(importAndExportExpectedDocumentsLocators.ACTUAL).eq(0).click();
        cy.wait(3000);
        cy.xpath(importAndExportExpectedDocumentsLocators.DIRECT_CONNECT_DROPDOWN).click();
        cy.xpath(importAndExportExpectedDocumentsLocators.YES).click();
        cy.wait(3000);
        cy.xpath(importAndExportExpectedDocumentsLocators.PROJECTED_RECEIVED_DATE).click();
        cy.xpath(importAndExportExpectedDocumentsLocators.DATE_VALUE).eq(0).click();
        cy.wait(3000);
        cy.xpath(importAndExportExpectedDocumentsLocators.ACTUAL_RECEIVED_DATE).click();
        cy.xpath(importAndExportExpectedDocumentsLocators.DATE_VALUE).eq(0).click({ force: true });
    }

}

export default ImportAndExportExpectedDocumentsFunctions