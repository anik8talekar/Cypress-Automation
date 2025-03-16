import CustomColumnsLocators from "../locator files/CustomColumns.locators";


var customColumnsLocators = new CustomColumnsLocators

const dropdownlabel = "Weekday";

class CustomColumnsFunctions{
    ClickOnCustomColumnTab(){
        cy.contains(' Custom Columns ').click()
    }
    ClickOnAddCustomColumnButton(){
        cy.get(customColumnsLocators.ADD_CUSTOM_COLUMN_BTN).contains('Add Custom Column').click()
    }
    ClickOnAddValueButton(){
        cy.contains('Add Value').click({force:true})
    }
    TypeColumnName(){
        cy.get(customColumnsLocators.ADD_VALUE).eq(0).click()
    }
    ClickOnValueField(){
        cy.get(customColumnsLocators.VALUES_FIELD).eq(0).click()
    }
    TypeValue(){
        cy.get(customColumnsLocators.ADD_VALUE).eq(1).click({force:true})
    }
    DocumentsTab(){
        cy.get(customColumnsLocators.USER_BUTTON).click()
        cy.xpath(customColumnsLocators.DOCUMENT_CENTER).click()
        cy.xpath(customColumnsLocators.DOCUMENTS_TAB).eq(0).click()
    }
    DocumentsTabScenario2(){
        cy.xpath(customColumnsLocators.DOCUMENT_CENTER).click()
        cy.xpath(customColumnsLocators.DOCUMENTS_TAB).eq(0).click()
    }
    ScrollToNewColumnDocuments(){
        cy.wait(3000)
        cy.contains('Weekday').scrollIntoView()
        cy.get(customColumnsLocators.DOCUMENTS_GRID).should('contain','Weekday')
    }
    ScrollToNewColumnExecutiveReview(){
        cy.wait(3000)
        cy.contains('Weekday').scrollIntoView()
        cy.get(customColumnsLocators.EXECUTIVE_REVIEW_GRID).should('contain','Weekday')
    }
    ScrollToNewColumnExpectedDocuments(){
        cy.wait(3000)
        cy.contains('Weekday').scrollIntoView()
        cy.get(customColumnsLocators.EXPECTED_DOCUMENT_GRID).should('contain','Weekday')
    }
    ClickOnDeleteButton(){
        cy.xpath(customColumnsLocators.DELETE_BUTTTON).eq(4).click()
    }
    DeletePopup(){
        cy.xpath(customColumnsLocators.DELETE_POPUP).click()
    }
    ExecutiveReviewTab(){
        cy.xpath(customColumnsLocators.EXECUTIVE_REVIEW_TAB).click()
    }
    ExpectedDocumentsTab(){
        cy.xpath(customColumnsLocators.EXPECTED_DOCUMENT_TAB).click()
    }
    ClickOnEditIconDocuments(){
        cy.get(customColumnsLocators.EDIT_ICON_DOCUMENTS).eq(2).click({force: true})
        cy.wait(3000);
    }
    ClickOnWeekDayDropdown(){
        cy.xpath(customColumnsLocators.WEEKDAY_DROPDOWN).click()
    }
    ClickOnSaveButton(){
        cy.get(customColumnsLocators.SAVE_BUTTON).contains(' Save ').click()
        cy.wait(3000)
    }
    ClickOnColumnChooserDropdown(){
        cy.get(customColumnsLocators.COLUMN_CHOOSER).click({force: true})
    }
    UncheckWeekdayColumn(){
        cy.get(customColumnsLocators.UNSELECT_WEEKDAY_COLUMN).contains(' Weekday').click({force: true})
    }
    UncheckWeekdayColumnExReview(){
        cy.get(customColumnsLocators.UNSELECT_WEEKDAY_COLUMN).eq(28).click({force: true})
    }
    UncheckWeekdayColumnExpDoc(){
        cy.get(customColumnsLocators.UNSELECT_WEEKDAY_COLUMN).eq(22).click({force: true})
    }
    VerifyColumnNotPresentDoc(){
        cy.get(customColumnsLocators.DOCUMENTS_GRID).should('not.contain','Weekday')
        cy.get(customColumnsLocators.DOCUMENTS_PAGE).click()
    }
    VerifyColumnNotPresentExReview(){
        cy.get(customColumnsLocators.EXECUTIVE_REVIEW_GRID).should('not.contain','Weekday')
    }
    VerifyColumnNotPresentExpDoc(){
        cy.get(customColumnsLocators.EXPECTED_DOCUMENT_GRID).should('not.contain','Weekday')
    }
    ClickOnCheckBoxDoc(){
        cy.get(customColumnsLocators.MULTIPLE_DOC_SELECT).eq(1).click({force: true})
        cy.get(customColumnsLocators.MULTIPLE_DOC_SELECT).eq(2).click({force: true})
    }
    ClickOnActionsDropdown(){
        cy.contains(' Actions ').click()
    }
    ClickonCustomColumnsOption(){
        cy.get(customColumnsLocators.SET_CUSTOM_COLUMNS).contains('Set Custom Columns').click()
    }
    SelectWeekday(){
        cy.xpath(customColumnsLocators.WEEKDAY_DROPDOWN).eq(0).click()
    }
    SelectTuesday(){
        cy.get(customColumnsLocators.SELECT_TUESDAY_CUSTOM).contains(' Tuesday').click()
    }
    SelectWeekdayExpDoc(){
        cy.xpath(customColumnsLocators.WEEKDAY_DROPDOWN).eq(0).click()
    }
    SelectTuesdayExpDoc(){
        cy.get(customColumnsLocators.SELECT_TUESDAY_CUSTOM).contains(' Tuesday').click()
    }
}
export default CustomColumnsFunctions;