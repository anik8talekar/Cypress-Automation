import DocumentCenterDocumentsLocators from "../locator files/DocumentCenterDocuments.locator";
import CSVExtractLocators from "../locator files/CSVExtract.locator";

var documentCenterDocumentsLocators = new DocumentCenterDocumentsLocators
var cSVExtractLocators = new CSVExtractLocators

class DocumentCenterDocumentsFunctions {
    selectFirstDocument() {
        cy.xpath(documentCenterDocumentsLocators.DOCUMENT1_CHECKBOX).click({ force: true });
    }
    selectDocuments() {
        cy.get(documentCenterDocumentsLocators.SCHEDULE_DROPDOWN).click();
        cy.xpath(cSVExtractLocators.FILTER_FEDERAL_K1).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
        cy.xpath(documentCenterDocumentsLocators.DOCUMENT1_CHECKBOX).click({ force: true });
        cy.xpath(documentCenterDocumentsLocators.DOCUMENT2_CHECKBOX).click({ force: true });
        cy.wait(5000);
    }
    compareDocuments() {
        cy.xpath(documentCenterDocumentsLocators.ACTIONS_DROPDOWN).click();
        cy.xpath(documentCenterDocumentsLocators.VIEW_SIDE_BY_SIDE).click();
        cy.xpath(documentCenterDocumentsLocators.COMPARE_DOCUMENTS_SECTION).should('be.visible')
        cy.xpath(documentCenterDocumentsLocators.DOCUMENTS_COUNT_LABEL).should('have.text', 'Documents (2): ')
    }
    unhideHideZeroValues() {
        cy.xpath(documentCenterDocumentsLocators.SHOW_ZERO_VALUES_TOOGLE_BTN).eq(0).click();
    }
    verifyVisibility() {
        cy.xpath(documentCenterDocumentsLocators.CODE_DROPDOWN).eq(0).click({ force: true });
        cy.wait(2000)

        cy.xpath(documentCenterDocumentsLocators.VERIFY_VISIBILITY).eq(0).should('have.text', 'Calendar year or tax year beginning date')
    }
    verifyInvisibility() {
        cy.xpath(documentCenterDocumentsLocators.VERIFY_VISIBILITY_2).should('not.have.text', 'Calendar year or tax year beginning date')
    }
    verifyCounterElements() {
        cy.reload()
        cy.xpath(documentCenterDocumentsLocators.ALL_FOOTNOTES).should('have.text', 'All Footnotes')
        cy.xpath(documentCenterDocumentsLocators.ALL_FOOTNOTES_VALUE).then(function (DGC1) {
            cy.log(DGC1.text())
            cy.xpath(documentCenterDocumentsLocators.ALL_FOOTNOTES_VALUE).should('have.text', (DGC1.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.MISSING_FOOTNOTES).should('have.text', 'Missing Footnotes')
        cy.xpath(documentCenterDocumentsLocators.MISSING_FOOTNOTES_VALUE).then(function (DGC2) {
            cy.log(DGC2.text())
            cy.xpath(documentCenterDocumentsLocators.MISSING_FOOTNOTES_VALUE).should('have.text', (DGC2.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.UNEXPECTED_FOOTNOTES).should('have.text', 'Unexpected Footnotes')
        cy.xpath(documentCenterDocumentsLocators.UNEXPECTED_FOOTNOTES_VALUE).then(function (DGC3) {
            cy.log(DGC3.text())
            cy.xpath(documentCenterDocumentsLocators.UNEXPECTED_FOOTNOTES_VALUE).should('have.text', (DGC3.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.ECI).should('have.text', 'ECI')
        cy.xpath(documentCenterDocumentsLocators.ECI_VALUE).then(function (DGC4) {
            cy.log(DGC4.text())
            cy.xpath(documentCenterDocumentsLocators.ECI_VALUE).should('have.text', (DGC4.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.UBTI).should('have.text', 'UBTI')
        cy.xpath(documentCenterDocumentsLocators.UBTI_VALUE).then(function (DGC5) {
            cy.log(DGC5.text())
            cy.xpath(documentCenterDocumentsLocators.UBTI_VALUE).should('have.text', (DGC5.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.PASSIVE).should('have.text', 'PASSIVE')
        cy.xpath(documentCenterDocumentsLocators.PASSIVE_VALUE).then(function (DGC6) {
            cy.log(DGC6.text())
            cy.xpath(documentCenterDocumentsLocators.PASSIVE_VALUE).should('have.text', (DGC6.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.FDAP).should('have.text', 'FDAP')
        cy.xpath(documentCenterDocumentsLocators.FDAP_VALUE).then(function (DGC7) {
            cy.log(DGC7.text())
            cy.xpath(documentCenterDocumentsLocators.FDAP_VALUE).should('have.text', (DGC7.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.SSI_SSW).should('have.text', 'SSI/SSW')
        cy.xpath(documentCenterDocumentsLocators.SSI_SSW_VALUE).then(function (DGC8) {
            cy.log(DGC8.text())
            cy.xpath(documentCenterDocumentsLocators.SSI_SSW_VALUE).should('have.text', (DGC8.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.INSTALL_SALES).should('have.text', 'Install Sales')
        cy.xpath(documentCenterDocumentsLocators.INSTALL_SALES_VALUE).then(function (DGC9) {
            cy.log(DGC9.text())
            cy.xpath(documentCenterDocumentsLocators.INSTALL_SALES_VALUE).should('have.text', (DGC9.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.FORM_8886).should('have.text', '8886')
        cy.xpath(documentCenterDocumentsLocators.FORM_8886_VALUE).then(function (DGC10) {
            cy.log(DGC10.text())
            cy.xpath(documentCenterDocumentsLocators.FORM_8886_VALUE).should('have.text', (DGC10.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.FORM_8865).should('have.text', '8865')
        cy.xpath(documentCenterDocumentsLocators.FORM_8865_VALUE).then(function (DGC11) {
            cy.log(DGC11.text())
            cy.xpath(documentCenterDocumentsLocators.FORM_8865_VALUE).should('have.text', (DGC11.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.FORM_926).should('have.text', '926')
        cy.xpath(documentCenterDocumentsLocators.FORM_926_VALUE).then(function (DGC12) {
            cy.log(DGC12.text())
            cy.xpath(documentCenterDocumentsLocators.FORM_926_VALUE).should('have.text', (DGC12.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.FORM_8621).should('have.text', '8621 (PFICs)')
        cy.xpath(documentCenterDocumentsLocators.FORM_8621_VALUE).then(function (DGC13) {
            cy.log(DGC13.text())
            cy.xpath(documentCenterDocumentsLocators.FORM_8621_VALUE).should('have.text', (DGC13.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.FORM_199A).should('have.text', '199A')
        cy.xpath(documentCenterDocumentsLocators.FORM_199A_VALUE).then(function (DGC14) {
            cy.log(DGC14.text())
            cy.xpath(documentCenterDocumentsLocators.FORM_199A_VALUE).should('have.text', (DGC14.text()))
        })

        cy.xpath(documentCenterDocumentsLocators.EIP_TRANSFERS).should('have.text', 'EIP - Transfers')
        cy.xpath(documentCenterDocumentsLocators.EIP_TRANSFERS_VALUE).then(function (DGC15) {
            cy.log(DGC15.text())
            cy.xpath(documentCenterDocumentsLocators.EIP_TRANSFERS_VALUE).should('have.text', (DGC15.text()))
        })

    }
    shuffleColumns() {
        cy.wait(5000)
        cy.xpath(documentCenterDocumentsLocators.APPROVED_COLUMN).drag('[aria-label="Column Schedule"]', { force: true })
        cy.xpath(documentCenterDocumentsLocators.SOURCE_COLUMN).click({ force: true });
        cy.xpath(documentCenterDocumentsLocators.FILENAME_COLUMN).drag('[aria-label="Column Investor Name"]', { force: true })
        cy.xpath(documentCenterDocumentsLocators.INVESTMENT_NAME_COLUMN).click({ force: true });
    }
    resetGrid() {
        cy.xpath(documentCenterDocumentsLocators.RESET_GRID).dblclick({ force: true });
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    viewDuplicates() {
        cy.get(documentCenterDocumentsLocators.DISPLAY_MATCHING_DUPLICATES_ICON).click();
    }
    verifyDuplicates() {
        cy.xpath(documentCenterDocumentsLocators.ORIGINAL_DOCUMENT).then(function (investorName) {
            cy.log(investorName.text())
            cy.xpath(documentCenterDocumentsLocators.INVESTMENT_NAME_1).should('contain', (investorName.text()))
            cy.xpath(documentCenterDocumentsLocators.INVESTMENT_NAME_2).should('contain', (investorName.text()))
            cy.xpath(documentCenterDocumentsLocators.INVESTMENT_NAME_3).should('contain', (investorName.text()))
            cy.xpath(documentCenterDocumentsLocators.INVESTMENT_NAME_4).should('contain', (investorName.text()))
            cy.xpath(documentCenterDocumentsLocators.INVESTMENT_NAME_5).should('contain', (investorName.text()))
        })
    }
    filterPendingDocuments() {
        cy.get(documentCenterDocumentsLocators.APPROVED_DROPDOWN).click();
        cy.xpath(documentCenterDocumentsLocators.APPROVED_DROPDOWN_PENDING).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    filterApprovedDocuments() {
        cy.xpath(documentCenterDocumentsLocators.RESET_GRID).dblclick({ force: true });
        cy.get(documentCenterDocumentsLocators.APPROVED_DROPDOWN).eq(0).click();
        cy.xpath(documentCenterDocumentsLocators.APPROVED_DROPDOWN_APPROVED).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    tryToDeleteApprovedDocument() {
        cy.wait(1000);
        cy.xpath(documentCenterDocumentsLocators.DOCUMENT1_CHECKBOX).click({ force: true });
        cy.xpath(documentCenterDocumentsLocators.ACTIONS_DROPDOWN).click();
        cy.xpath(documentCenterDocumentsLocators.DISABLED_DELETE_BUTTON).eq(0).should('have.attr', 'disabled');
    }
    deletePendingDocuments() {
        cy.wait(1000);
        cy.xpath(documentCenterDocumentsLocators.DOCUMENT1_CHECKBOX).click({ force: true });
        cy.xpath(documentCenterDocumentsLocators.ACTIONS_DROPDOWN).click();
        cy.xpath(documentCenterDocumentsLocators.DELETE).click();
        cy.xpath(documentCenterDocumentsLocators.DELETE_YES).click();
    }
    exportAllData() {
        cy.wait(5000);
        cy.get(documentCenterDocumentsLocators.EXPORT_ALL_DATA_BTN).click();
        cy.wait(5000);
    }
    exportToTaxDocs() {
        cy.xpath(documentCenterDocumentsLocators.ACTIONS_DROPDOWN).click();
        cy.xpath(documentCenterDocumentsLocators.EXPORT_TO_TAX_DOCS).click();
    }
    clickOnActions() {
        cy.xpath(documentCenterDocumentsLocators.ACTIONS_DROPDOWN).click();
    }


}

export default DocumentCenterDocumentsFunctions;