import Smartk1Locators from "../locator files/Smart-k1.locators"

var smartK1Locators = new Smartk1Locators

class SmartK1Functions{
    SearchEngagement(){
        cy.xpath(smartK1Locators.SEARCH_ENGAGEMENT).type(' DATAFLOW_QA_AUTOMATION ')
        cy.get(smartK1Locators.CLICK_ENGAGEMENT).click()
    }
    ClickOnImportAndExportTab() {
        cy.xpath(smartK1Locators.IMPORT_AND_EXPORT_TAB).click()
    }
    ClickOnTaxYearDropDown() {
        cy.xpath(smartK1Locators.TAX_YEAR_DROPDOWN).click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');       
    }
    Select2021() {
        cy.contains('2021').click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnRequestEntityDropDown() {
        cy.get(smartK1Locators.REQUEST_ENTITY_DROPDOWN).contains('Request Entity ').click()
        cy.wait(4000)
    }
    SelectEntity() {
        cy.get(smartK1Locators.SELECT_ENTITY_CHECKBOX).eq(3).click({ force: true })
    }
    SelectLucilleBluthFundEntity() {
        cy.get(smartK1Locators.LUCILLE_BLUTH_FUND_ENTITY).contains('LUCILLE BLUTH FUND, 123-45-6789, F02 ').click()
    }
    ClickOnRequestButton() {
        cy.get(smartK1Locators.REQUEST_ENTITY_DROPDOWN).contains(' Request ').click()
    }
    CheckApprovalStatus() {
        cy.get(smartK1Locators.VERIFY_APPROVAL_REQUESTED).should('contain', 'Awaiting Documents')
    }
    SelectActionsCheckbox() {
        cy.xpath(smartK1Locators.ACTIONS_CHECKBOX).eq(4).click()
    }
    ClickOnDeleteIcon() {
        cy.xpath(smartK1Locators.DELETE_BUTTON).eq(1).click()
    }
    VerifyEntityIsDeleted() {
        cy.get(smartK1Locators.VERIFY_DELETED_ENTITY).should('not.include.text', 'AMERICAS')
    }
    ClickOnToggleButton() {
        cy.get(smartK1Locators.TOGGLE_BUTTON).click()
    }
    ClickOnYesPopup() {
        cy.get(smartK1Locators.YES_POPUP).click()
    }
    ClickOnAuditLogs() {
        cy.get(smartK1Locators.AUDIT_LOGS_TAB).contains(' Audit Logs ').click()
    }
    ClickOnELLanguageConfirmation() {
        cy.contains(' EL Language Confirmation ').click()
    }
    ClickOnDateRange() {
        // Get current date
        const currentDate = new Date();

        // Get first date of current month
        const firstDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const formattedFirstDate = formatDate(firstDateOfMonth);

        // Get last date of current month
        const lastDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const formattedLastDate = formatDate(lastDateOfMonth);

        // Format date as mm/dd/yyyy
        function formatDate(date) {
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const year = date.getFullYear();
            return `${month}/${day}/${year}`;
        }

        console.log("First Date of Current Month:", formattedFirstDate);
        console.log("Last Date of Current Month:", formattedLastDate);

        // Type first date
        cy.xpath("//input[@placeholder='MM/dd/yyyy to MM/dd/yyyy']").type(formattedFirstDate);

        // Type last date
        cy.xpath("//input[@placeholder='MM/dd/yyyy to MM/dd/yyyy']").type(formattedLastDate);

        cy.xpath("//span[@aria-label='Choose date']").dblclick();
    }
    VerifyActionColumn() {
        cy.xpath(smartK1Locators.VERIFY_ACTION).should('contain', 'Confirmation')
    }
    VerifyApprovalRequested() {
        cy.get(smartK1Locators.VERIFY_APPROVAL_REQUESTED).should('contain', 'Approval Requested')
    }
    VerifyDocumentsCount() {
        cy.get(smartK1Locators.VERIFY_DOCUMENTS_COUNTER).should('contain', ' 38 ')
    }
    VerifyApproved() {
        cy.get(smartK1Locators.VERIFY_APPROVAL_REQUESTED).should('contain', 'Approved')
    }
    ClickOnUserTab() {
        cy.contains(' User ').click()
    }
    ClickOnAvailableDocumentsTab() {
        cy.contains(' Available Documents ').click()
    }
    VerifyApprovalRequestedCounter() {
        cy.get(smartK1Locators.APPROVAL_REQUESTED_TEXT).eq(0).should('have.text', ' Approval Requested ')
        cy.xpath(smartK1Locators.AVAILABLE_DOCUMENTS_COUNTER).then(function (ARC) {
            cy.log(ARC.text())
            cy.xpath(smartK1Locators.AVAILABLE_DOCUMENTS_COUNTER).should('have.text', (ARC.text()))
        })
    }
    VerifyAvailableForProcessingCounter() {
        cy.get(smartK1Locators.APPROVAL_REQUESTED_TEXT).eq(1).should('have.text', '  Available For Processing  ')
        cy.xpath(smartK1Locators.AVAILABLE_DOCUMENTS_COUNTER).then(function (AFP) {
            cy.log(ARC.text())
            cy.xpath(smartK1Locators.AVAILABLE_DOCUMENTS_COUNTER).should('have.text', (AFP.text()))
        })
    }
    VerifyTRACKRetrivedCounter() {
        cy.get(smartK1Locators.APPROVAL_REQUESTED_TEXT).eq(2).should('have.text', '  TRACK Documents Retrieved  ')
        cy.get(smartK1Locators.AVAILABLE_DOCUMENTS_COUNTER).then(function (TRC) {
            cy.log(ARC.text())
            cy.get(smartK1Locators.AVAILABLE_DOCUMENTS_COUNTER).should('have.text', (TRC.text()))
        })
    }
    ClickOnApproveIcon() {
        cy.get(smartK1Locators.APPROVE_ICON).eq(1).click()
    }
    ClickOnRejectIcon() {
        cy.get(smartK1Locators.REJECT_ICON).eq(0).click({ force: true })
    }
    ClickOnRequestAgainIcon() {
        cy.get(smartK1Locators.REQUEST_AGAIN_ICON).eq(0).click({ force: true })
    }
    ClickOnProcessIcon() {
        cy.get(smartK1Locators.PROCESS_ICON).eq(0).click()
    }
    ClickOnDownloadIconAvailableDoc() {
        cy.get(smartK1Locators.DOWNLOAD_ICON).eq(0).click({ force: true })
    }
    SelectDatePicker() {
        cy.get(smartK1Locators.DATE_PICKER).click()
        cy.get(smartK1Locators.DATES)
            .each(($el, index, $list) => {
                var dateName = $el.text()
                if (dateName == '16') {
                    cy.wrap($el).click()
                }
            })
    }

}
export default SmartK1Functions;