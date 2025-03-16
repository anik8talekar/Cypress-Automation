import ExecutiveReviewLocators from "../locator files/ExecutiveReview.locators";
import DocumentCenterDocumentsLocators from "../locator files/DocumentCenterDocuments.locator";
import ApprovalLocators from "../locator files/Approval.locators";
import ReclassLocators from "../locator files/Reclass.locators";

var executiveReviewLocators = new ExecutiveReviewLocators
var documentCenterDocumentsLocators = new DocumentCenterDocumentsLocators
var approvalLocators = new ApprovalLocators
var reclassLocators = new ReclassLocators

import DataGenerator from "../../support/faker_test";
var testdata;
before(() => {
    cy.writeFile("cypress/fixtures/testdata.json",
        DataGenerator.generatetestData()
    );
    cy.readFile("cypress/fixtures/testdata.json").then((data) => {
        testdata = data;
    });
});

// Function to check if array is sorted in ascending order
const isSortedAscending = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
};

// Function to check if array is sorted in descending order
const isSortedDescending = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            return false;
        }
    }
    return true;
};
class ExecutiveReviewFunctions {
    VerifyUBTI_ECI_PASSIVE_FDAP_Grid() {
        cy.get(executiveReviewLocators.UBTI_ECI_PASSIVE_FDAP_GRID).should('exist')
    }
    ClickOnSSI_SSWFootnote() {
        cy.xpath(executiveReviewLocators.SSI_SSW_FOOTNOTE).click()
    }
    ClickOnFootnote926() {
        cy.xpath(executiveReviewLocators.FOOTNOTE_926).click()
    }
    Verify926Grid() {
        cy.get(executiveReviewLocators.GRID_926).should('exist')
    }
    ClickOnFootnote8865() {
        cy.xpath(executiveReviewLocators.FOOTNOTE_8865).click()
    }
    ClickOnFootnote8886() {
        cy.xpath(executiveReviewLocators.FOOTNOTE_8886).click()
    }
    ClickOnFootnoteInstallSale() {
        cy.xpath(executiveReviewLocators.FOOTNOTE_INSTALL_SALE).click()
    }
    ClickOnFootnoteEIPTransfers() {
        cy.xpath(executiveReviewLocators.FOOTNOTE_EIP_Transfers).click()
    }
    ClickOnFootnote199A() {
        cy.xpath(executiveReviewLocators.FOOTNOTE_199A).click()
    }
    ClickOnEyeIconInvestmentTaxID() {
        cy.xpath(executiveReviewLocators.EYE_ICON_INVESTMENT).eq(2).click({force: true})
    }
    ClickOnEyeIconInvestorTaxID() {
        cy.get(executiveReviewLocators.EYE_ICON_INVESTOR).click()
    }
    VerifyInvestmentTaxID() {
        cy.xpath(executiveReviewLocators.EYE_ICON_INVESTMENT).eq(2).should('have.text', ' 98-0009870 ')
    }
    selectDocuments() {
        cy.wait(3000)
        cy.xpath(documentCenterDocumentsLocators.DOCUMENT1_CHECKBOX).click({ force: true });
        cy.wait(3000)
        cy.xpath(documentCenterDocumentsLocators.DOCUMENT2_CHECKBOX).click({ force: true });
        cy.wait(3000)
    }
    compareDocuments() {
        cy.xpath(documentCenterDocumentsLocators.VIEW_SIDE_BY_SIDE).click();
        cy.xpath(documentCenterDocumentsLocators.COMPARE_DOCUMENTS_SECTION).should('be.visible')
        cy.wait(3000)
        cy.xpath(documentCenterDocumentsLocators.DOCUMENTS_COUNT_LABEL).should('have.text', 'Documents (2): ')
    }
    ClickOnInvestmentNameHeadingSorting() {
        cy.xpath(executiveReviewLocators.INVESTMENT_NAME_SORTING).eq(0).click()
        cy.wait(3000)
    }
    ClickOnFileNameSorting() {
        cy.xpath(executiveReviewLocators.FILE_NAME_SORTING).click()
        cy.wait(3000)
    }
    ClickOnColumnChooser() {
        cy.xpath(executiveReviewLocators.COLUMN_CHOOSER).click()
    }
    ClickOnColumnChooserDropdown() {
        cy.xpath(executiveReviewLocators.COLUMN_CHOOSER_DROPDOWN).click()
    }
    ClickOnDocNameDropdown() {
        cy.xpath(executiveReviewLocators.DOCUMENT_NAME_DROPDOWN).click({ force: true })
    }
    VerifyDocNameGrid() {
        cy.xpath(executiveReviewLocators.DOC_NAME_COLUMN).should('have.text', 'Document Name')
    }
    SelectSchedule() {
        cy.get(approvalLocators.SCHEDULE_DROPDOWN).eq(1).click()
        cy.get(approvalLocators.SCHEDULE_VIEW_CONTENT).contains('Federal K-1').click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    SelectTaxYearGrid() {
        cy.get(approvalLocators.SCHEDULE_DROPDOWN).eq(0).click()
        cy.get(approvalLocators.SCHEDULE_VIEW_CONTENT).contains('2023').click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    TypeFileName() {
        cy.get(reclassLocators.FILENAME_TEXTBOX).eq(2).click().type('2021 George Bluth K1_1_14.pdf')
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    VerifyExecutiveReviewGrid() {
        cy.get(executiveReviewLocators.EXECUTIVE_REVIEW_GRID).should('contain', 'Federal K-1')
        cy.get(executiveReviewLocators.EXECUTIVE_REVIEW_GRID).should('contain', '2023')
        cy.get(executiveReviewLocators.EXECUTIVE_REVIEW_GRID).should('contain', '2021 George Bluth K1_1_14.pdf')
    }
    ClickOnSaveButton() {
        cy.xpath(executiveReviewLocators.SAVE_BUTTON_SAVED_SEARCH).click()
    }
    VerifySavedSearch() {
        cy.xpath(executiveReviewLocators.SEARCH_BY_DROPDOWN).should('contain', ' Swaraj Automation ')
    }
    ClickOnSavedSearchTop() {
        cy.xpath(executiveReviewLocators.SAVED_SEARCHES_TOP_CORNOR).click().type('Swaraj Automation')
        cy.contains(' Swaraj Automation').click()
    }
    ClickOnTaxYearDropdown() {
        cy.xpath(executiveReviewLocators.TAX_YEAR_CHOOSER).click()
    }
    SelectTaxYear() {
        cy.wait(2000)
        cy.xpath(executiveReviewLocators.TAX_YEAR_DROPDOWN).contains(' 2023').dblclick()
        cy.wait(2000)
        cy.xpath(executiveReviewLocators.TAX_YEAR_DROPDOWN).contains(' 2022').click()
    }
    VerifyTaxYearGrid() {
        cy.get(executiveReviewLocators.EXECUTIVE_REVIEW_GRID).should('contain', '2023')
    }
    ClickOnExecutiveReviewCheckBox() {
        cy.xpath(executiveReviewLocators.EXECUTIVE_REVIEW_CHECKBOX_1).click({ force: true })
        cy.wait(2000)
        cy.xpath(executiveReviewLocators.EXECUTIVE_REVIEW_CHECKBOX_2).click({ force: true })
        cy.wait(2000)
        cy.xpath(executiveReviewLocators.EXECUTIVE_REVIEW_CHECKBOX_3).click({ force: true })
        cy.wait(2000)
    }
    compareDocumentsExecReviewDetails() {
        cy.xpath(documentCenterDocumentsLocators.VIEW_SIDE_BY_SIDE).click();
        cy.xpath(documentCenterDocumentsLocators.COMPARE_DOCUMENTS_SECTION).should('be.visible')
        cy.xpath(documentCenterDocumentsLocators.DOCUMENTS_COUNT_LABEL).should('have.text', 'Documents (2): ')
    }
    VerifyDocumentsCount() {
        cy.xpath(executiveReviewLocators.DOCUMENT_COUNT_DETAILS).should('contain', '2 ')
    }
    VerifySelectedDocs() {
        cy.xpath(executiveReviewLocators.SELECTED_DOC_DROPDOWN).click()
        cy.xpath(executiveReviewLocators.SEARCH_DOC).type('SITWELL COMPANY AIV (2022)')
        cy.xpath(executiveReviewLocators.SELECTED_DOC_NAMES).should('contain', ' SITWELL COMPANY AIV (2022)')
    }
    ClickOnExportAllDataButton() {
        cy.contains('Export All Data').click()
    }
    verifyDetailsCounterElements() {
        // cy.reload()
        cy.xpath(executiveReviewLocators.MISSING_FOOTNOTES).should('have.text', 'Missing footnotes')
        cy.xpath(executiveReviewLocators.MISSING_FOOTNOTES_VALUE).then(function (DGC1) {
            cy.log(DGC1.text())
            cy.xpath(executiveReviewLocators.MISSING_FOOTNOTES_VALUE).should('have.text', (DGC1.text()))
        })

        cy.xpath(executiveReviewLocators.UNEXPECTED_FOOTNOTES).should('have.text', 'Unexpected footnotes')
        cy.xpath(executiveReviewLocators.UNEXPECTED_FOOTNOTES_VALUE).then(function (DGC2) {
            cy.log(DGC2.text())
            cy.xpath(executiveReviewLocators.UNEXPECTED_FOOTNOTES_VALUE).should('have.text', (DGC2.text()))
        })

        cy.xpath(executiveReviewLocators.TOTAL_UBTI).should('have.text', 'Total UBTI')
        cy.xpath(executiveReviewLocators.TOTAL_UBTI_VALUE).then(function (DGC3) {
            cy.log(DGC3.text())
            cy.xpath(executiveReviewLocators.TOTAL_UBTI_VALUE).should('have.text', (DGC3.text()))

            const cleanedText1 = DGC3.text().replace(/\$/g, '').trim();
            cy.log(cleanedText1)

            cy.xpath(executiveReviewLocators.TOTALS_COLUMN).eq(0).invoke('text').then((text2) => {
                expect(cleanedText1).to.equal(text2);
            })
        })

        cy.xpath(executiveReviewLocators.TOTAL_ECI).should('have.text', 'Total ECI')
        cy.xpath(executiveReviewLocators.TOTAL_ECI_VALUE).then(function (DGC4) {
            cy.log(DGC4.text())
            cy.xpath(executiveReviewLocators.TOTAL_ECI_VALUE).should('have.text', (DGC4.text()))

            const cleanedText2 = DGC4.text().replace(/\$/g, '').trim();
            cy.log(cleanedText2)

            cy.xpath(executiveReviewLocators.TOTALS_COLUMN).eq(1).invoke('text').then((text3) => {
                expect(cleanedText2).to.equal(text3);
            })
        })

        cy.xpath(executiveReviewLocators.TOTAL_PASSIVE).should('have.text', 'Total PASSIVE')
        cy.xpath(executiveReviewLocators.TOTAL_PASSIVE_VALUE).then(function (DGC5) {
            cy.log(DGC5.text())
            cy.xpath(executiveReviewLocators.TOTAL_PASSIVE_VALUE).should('have.text', (DGC5.text()))

            const cleanedText3 = DGC5.text().replace(/-()\$/g, '').trim();
            cy.log(cleanedText3)
        })

        cy.xpath(executiveReviewLocators.TOTAL_FDAP).should('have.text', 'Total FDAP')
        cy.xpath(executiveReviewLocators.TOTAL_FDAP_VALUE).then(function (DGC6) {
            cy.log(DGC6.text())
            cy.xpath(executiveReviewLocators.TOTAL_FDAP_VALUE).should('have.text', (DGC6.text()))

            const cleanedText4 = DGC6.text().replace(/\$/g, '').trim();
            cy.log(cleanedText4)

            cy.xpath(executiveReviewLocators.TOTALS_COLUMN).eq(3).invoke('text').then((text5) => {
                expect(cleanedText4).to.equal(text5);
            })
        })
    }
    ClickOnResetGridButton() {
        cy.xpath(executiveReviewLocators.RESET_GRID_BUTTON).click()
    }
    ScrollExecReviewGrid() {
        cy.xpath(executiveReviewLocators.EXECUTIVE_REVIEW_GRID_SCROLLBAR).scrollIntoView().click({ force: true });
    }
    VerifyCustomColumnBtn() {
        cy.xpath(executiveReviewLocators.CUSTOM_COLUMN_SETTINGS_BTN).should('exist')
    }
    VerifySaveSearchBtn() {
        cy.xpath(executiveReviewLocators.SAVE_SEARCH_BUTTON).should('exist')
    }
    VerifyMaskedEINBtn() {
        cy.xpath(executiveReviewLocators.MASKED_EIN_BTN).should('exist')
    }
    ClickOnShow0ValuesBtn() {
        cy.xpath(executiveReviewLocators.SHOW_0_VALUES_BTN).eq(0).click()
    }
    ClickOnShowFinalValuesBtn() {
        cy.xpath(executiveReviewLocators.SHOW_0_VALUES_BTN).eq(1).click()
    }
    VerifyFinalValueColumn() {
        cy.xpath(executiveReviewLocators.FINAL_VALUE_COLUMN).eq(1).should('contain', 'Final Value')
    }
    Verify0ValueinGrid() {
        cy.xpath(executiveReviewLocators.EXECUTIVE_REVIEW_DETAILS_GRID).should('contain', '0')
    }
    VerifyExecReviewDetailsColumn() {
        cy.xpath(executiveReviewLocators.EXECUTIVE_REVIEW_DETAILS_GRID).should('contain', 'UBTI')
        cy.xpath(executiveReviewLocators.EXECUTIVE_REVIEW_DETAILS_GRID).should('contain', 'ECI')
        cy.xpath(executiveReviewLocators.EXECUTIVE_REVIEW_DETAILS_GRID).should('contain', 'PASSIVE')
        cy.xpath(executiveReviewLocators.EXECUTIVE_REVIEW_DETAILS_GRID).should('contain', 'FDAP')
    }
    VerifyTotals() {
        cy.xpath(executiveReviewLocators.TOTALS_COLUMN).eq(0).should('contain', '')
    }
    Verify8621TotalInstances() {
        cy.xpath(executiveReviewLocators.TOTAL_8621_INSTANCES).should('have.text', 'Total instances')
        cy.xpath(executiveReviewLocators.TOTAL_8621_INSTANCES_VALUE).then(function (DGC7) {
            cy.log(DGC7.text())
            cy.xpath(executiveReviewLocators.TOTAL_8621_INSTANCES_VALUE).should('have.text', (DGC7.text()))
        })      
    }
    ClickOnSavedSearch(){
        cy.xpath(executiveReviewLocators.SEARCH_BY_DROPDOWN).contains(' Swaraj Automation ').click()
    }
    ClickOnFavoriteIcon(){
        cy.xpath(executiveReviewLocators.FAVORITE_ICON_SAVED_SEARCH).eq(6).click({force: true})
    }
}

export default ExecutiveReviewFunctions;