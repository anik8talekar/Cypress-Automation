/// <reference types= "cypress" />
import DashboardNullStateLocators from "../locator files/DashboardNullState.locators";
import DirectConnectLocators from "../locator files/DirectConnect.locator";

var directConnectLocators = new DirectConnectLocators
var dashboardNullStateLocators = new DashboardNullStateLocators()
const expectedURL = "https://dataflow-qa.pwcinternal.com/engagement/7e6b867c-178a-ef11-8473-000d3a582c88/document-center/documents";

class DashboardNullStateFunctions {

    openTheApp() {
        cy.visit(Cypress.env('baseURL'))
    }

    openEngagement() {
        cy.xpath(directConnectLocators.SEARCH).type('Dashboard Testing')
        cy.xpath(directConnectLocators.HIGHLIGHT).click();
    }

    VerifyEmptyWidget() {
        cy.xpath(dashboardNullStateLocators.EMPTY_UPLOAD_WIDGET).should('exist')
        cy.xpath(dashboardNullStateLocators.EMPTY_UPLOAD_WIDGET_TEXT).should('be.visible')
    }

    VerifyUploadWidgetTitle() {
        cy.xpath(dashboardNullStateLocators.UPLOAD_WIDGET_TITLE).should('be.visible')
    }

    VerifyUploadWidgetSubtitle() {
        cy.xpath(dashboardNullStateLocators.UPLOAD_PROCESSING_INFO_ICON).should('be.visible')
        cy.xpath(dashboardNullStateLocators.UPLOAD_FILE_BOX).should('be.visible')
        cy.xpath(dashboardNullStateLocators.UPLOAD_WIDGET_INFO_ICON).should('be.visible')

    }

