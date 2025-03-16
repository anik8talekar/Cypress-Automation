import ExpectedDocumentsEditsLocators from "../locator files/ExpectedDocumentsEdits.locator";

var expectedDocumentsEditsLocators = new ExpectedDocumentsEditsLocators();

class ExpectedDocumentsEditsFunctions {


    ClickOnExpectedDocuments() {
        cy.xpath(expectedDocumentsEditsLocators.EXPECTED_DOCUMENTS).click()
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible');
    }

    AddExpectedDocument() {
        cy.xpath(expectedDocumentsEditsLocators.ADD_EXPECTED_DOCUMENT).click()
        cy.xpath(expectedDocumentsEditsLocators.EXPECTED_DOCUMENT_TAX_YEAR).type("2023")
        cy.xpath(expectedDocumentsEditsLocators.SCHEDULE_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SCHEDULE_NAME).click()
        cy.xpath(expectedDocumentsEditsLocators.INVESTOR_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_INVESTOR).click()
        cy.xpath(expectedDocumentsEditsLocators.INVESTMENT_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_INVESTMENT).click()
        cy.xpath(expectedDocumentsEditsLocators.IS_FOREIGN_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_FOREIGN).click()
        cy.xpath(expectedDocumentsEditsLocators.CATEGORY_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_CATEGORY).click()
        cy.xpath(expectedDocumentsEditsLocators.SAVE_BUTTON).click({force:true})
        cy.wait(3000)
        cy.xpath(expectedDocumentsEditsLocators.CLOSE_SLIDEOUT_BUTTON).click()
        cy.wait(5000)
        cy.xpath(expectedDocumentsEditsLocators.DOCUMENTS_TAB).click()
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible')
    }

    AddExpectedDocument2() {
        cy.xpath(expectedDocumentsEditsLocators.ADD_EXPECTED_DOCUMENT).click()
        cy.xpath(expectedDocumentsEditsLocators.EXPECTED_DOCUMENT_TAX_YEAR).type("2023")
        cy.xpath(expectedDocumentsEditsLocators.SCHEDULE_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SCHEDULE_NAME).click()
        cy.xpath(expectedDocumentsEditsLocators.DIRECT_CONNECT_TOGGLE_BUTTON).click()
        cy.xpath(expectedDocumentsEditsLocators.TRACK_PROFILE_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_TRACK_PROFILE).click()
        cy.xpath(expectedDocumentsEditsLocators.ALLOCABLE_ITEM_MAPPING_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_ALLOCABLE_ITEM_MAPPING).click()
        cy.xpath(expectedDocumentsEditsLocators.INVESTOR_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_INVESTOR_2).click()
        cy.xpath(expectedDocumentsEditsLocators.INVESTMENT_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_INVESTMENT_2).click()
        cy.xpath(expectedDocumentsEditsLocators.ASSIGN_TO_TRACK_RADIO_BUTTON).click()
        cy.xpath(expectedDocumentsEditsLocators.IS_FOREIGN_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_FOREIGN).click()
        cy.xpath(expectedDocumentsEditsLocators.CATEGORY_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_CATEGORY).click()
        cy.xpath(expectedDocumentsEditsLocators.SAVE_BUTTON).click({force:true})
        cy.wait(3000)
        cy.xpath(expectedDocumentsEditsLocators.CLOSE_SLIDEOUT_BUTTON).click()
        cy.wait(5000)
        // cy.xpath(expectedDocumentsEditsLocators.DOCUMENTS_TAB).click()
        // cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible')
    }

