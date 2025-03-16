import ConsolidatedReportsLocators from "../locator files/consolidatedReport.locators"

var consolidatedReportsLocators = new ConsolidatedReportsLocators();

class ConsolidatedReportsFunctions {
    openTheApp() {
        cy.visit(Cypress.env('baseURL'))
    }
    openEngagement() {
        cy.xpath(consolidatedReportsLocators.EXISTING_ENGAGEMENT).click()
    }
    ClickOnDocumentCenterTab() {
        cy.get(consolidatedReportsLocators.DOCUMENT_CENTER_TAB).eq(1).click()
    }
    ClickOnDocuments() {
        cy.contains(' Documents ').click()
    }
    SelectBulkDocuments(){
        cy.getTestData().then((data)=>{

        cy.get(data['BULK_DOCUMENTS_SELECT1']).click()
        cy.get(data['BULK_DOCUMENTS_SELECT2']).click()
        cy.get(consolidatedReportsLocators.ACTIONS_DROPDOWN).contains(' Actions ').click()
        cy.get(consolidatedReportsLocators.CONSOLIDATED_REPORT_OPTION).click()
        cy.xpath(consolidatedReportsLocators.EXPORT_BUTTON_POPUP).click()
        })
    }
    VerifySuccessMessage(){
        cy.get(consolidatedReportsLocators.SUCCESS_MESSAGE).should('have.text','SUCCESS Process to generate a consolidated report has started ')
        cy.log('SUCCESS')
        cy.wait(5000);
    }
    ClickOnDownloadExtract(){
        cy.xpath(consolidatedReportsLocators.DOWNLOAD_EXTRACT_TAB).click()
    }
    ClickOnDownloadButton(){
       cy.xpath(consolidatedReportsLocators.DOWNLOAD_BUTTON).eq(0).click({ force: true})
    }
    VerifyCompleteMessage(){
        cy.get(consolidatedReportsLocators.COMPLETE_MESSAGE).should('contain',' Complete')
        cy.log('Complete')
    }
}
export default ConsolidatedReportsFunctions