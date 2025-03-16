import ProcessingLocators from "../locator files/Processing.locator";
import MaskedEINLocators from "../locator files/MaskedEIN.locator";
import DocumentCenterDocumentsLocators from "../locator files/DocumentCenterDocuments.locator";

var processingLocators = new ProcessingLocators
var maskedEINLocators = new MaskedEINLocators
var documentCenterDocumentsLocators = new DocumentCenterDocumentsLocators

class MaskedEINFunctions {
    openDocuments() {
        cy.xpath(processingLocators.DOCUMENT_CENTER).click();
        cy.get(maskedEINLocators.DOCUMENTS_SECTION).click();
        cy.xpath(documentCenterDocumentsLocators.RESET_GRID).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    openExecutiveReview() {
        cy.xpath(processingLocators.DOCUMENT_CENTER).click();
        cy.xpath(maskedEINLocators.EXECUTIVE_REVIEW_SECTION).click();
        cy.xpath(documentCenterDocumentsLocators.RESET_GRID).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    selectTaxYear() {
        cy.xpath(maskedEINLocators.SELECT_TAX_YEAR).click();
        cy.xpath(maskedEINLocators.TAX_YEAR_VALUE).eq(2).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    openBusinessEntities() {
        cy.xpath(maskedEINLocators.BUSINESS_ENTITIES).click();
        cy.wait(3000);
    }
    openImportExportBusinessEntities() {
        cy.xpath(maskedEINLocators.IMPORT_AND_EXPORT_DATA).click();
        cy.xpath(maskedEINLocators.IMPORT_EXPORT_B_E).eq(1).click();
    }
    unmaskAndVerifyForDocuments() {
        cy.xpath(maskedEINLocators.MASKED_EIN_TOGGLE_BUTTON).click();
        cy.xpath(maskedEINLocators.DOCUMENTS_UNMASK_EIN_VALUE1).then(function (unmask1) {
            cy.log(unmask1.text())
            cy.xpath(maskedEINLocators.DOCUMENTS_UNMASK_EIN_VALUE1).should('have.text', (unmask1.text()))
        })
        cy.xpath(maskedEINLocators.DOCUMENTS_UNMASK_EIN_VALUE2).then(function (unmask2) {
            cy.log(unmask2.text())
            cy.xpath(maskedEINLocators.DOCUMENTS_UNMASK_EIN_VALUE2).should('have.text', (unmask2.text()))
        })
    }
    maskAndVerifyForDocuments() {
        cy.xpath(maskedEINLocators.MASKED_EIN_TOGGLE_BUTTON).click();
        cy.xpath(maskedEINLocators.DOCUMENTS_MASK_EIN_VALUE1).then(function (mask1) {
            cy.log(mask1.text())
            cy.xpath(maskedEINLocators.DOCUMENTS_MASK_EIN_VALUE1).should('have.text', (mask1.text()))
        })
        cy.xpath(maskedEINLocators.DOCUMENTS_MASK_EIN_VALUE2).then(function (mask2) {
            cy.log(mask2.text())
            cy.xpath(maskedEINLocators.DOCUMENTS_MASK_EIN_VALUE2).should('have.text', (mask2.text()))
        })
    }

    unmaskAndVerifyForExecutiveReview() {
        cy.xpath(5000);
        cy.xpath(maskedEINLocators.MASKED_EIN_TOGGLE_BUTTON).click();
        cy.xpath(maskedEINLocators.EXECUTIVE_REVIEW_UNMASK_EIN_VALUE1).then(function (unmask7) {
            cy.log(unmask7.text())
            cy.xpath(maskedEINLocators.EXECUTIVE_REVIEW_UNMASK_EIN_VALUE1).should('have.text', (unmask7.text()))
        })
        cy.xpath(maskedEINLocators.EXECUTIVE_REVIEW_UNMASK_EIN_VALUE2).then(function (unmask8) {
            cy.log(unmask8.text())
            cy.xpath(maskedEINLocators.EXECUTIVE_REVIEW_UNMASK_EIN_VALUE2).should('have.text', (unmask8.text()))
        })
    }
    maskAndVerifyForExecutiveReview() {
        cy.xpath(maskedEINLocators.MASKED_EIN_TOGGLE_BUTTON).click();
        cy.xpath(maskedEINLocators.EXECUTIVE_REVIEW_MASK_EIN_VALUE1).then(function (mask7) {
            cy.log(mask7.text())
            cy.xpath(maskedEINLocators.EXECUTIVE_REVIEW_MASK_EIN_VALUE1).should('have.text', (mask7.text()))
        })
        cy.xpath(maskedEINLocators.EXECUTIVE_REVIEW_MASK_EIN_VALUE2).then(function (mask8) {
            cy.log(mask8.text())
            cy.xpath(maskedEINLocators.EXECUTIVE_REVIEW_MASK_EIN_VALUE2).should('have.text', (mask8.text()))
        })
    }

    umaskAndVerifyForbusinessentities() {
        cy.xpath(maskedEINLocators.MASKED_EIN_TOGGLE_BUTTON_BE).click();
        cy.xpath(maskedEINLocators.IMPORT_EXPORT_B_E_UNMASK_EIN_VALIUE1).then(function (unmask3) {
            cy.log(unmask3.text())
            cy.xpath(maskedEINLocators.IMPORT_EXPORT_B_E_UNMASK_EIN_VALIUE1).should('have.text', (unmask3.text()))
        })
        cy.xpath(maskedEINLocators.IMPORT_EXPORT_B_E_UNMASK_EIN_VALIUE2).then(function (unmask4) {
            cy.log(unmask4.text())
            cy.xpath(maskedEINLocators.IMPORT_EXPORT_B_E_UNMASK_EIN_VALIUE2).should('have.text', (unmask4.text()))
        })
    }
    maskAndVerifyForbusinessentities() {
        cy.xpath(maskedEINLocators.MASKED_EIN_TOGGLE_BUTTON_BE).click();
        cy.xpath(maskedEINLocators.IMPORT_EXPORT_B_E_MASK_EIN_VALIUE1).then(function (mask3) {
            cy.log(mask3.text())
            cy.xpath(maskedEINLocators.IMPORT_EXPORT_B_E_MASK_EIN_VALIUE1).should('have.text', (mask3.text()))
        })
        cy.xpath(maskedEINLocators.IMPORT_EXPORT_B_E_MASK_EIN_VALIUE2).then(function (mask4) {
            cy.log(mask4.text())
            cy.xpath(maskedEINLocators.IMPORT_EXPORT_B_E_MASK_EIN_VALIUE2).should('have.text', (mask4.text()))
        })
    }
    umaskAndVerifyForBusinessEntities() {
        cy.xpath(maskedEINLocators.MASKED_EIN_TOGGLE_BUTTON).click();
        cy.xpath(maskedEINLocators.B_E_UNMASK_EIN_VALUE1).then(function (unmask5) {
            cy.log(unmask5.text())
            cy.xpath(maskedEINLocators.B_E_UNMASK_EIN_VALUE1).should('have.text', (unmask5.text()))
        })
        cy.xpath(maskedEINLocators.B_E_UNMASK_EIN_VALUE2).then(function (unmask6) {
            cy.log(unmask6.text())
            cy.xpath(maskedEINLocators.B_E_UNMASK_EIN_VALUE2).should('have.text', (unmask6.text()))
        })
    }
    maskAndVerifyForBusinessEntities() {
        cy.xpath(maskedEINLocators.MASKED_EIN_TOGGLE_BUTTON).click();
        cy.xpath(maskedEINLocators.B_E_MASK_EIN_VALUE1).then(function (mask5) {
            cy.log(mask5.text())
            cy.xpath(maskedEINLocators.B_E_MASK_EIN_VALUE1).should('have.text', (mask5.text()))
        })
        cy.xpath(maskedEINLocators.B_E_MASK_EIN_VALUE2).then(function (mask6) {
            cy.log(mask6.text())
            cy.xpath(maskedEINLocators.B_E_MASK_EIN_VALUE2).should('have.text', (mask6.text()))
        })
    }
}

export default MaskedEINFunctions;