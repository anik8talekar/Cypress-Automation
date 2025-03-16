import AuditLogsLocators from "../locator files/AuditLogs.locators";

var auditLogsLocators = new AuditLogsLocators

const now = new Date(2023, 5, 25)

class AuditLogsFunctions {
    ClickOnFirstCheckbox() {
        cy.get(auditLogsLocators.SELECT_FIRST_DOC).click()
        cy.get(auditLogsLocators.SELECT_SECOND_DOC).click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnActionsDropdown() {
        cy.contains(' Actions ').click()
    }
    ClickOnApproveOption() {
        cy.contains('Approve').click({ force: true })
    }
    ClickOnExecutiveReviewTab() {
        cy.contains(' Executive Review ').click()
    }
    ClickOnExpectedDocumentsTab() {
        cy.contains(' Expected Documents ').click()
    }
    ClickOnBusinessEntitiesTab() {
        cy.contains(' Business Entities ').click()
    }
    ClickOnImportAndExportDataTab() {
        cy.contains(' Import & Export Data ').click()
    }
    TurnOFFToggleButton() {
        //  cy.get(auditLogsLocators.MASKED_EIN_TOGGLE_BUTTON).click()
    }
    ClickOnAuditLogsTab() {
        cy.contains(' Audit Logs ').click()
    }
    ClickOnApprovalLogsTab() {
        cy.contains(' Approval Logs ').click()
    }
    ClickOn24hPeriod() {
        cy.xpath(auditLogsLocators.PERIOD_24h).click({ multiple: true })
    }
    VerifyApprovedFileName() {
        cy.xpath(auditLogsLocators.APPROVAL_LOGS).click()
        cy.get(auditLogsLocators.VERIFY_FILE_NAME).should('contain', 'Approve')
    }
    VerifyPageAuditLogs() {
        cy.wait(5000)
        cy.xpath(auditLogsLocators.UNMASKING_EIN_LOG_GRID).should('contain', 'dautomatio004')
        cy.xpath(auditLogsLocators.UNMASKING_EIN_LOG_GRID).should('contain', 'Unmask')
    }
    ClickOnPwCDocToggleBtn() {
        cy.get(auditLogsLocators.PWC_DOC_COLLECTION_TOGGLE_BTN).click({ force: true })
    }
    ClickOnYesPopup() {
        cy.contains(' Yes ').click()
    }
    ClickOnELLanguageConfirmation() {
        cy.contains(' EL Language Confirmation ').click()
    }
    VerifyAction() {
        cy.wait(4000)
        cy.get(auditLogsLocators.VERIFY_PAGE).should('contain', 'Confirmation')
    }
    ClickOnCanoeSettingsTab() {
        cy.contains('Canoe Settings').click({ force: true })
    }
    ClickOnTaxDocsSettingsTab() {
        cy.contains('Tax Docs Settings').click()
    }
    SelectDates() {
        // Calculate first and last date of the current month
        const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        const lastDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

        // Format the date to use in `aria-label` if available, e.g., "Friday, November 1, 2024"
        const firstDayLabel = firstDayOfMonth.toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        });
        const lastDayLabel = lastDayOfMonth.toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        });

        // Open the date picker (assuming a button or input opens it)
        cy.xpath('//span[@aria-controls="datepicker-"]').click();
        cy.wait(3000)


        // Select the last date of the current month
        cy.get('span') // Select all span elements
            .filter(`[value="${lastDayOfMonth.getDate()}"]`) // Match the value attribute (e.g., 31 for the last day)
            .filter('[aria-hidden="false"]') // Ensure it's visible
            .filter('[aria-disabled="false"]') // Ensure it's enabled
            .click({force: true});
    }
}
export default AuditLogsFunctions;