    AddExpectedDocument3() {
        cy.xpath(expectedDocumentsEditsLocators.ADD_EXPECTED_DOCUMENT).click()
        cy.xpath(expectedDocumentsEditsLocators.EXPECTED_DOCUMENT_TAX_YEAR).type("2023")
        cy.xpath(expectedDocumentsEditsLocators.SCHEDULE_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SCHEDULE_NAME).click()
        cy.xpath(expectedDocumentsEditsLocators.DIRECT_CONNECT_TOGGLE_BUTTON).click()
        cy.xpath(expectedDocumentsEditsLocators.TRACK_PROFILE_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_TRACK_PROFILE_2).click()
        cy.xpath(expectedDocumentsEditsLocators.ALLOCABLE_ITEM_MAPPING_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_ALLOCABLE_ITEM_MAPPING_2).click()
        cy.xpath(expectedDocumentsEditsLocators.INVESTOR_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_INVESTOR_3).click()
        cy.xpath(expectedDocumentsEditsLocators.INVESTMENT_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_INVESTMENT_3).click()
        cy.xpath(expectedDocumentsEditsLocators.ASSIGN_TO_TRACK_RADIO_BUTTON).click()
        cy.xpath(expectedDocumentsEditsLocators.IS_FOREIGN_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_FOREIGN).click()
        cy.xpath(expectedDocumentsEditsLocators.CATEGORY_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_CATEGORY).click()
        cy.xpath(expectedDocumentsEditsLocators.SAVE_BUTTON).click({force:true})
        cy.wait(3000)
        cy.xpath(expectedDocumentsEditsLocators.CLOSE_SLIDEOUT_BUTTON).click()
        cy.wait(5000)
    }

    SelectUnMatchedDocument() {
        cy.xpath(expectedDocumentsEditsLocators.COLUMN_CHOOSER).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_DOCUMENT_NAME_COLUMN).click()
        cy.xpath(expectedDocumentsEditsLocators.PAGE_CLICK).click()
        cy.wait(3000)
        cy.xpath(expectedDocumentsEditsLocators.MATCHED_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_UNMATCHED_DOCUMENTS_PAGE).click()
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible')
    }

    EditUnmatchedDocument() {
        cy.xpath(expectedDocumentsEditsLocators.SEARCH_FILE_NAME).type("2023 Arizona K-1 NR GST_1_2_1_2.pdf")
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible')
        cy.xpath(expectedDocumentsEditsLocators.EDIT_UNMATCHED_DOCUMENT_ICON).click({ force: true })
        cy.wait(3000)
        cy.xpath(expectedDocumentsEditsLocators.EDIT_DOCUMENT_NAME).type('{selectall}{backspace}')
        cy.xpath(expectedDocumentsEditsLocators.EDIT_DOCUMENT_NAME).type("First")
        cy.wait(2000)
        cy.xpath(expectedDocumentsEditsLocators.SAVE_BUTTON).click({ force: true })
        cy.wait(20000)
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible')
        cy.xpath(expectedDocumentsEditsLocators.VERIFY_UNMATCHED_DOCUMENT_NAME).should('be.visible')
    }

    SelectMatchedDocument() {
        cy.wait(3000)
        cy.xpath(expectedDocumentsEditsLocators.MATCHED_DROPDOWN).click()
        cy.xpath(expectedDocumentsEditsLocators.SELECT_MATCHED_DOCUMENTS_PAGE).click()
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible')
    }

    EditMatchedDocument() {
        cy.xpath(expectedDocumentsEditsLocators.SEARCH_FILE_NAME).type('{selectall}{backspace}')
        cy.xpath(expectedDocumentsEditsLocators.SEARCH_FILE_NAME).type("2023 Arizona K-1 NR GST_1_2.pdf")
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible')
        cy.xpath(expectedDocumentsEditsLocators.EDIT_UNMATCHED_DOCUMENT_ICON).click({ force: true })
        cy.wait(5000)
        cy.xpath(expectedDocumentsEditsLocators.EDIT_DOCUMENT_NAME).type('{selectall}{backspace}')
        cy.xpath(expectedDocumentsEditsLocators.EDIT_DOCUMENT_NAME).type("Match")
        cy.xpath(expectedDocumentsEditsLocators.SAVE_BUTTON).click()
        cy.wait(20000)
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible')
        cy.xpath(expectedDocumentsEditsLocators.VERIFY_MATCHED_DOCUMENT_NAME).should('be.visible')
    }

}
export default ExpectedDocumentsEditsFunctions;