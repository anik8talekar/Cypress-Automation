import ThumbsUpDownLocators from "../locator files/Thumbs_Up_Down.locators";
import ConsolidatedReportsLocators from "../locator files/consolidatedReport.locators"

var thumbsUpDownLocators = new ThumbsUpDownLocators
var consolidatedReportsLocators = new ConsolidatedReportsLocators

class ThumbsUpDownFunctions {
    VerifyThumbsUpDownIcon() {
        cy.xpath(thumbsUpDownLocators.THUMBS_UP_DOWN_ICON).should('be.exist')
    }
    ClickOnResetGridButton() {
        cy.xpath(thumbsUpDownLocators.RESET_GRID_BUTTON).click()
    }
    ClickOnEyeIcon8621() {
        cy.xpath(thumbsUpDownLocators.EYE_ICON_8621).eq(0).click()
    }
    ClickOnThumbsUpButton() {
        cy.xpath(thumbsUpDownLocators.THUMBS_UP_DOWN_BTN).eq(0).click()
    }
    VerifySuccessMessage() {
        cy.get(consolidatedReportsLocators.SUCCESS_MESSAGE).should('contain', ' Thank you for your feedback! ')
        cy.log('SUCCESS')
        cy.wait(5000);
    }
    VerifyThumbsUpButtonFilled() {
        cy.xpath(thumbsUpDownLocators.THUMBS_UP_DOWN_BTN).eq(0).invoke('text').should('not.be.empty')
    }
    VerifyThumbsUpToolTip() {
        cy.xpath(thumbsUpDownLocators.THUMBS_UP_DOWN_BTN).eq(0).realHover()
        cy.xpath(thumbsUpDownLocators.TOOLTIP_CONTENT).should('be.visible').then($tooltip => {
            const tooltipText = $tooltip.text()
            cy.log('Tooltip Message : ' + tooltipText)
        })
    }
    VerifyThumbsDownToolTip() {
        cy.xpath(thumbsUpDownLocators.THUMBS_UP_DOWN_BTN).eq(1).realHover()
        cy.xpath(thumbsUpDownLocators.TOOLTIP_CONTENT).should('be.visible').then($tooltip => {
            const tooltipText = $tooltip.text()
            cy.log('Tooltip Message : ' + tooltipText)
        })
    }
    ClickOnThumbsDownButton() {
        cy.xpath(thumbsUpDownLocators.THUMBS_UP_DOWN_BTN).eq(1).click()
    }
    ClickOnReasonDropdown() {
        cy.xpath(thumbsUpDownLocators.REASON_THUMBS_DOWN).click()
    }
    SelectReason() {
        cy.xpath(thumbsUpDownLocators.CHOOSE_REASON).eq(2).click()
        cy.wait(3000);
    }
    ClickOnBlankArea() {
        cy.xpath(thumbsUpDownLocators.THUMBS_DOWN_BLANK_AREA).click({force: true})
    }
    TypeDescription() {
        cy.xpath(thumbsUpDownLocators.DESCRIPTION_FIELD).type('Automation')
    }
    ClickOnSaveButton() {
        cy.xpath(thumbsUpDownLocators.SAVE_BUTTON).click()
    }
    ClickOnUploadFilesTab() {
        cy.xpath(thumbsUpDownLocators.UPLOAD_FILES_TAB).click()
    }
    SearchFileNameUpload(){
        cy.xpath(thumbsUpDownLocators.SEARCH_FILE_NAME).eq(0).type('Fed')
    }
    ClickOnExpandIcon() {
        cy.xpath(thumbsUpDownLocators.EXPAND_FILE_ICON).eq(0).click()
    }
    VerifyTaxYearColumnUpload(){
        cy.xpath(thumbsUpDownLocators.TAX_YEAR_COLUMN_UPLOAD).should('be.visible')
    }
    VerifyTaxYearMatches(){
        cy.xpath(thumbsUpDownLocators.SELECT_ROW).each(($row) => {
            const fileNameSelector = 'upload-document-title.ng-star-inserted > awm-button.ng-star-inserted > .awm-button > .ap-button > div';
            const taxYearSelector = '[comp-id="397"]';
            // Get the file name text
            cy.wrap($row).find(fileNameSelector).invoke('text').then((fileName) => {
              // Get the tax year text
              cy.wrap($row).find(taxYearSelector).invoke('text').then((taxYear) => {
                // Assert that the file name contains the tax year
                expect(fileName).to.include(taxYear);
              });
            });
          });
    }
    clickOnScheduleItemDEtails(){
        cy.contains(' Federal Overflow - Schedule Item Details').click()
    }
    ClickOnForm1040Button(){
        cy.get(thumbsUpDownLocators.FORM_1040_BUTTON).click()
    }
}
export default ThumbsUpDownFunctions;