    UploadFile() {
        cy.xpath(dashboardNullStateLocators.CHOOSE_FILE_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 George Bluth K1.pdf', { force: true })
        cy.xpath(dashboardNullStateLocators.CHOOSE_FILE_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 Lucille Bluth K1.pdf', { force: true })
    }

    VerifyUploadedFile() {
        cy.xpath(dashboardNullStateLocators.UPLOADED_FILE_TITLE).should('be.visible')
        cy.xpath(dashboardNullStateLocators.UPLOADED_FILE_LIST).should('be.visible')
        cy.xpath(dashboardNullStateLocators.VERIFY_UPLOADED_FILE).should('exist')
    }

    VerifyShowDetailsButton() {
        cy.xpath(dashboardNullStateLocators.UPLOAD_FILES_SHOW_DETAILS).click()
    }

    VerifyEmptyActualPriorYearWidget() {
        cy.xpath(dashboardNullStateLocators.EMPTY_ACTUAL_PRIOR_YEAR_WIDGET).should('be.visible')
    }

    VerifyActualPriorYearTitle() {
        cy.xpath(dashboardNullStateLocators.ACTUAL_PRIOR_YEAR_WIDGET_TITLE).should('be.visible')
        cy.xpath(dashboardNullStateLocators.ACTUAL_PRIOR_YEAR_WIDGET_INFO_ICON).should('be.visible')
    }

    VerifyActualPriorYearInfo() {
        cy.xpath(dashboardNullStateLocators.ACTUAL_PRIOR_YEAR_WIDGET_INFO_1).should('be.visible')
        cy.xpath(dashboardNullStateLocators.ACTUAL_PRIOR_YEAR_WIDGET_INFO_LINK).should('be.visible')
        cy.xpath(dashboardNullStateLocators.ACTUAL_PRIOR_YEAR_WIDGET_INFO_2).should('be.visible')
    }

    VerifyActualPriorYearDetailsLink() {
        cy.xpath(dashboardNullStateLocators.ACTUAL_PRIOR_YEAR_WIDGET_DETAILS_LINK).should('be.visible')
        cy.xpath(dashboardNullStateLocators.ACTUAL_PRIOR_YEAR_WIDGET_DETAILS_LINK).click()
    }

    VerifyEmptyCutoffAnalyzerWidget() {
        cy.xpath(dashboardNullStateLocators.EMPTY_CUTOFF_ANALYZER_WIDGET).should('be.visible')
    }

    VerifyCutoffAnalyzerTitle() {
        cy.xpath(dashboardNullStateLocators.CUTOFF_ANALYZER_WIDGET_TITLE).should('be.visible')
        cy.xpath(dashboardNullStateLocators.CUTOFF_ANALYZER_WIDGET_INFO_ICON).should('be.visible')
    }

    VerifyCutoffAnalyzerInfo() {
        cy.xpath(dashboardNullStateLocators.CUTOFF_ANALYZER_WIDGET_INFO_1).should('be.visible')
        cy.xpath(dashboardNullStateLocators.CUTOFF_ANALYZER_WIDGET_INFO_2).should('be.visible')
        cy.xpath(dashboardNullStateLocators.CUTOFF_ANALYZER_SAVED_CUTOFFS_DROPDOWN).should('be.visible')
    }

    VerifyCutoffAnalyzerDetailsLink() {
        cy.xpath(dashboardNullStateLocators.CUTOFF_ANALYZER_WIDGET_DETAILS_LINK).should('be.visible')
        cy.xpath(dashboardNullStateLocators.CUTOFF_ANALYZER_WIDGET_DETAILS_LINK).click()
    }

    VerifyCutoffAnalyzerUploadLink() {
        cy.xpath(dashboardNullStateLocators.DASHBOARD).click()
        cy.wait(2000)
        cy.xpath(dashboardNullStateLocators.CUTOFF_ANALYZER_WIDGET_UPLOAD_LINK).should('be.visible')
        cy.xpath(dashboardNullStateLocators.CUTOFF_ANALYZER_WIDGET_UPLOAD_LINK).click()
    }

    VerifyEmptyDocumentsWidget() {
        cy.xpath(dashboardNullStateLocators.EMPTY_DOCUMENTS_WIDGET).should('be.visible')
    }

    VerifyDocumentsWidgetTitle() {
        cy.xpath(dashboardNullStateLocators.DOCUMENTS_WIDGET_TITLE).should('be.visible')
    }

    VerifyDocumentsWidgetInfo() {
        cy.xpath(dashboardNullStateLocators.DOCUMENTS_WIDGET_INFO_ICON).should('be.visible')
        cy.xpath(dashboardNullStateLocators.DOCUMENTS_WIDGET_INFO_1).should('be.visible')
    }

    VerifyDocumentsWidgetDetailsLink() {
        cy.xpath(dashboardNullStateLocators.DOCUMENTS_WIDGET_DETAILS_LINK).should('be.visible')
        cy.xpath(dashboardNullStateLocators.DOCUMENTS_WIDGET_DETAILS_LINK).click()
    }

    VerifyDocumentsWidgetUploadLink() {
        cy.xpath(dashboardNullStateLocators.DASHBOARD).click()
        cy.wait(2000)
    }

    VerifyEmptyDiagnosticsWidget() {
        cy.xpath(dashboardNullStateLocators.EMPTY_DIAGNOSTICS_WIDGET).should('be.visible')
    }

    VerifyDiagnosticsWidgetTitle() {
        cy.xpath(dashboardNullStateLocators.DIAGNOSTICS_WIDGET_TITLE).should('be.visible')
    }

    VerifyDiagnosticsWidgetInfo() {
        cy.xpath(dashboardNullStateLocators.DIAGNOSTICS_WIDGET_INFO_ICON).should('be.visible')
        cy.xpath(dashboardNullStateLocators.DIAGNOSTICS_WIDGET_INFO_1).should('be.visible')
        cy.xpath(dashboardNullStateLocators.DIAGNOSTICS_WIDGET_INFO_2).should('be.visible')
    }

    VerifyDiagnosticsDocumentCenterLink() {
        cy.xpath(dashboardNullStateLocators.DIAGNOSTICS_DOCUMENT_CENTER_LINK).should('be.visible')
        cy.xpath(dashboardNullStateLocators.DIAGNOSTICS_DOCUMENT_CENTER_LINK).click()
        cy.wait(3000)
    }

    VerifyNewJurisdictionsWidget() {
        cy.xpath(dashboardNullStateLocators.SCROLL_TO_NEW_JURISDICTIONS_WIDGET).scrollIntoView()
        cy.wait(3000)
        cy.xpath(dashboardNullStateLocators.EMPTY_NEW_JURISDICTIONS_WIDGET).should('be.visible')
    }

    VerifyNewJurisdictionsWidgetTitle() {
        cy.xpath(dashboardNullStateLocators.NEW_JURISDICTIONS_WIDGET_TITLE).should('be.visible')
    }

    VerifyNewJurisdictionsWidgetInfo() {
        cy.xpath(dashboardNullStateLocators.NEW_JURISDICTIONS_WIDGET_INFO_ICON).should('be.visible')
        cy.xpath(dashboardNullStateLocators.NEW_JURISDICTIONS_WIDGET_INFO_1).should('be.visible')
    }

    VerifyNewJurisdictionsWidgetToggle() {
        cy.xpath(dashboardNullStateLocators.NEW_JURISDICTIONS_WIDGET_TOGGLE_BUTTON).should('be.visible')
    }

    VerifyNewJurisdictionsWidgetUploadLink() {
        cy.xpath(dashboardNullStateLocators.NEW_JURISDICTIONS_WIDGET_UPLOAD_LINK).should('be.visible')
        cy.xpath(dashboardNullStateLocators.NEW_JURISDICTIONS_WIDGET_UPLOAD_LINK).click()
    }

    VerifyNewJurisdictionsWidgetDetailsLink() {
        cy.xpath(dashboardNullStateLocators.DASHBOARD).click()
        cy.wait(2000)
        cy.xpath(dashboardNullStateLocators.NEW_JURISDICTIONS_WIDGET_DETAILS_LINK).should('be.visible')
        cy.xpath(dashboardNullStateLocators.NEW_JURISDICTIONS_WIDGET_DETAILS_LINK).click()
    }
}
export default DashboardNullStateFunctions