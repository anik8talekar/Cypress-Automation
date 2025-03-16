import FoFAutomationLocators from "../locator files/FoFAutomation.locators";
import ApprovalLocators from "../locator files/Approval.locators";
import DocumentCenterDocumentsLocators from "../locator files/DocumentCenterDocuments.locator";
import ConsolidatedReportsLocators from "../locator files/consolidatedReport.locators"

var foFAutomationLocators = new FoFAutomationLocators
var approvalLocators = new ApprovalLocators
var documentCenterDocumentsLocators = new DocumentCenterDocumentsLocators
var consolidatedReportsLocators = new ConsolidatedReportsLocators

class FoFAutomationFunctions {
    SelectTaxYear2023() {
        cy.get(approvalLocators.SELECT_TAX_YEAR).eq(3).click()
        cy.xpath(foFAutomationLocators.TAX_YEAR_DROPDOWN_DOC_CENTER).contains('2023').click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnResetGridButton() {
        cy.xpath(foFAutomationLocators.RESET_GRID_BUTTON).click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnActionsDropdown() {
        cy.xpath(foFAutomationLocators.ACTIONS_DROPDOWN).click()
    }
    SelectDocument() {
        cy.xpath(documentCenterDocumentsLocators.DOCUMENT1_CHECKBOX).click({ force: true });
    }
    ClickOnGenerateFoFExtract() {
        cy.xpath(foFAutomationLocators.GENERATE_FOF_EXTRACT_OPTION).click()
    }
    VerifySuccessMessage() {
        cy.wait(3000);
        cy.get(consolidatedReportsLocators.SUCCESS_MESSAGE).should('contain', ' Process to generate FoF Extract has started ')
        cy.log('SUCCESS')
        cy.wait(3000);
    }
    DownloadExtractsTab() {
        cy.contains(' Download Extracts ').click()
    }
    VerifyExtractedFileName() {
        cy.getTestData().then((data)=>{
        cy.xpath(foFAutomationLocators.DOWNLOAD_EXTRACTS_GRID).should('contain', data['FOF_EXTRACTED_FILE_NAME'])
        })
    }
    VerifyCompleteStatus() {
        cy.xpath(foFAutomationLocators.DOWNLOAD_EXTRACTS_GRID).should('contain', ' Complete')
    }
    ClickOnExportButton() {
        cy.xpath(foFAutomationLocators.EXPORT_BUTTON).click()
    }
    ClickOnDownloadBtn() {
        cy.xpath(foFAutomationLocators.DOWNLOAD_BTN).eq(0).click({force: true})
    }
    SelectFederalK3() {
        cy.get(approvalLocators.SCHEDULE_DROPDOWN).eq(4).click()
        cy.get(approvalLocators.SCHEDULE_VIEW_CONTENT).contains('Federal K-3').click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    SelectTaxYear2022() {
        cy.get(approvalLocators.SELECT_TAX_YEAR).eq(3).click()
        cy.xpath(foFAutomationLocators.TAX_YEAR_DROPDOWN_DOC_CENTER).contains('2022').click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    VerifyDisableGenerateFoFExtract() {
        cy.xpath(foFAutomationLocators.FOF_EXTRACT_DISABLE_BTN).should('have.attr', 'disabled')
        cy.get(foFAutomationLocators.DISABLE_FOF_EXTRACT_OPTION).trigger('mouseover')
        cy.wait(4000);
    }
    VerifyDisabledToolTip() {
        cy.xpath(foFAutomationLocators.TOOLTIP_CONTENT).should('be.visible').then($tooltip => {
            const tooltipText = $tooltip.text()
            cy.log('Tooltip Message : ' + tooltipText)
        })
    }
    ClickOnBusinessEntitesTab() {
        cy.xpath(foFAutomationLocators.BUSINESS_ENTITIES_TAB).click()
    }
    VerifyBusinessEntitesScrollBar() {
        cy.xpath(foFAutomationLocators.BUSINESS_ENTITIES_SCROLLBAR).should('be.visible')
    }
    ScrollBusinessEntitiesScrollBar() {
        cy.wait(2000);
        cy.xpath(foFAutomationLocators.BUSINESS_ENTITIES_SCROLLBAR).scrollIntoView({ force: true });
        cy.wait(2000);
    }
    SelectTaxYear2022() {
        cy.get(approvalLocators.SELECT_TAX_YEAR).eq(3).click()
        cy.xpath(foFAutomationLocators.TAX_YEAR_DROPDOWN_DOC_CENTER).contains('2022').click()
    }
    SelectScheduleItemDetails() {
        cy.xpath(foFAutomationLocators.VIEW_BY_DROPDOWN).contains(' Federal Overflow - Schedule Item Details').click()
    }
   ClickOnExpandIcon(){
        cy.xpath(foFAutomationLocators.EXPAND_SCHEDULE_ITEM_DETAILS).eq(0).click()
        cy.xpath(foFAutomationLocators.EXPAND_SCHEDULE_ITEM_DETAILS).eq(1).click()
   }   
    VerifyEnabledGenerateFoFExtract() {
        cy.xpath(foFAutomationLocators.GENERATE_FOF_EXTRACT_OPTION).should('be.visible')
    }
    VerifyEnabledToolTip() {
        cy.xpath(foFAutomationLocators.GENERATE_FOF_EXTRACT_OPTION).trigger('mouseover')
        cy.wait(4000);
        cy.xpath(foFAutomationLocators.TOOLTIP_CONTENT).should('be.visible').then($tooltip => {
            const tooltipText = $tooltip.text()
            cy.log('Tooltip Message : ' + tooltipText)
        })
    }
    VerifyNoOfDocsExtracted() {
        cy.xpath(foFAutomationLocators.DOWNLOAD_EXTRACTS_GRID).should('contain', '1')
    }
    SelectStateSource() {
        cy.xpath(foFAutomationLocators.VIEW_BY_DROPDOWN).contains(' State Source - Fed to State Comparison').click()
    }
    VerifyNoExpandIconFederal() {
        cy.xpath(foFAutomationLocators.FEDERAL_ROW).eq(1).within(() => {
            cy.get('.expand-icon').should('not.exist')
        })
    }
    SearchFileNameExtracts(){
        cy.xpath(foFAutomationLocators.SEARCH_FILENAME_EXTRACTS).eq(0).type('FoF_Extract_2024-08-12--02-35-44.xlsx')
    }

}
export default FoFAutomationFunctions;