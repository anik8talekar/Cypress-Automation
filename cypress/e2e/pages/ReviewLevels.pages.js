import ReviewLevelLocators from "../locator files/ReviewLevels.locators";

var reviewLevelLocators = new ReviewLevelLocators

class ReviewLevelFunctions{

    ClickOnReviewLevelsTab(){
        cy.contains(' Review Levels ').click()
    }
    ClickOnPwCToggleBtn(){
        cy.get(reviewLevelLocators.REVIEW_LEVELS_TOGGLE_BUTTON).eq(0).click()
    }
    ClickOnClientToggleBtn(){
        cy.get(reviewLevelLocators.REVIEW_LEVELS_TOGGLE_BUTTON).eq(1).click()
    }
    ClickOnRightArrow(){
        cy.get(reviewLevelLocators.RHS_ARROW).eq(0).click()
    }
    ClickOnAddReviewLevelButton(){
        cy.contains('Add Review Level').click()
    }
    VerifyReviewLevelGrid(){
        cy.get(reviewLevelLocators.REVIEW_LEVELS_GRID).should('be.visible')
    }
    ClickOnPwCReviewLevelDropdown(){
        cy.xpath(reviewLevelLocators.PWC_REVIEW_LEVEL_DROPDOWN).eq(0).click()
        cy.contains(' Review Level 4').click()
    }
    ClickOnPwCClientLevelDropdown(){
        cy.xpath(reviewLevelLocators.CLIENT_REVIEW_LEVEL_DROPDOWN).eq(0).click()
        cy.contains(' Review Level 2').click()
    }
    ChooseHighestPwCLevel(){
        cy.xpath(reviewLevelLocators.PWC_REVIEW_LEVEL_DROPDOWN).eq(0).click()
        cy.contains(' Review Level 8').click()
    }
    ChooseHighestClientLevel(){
        cy.xpath(reviewLevelLocators.CLIENT_REVIEW_LEVEL_DROPDOWN).eq(0).click()
        cy.contains(' Review Level 8').click()
    }
    ClickOnSaveButton(){
        cy.contains(' Save ').click()
    }
    ChooseLowestPwCLevel(){
        cy.xpath(reviewLevelLocators.PWC_REVIEW_LEVEL_DROPDOWN).eq(0).click()
        cy.contains(' Review Level 2').click()
    }
    ChooseLowestClientLevel(){
        cy.xpath(reviewLevelLocators.CLIENT_REVIEW_LEVEL_DROPDOWN).eq(0).click()
        cy.contains(' Review Level 2').click()
    }
    ClickOnActionsDropdown(){
        cy.contains(' Actions ').click()
    }
    DisabledApproveOption(){
        cy.get(reviewLevelLocators.ACTIONS_DROPDOWN_VALUES).contains('Approve').should('be.disabled')
    }
    SearchDocumentName(){
        cy.get(reviewLevelLocators.SEARCH_FILE_NAME).eq(2).type('GEORGE BLUTH K1.pdf')
    }
    SearchInvestmentName(){
        cy.get(reviewLevelLocators.SEARCH_FILE_NAME).eq(6).type('Auto')
    }
    SearchInvestmentTaxID(){
        cy.get(reviewLevelLocators.SEARCH_FILE_NAME).eq(7).type(' 1234 ')
    }
    ClickOnEditIcon(){
        cy.get(reviewLevelLocators.EDIT_ICON).eq(0).click({force: true})
    }
    TypeCustomDescription(){
        cy.xpath(reviewLevelLocators.EDIT_CUSTOM_DESCRIPTION).type('Automation')
    }
    VerifyCustomDescriptionGrid(){
        cy.get(reviewLevelLocators.VERIFY_CUSTOM_DESCRIPTION).eq(0).should('contain','Automation')
    }
    ClearCustomDescription(){
        cy.xpath(reviewLevelLocators.EDIT_CUSTOM_DESCRIPTION).type('{selectall}')
        .type('{backspace}')
    }
    ClickOnDocumentsPage(){
        cy.get(reviewLevelLocators.DOCUMENTS_PAGE).click()
    }

}
export default ReviewLevelFunctions