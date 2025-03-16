import UploadFileScreenLocators from "../locator files/UploadFileScreen.locators";
import Smartk1Locators from "../locator files/Smart-k1.locators"
import ExpDocumentsRolloverLocators from "../locator files/ExpDocumentsRollover.locators"


var smartK1Locators = new Smartk1Locators
var expDocumentsRolloverLocators = new ExpDocumentsRolloverLocators
var uploadFileScreenLocators = new UploadFileScreenLocators

class UploadFileScreenFunctions {

    ClickOnUploadFilesTab() {
        cy.contains(' Upload Files ').click()
    }
    ClickOnSearchIconFileName() {
        cy.xpath(uploadFileScreenLocators.SEARCH_ICON_FILE_NAME).click()
    }
    ClickOnContainsOption() {
        cy.get(uploadFileScreenLocators.CONTAINS_OPTION).contains('Contains').click({ force: true })
    }
    TypeFileName() {
        cy.xpath(uploadFileScreenLocators.SEARCH_ICON_FILE_NAME).type('George Bluth')
    }
    ClickOnSearchIconPages() {
        cy.xpath(uploadFileScreenLocators.SEARCH_ICON_FILE_NAME).eq(2).click({ force: true })
    }
    ClickOnEqualOption() {
        cy.get(uploadFileScreenLocators.CONTAINS_OPTION).contains('Equals').click()
    }
    TypeNoOfPages() {
        cy.get(uploadFileScreenLocators.TYPE_FILE_NAME).eq(2).type('14')
    }
    VerifyFileName() {
        cy.xpath(uploadFileScreenLocators.VERIFY_FILE_NAME).should('contain', '2021 George Bluth K1.pdf')
    }
    VerifyPageNo() {
        cy.xpath(uploadFileScreenLocators.VERIFY_FILE_NAME).should('contain', '14')
    }
    ClickOnUser() {
        cy.get(uploadFileScreenLocators.SEARCH_ICON_FILE_NAME).eq(2).click({ force: true })
    }
    TypeUserName() {
        cy.xpath(uploadFileScreenLocators.USER_FIELD).type('Dataflow Automation')
    }
    VerifyUser() {
        cy.getTestData().then((data) => {
            cy.xpath(uploadFileScreenLocators.VERIFY_FILE_NAME).should('contain', data['VerifyUser'])
        })
    }
    ClickOnColumnChooserLogo() {
        cy.xpath(uploadFileScreenLocators.COLUMN_CHOOSER_LOGO).click()
    }
    ClickOnUploadIdCheckbox() {
        cy.xpath(uploadFileScreenLocators.UPLOADID_CHECKBOX).click()
    }
    ClickOnUploadIdCheckboxUncheck() {
        cy.xpath(uploadFileScreenLocators.UPLOADID_CHECKBOX).eq(1).click()
    }
    ClickOnCloseOption() {
        cy.xpath(uploadFileScreenLocators.CLOSE_OPTION).click()
    }
    VerifyUploadId() {
        cy.wait(3000)
        cy.xpath(uploadFileScreenLocators.VERIFY_FILE_NAME).should('contain', 'Upload ID')
    }
    ClickOnDocumentsCheckbox() {
        cy.xpath(uploadFileScreenLocators.DOCUMENTS_CHECKBOX).eq(4).click()
    }
    VerifyRemovedColumn() {
        cy.xpath(uploadFileScreenLocators.VERIFY_FILE_NAME).should('not.contain', 'Upload ID')
    }
    ClickOnExportToExcelButton() {
        cy.xpath(uploadFileScreenLocators.EXPORT_TO_EXCEL_ICON).click()
    }
    ClickOnPagesCheckBox(){
        cy.xpath(uploadFileScreenLocators.TOTAL_PAGES_CHECKBOX).click()
    }
}
export default UploadFileScreenFunctions