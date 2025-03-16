import ReviewDocumentScreenLocatorsGamma from "../locator files/ReviewDocumentScreen_GAMMA.locator";

var reviewDocumentScreenLocatorsGamma = new ReviewDocumentScreenLocatorsGamma

class ReviewDocumentScreenFunctionsGamma{

    
 verifyInputOutput(){
    cy.wait(10000)
    reviewDocumentScreenLocatorsGamma.locators.inputPDF().should('be.visible')
    //reviewDocumentScreenLocators.locators.outputData().should('be.visible')
  }

  selectDropdown(value){
    reviewDocumentScreenLocatorsGamma.locators.viewByDropDown().click()
    cy.contains(value).click()
}


clickOnReviewIcon(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.REVIEW_ICON).eq(0).click({force: true});
}
openScheduleItemDetails(){  
  cy.get(reviewDocumentScreenLocatorsGamma.SCHEDULE_DROPDOWN).click();      
  cy.xpath(reviewDocumentScreenLocatorsGamma.SCHEDULE_ITEM_DETAILS).click();
}
expandReportingGroup(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.EXPAND_ICON).eq(0).click();
}
typeOriginalvalues(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.ORIGINAL_VALUES).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.ORIGINAL_VALUES_TEXTBOX).invoke('show').clear().type('164');
}
clearOriginalValues(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.ORIGINAL_VALUES).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.ORIGINAL_VALUES_TEXTBOX).invoke('show').clear();
}
unhideAndVerify(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.III).click();
  cy.get(reviewDocumentScreenLocatorsGamma.HIDE_UNHIDE_ZERO_VALUES_TOGGLE_BTN).eq(0).click();
  cy.get(reviewDocumentScreenLocatorsGamma.HIDE_UNHIDE_ZERO_VALUES_TOGGLE_BTN).eq(0).click();
  cy.get(reviewDocumentScreenLocatorsGamma.HIDE_UNHIDE_ZERO_VALUES_TOGGLE_BTN).eq(0).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.FOUR_A).should('be.visible');
  cy.xpath(reviewDocumentScreenLocatorsGamma.FOUR_B).should('be.visible');
  cy.xpath(reviewDocumentScreenLocatorsGamma.FOUR_C).should('be.visible');
}
hideAndVerify(){
  cy.get(reviewDocumentScreenLocatorsGamma.HIDE_UNHIDE_ZERO_VALUES_TOGGLE_BTN).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.FOUR_A).should('not.exist'); 
  cy.xpath(reviewDocumentScreenLocatorsGamma.FOUR_B).should('not.exist');
  cy.xpath(reviewDocumentScreenLocatorsGamma.FOUR_C).should('not.exist');
}
openAddNote(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.HIDE_UNHIDE_FILTERS).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.III).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.NOTES_ICON).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.ADD_A_NOTE).should('be.visible');
}
addComment(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.COMMENT_TEXTBOX).type('Test Comments 123')
  cy.xpath(reviewDocumentScreenLocatorsGamma.ADD).click();
}
verifyComment(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.TEST_COMMENT).eq(0).should('have.text', 'Test Comments 123')
}
openOldReviewPage(){
  cy.wait(3000);
  cy.xpath(reviewDocumentScreenLocatorsGamma.OLD_REVIEW_PAGE).click();
}
openDocumentNotes(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.DOCUMENT_NOTES).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.ADD_NOTES).should('be.visible');
}
addDocumentNote(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.COMMENT_TEXTBOX).type('Test Comments 123')
  cy.xpath(reviewDocumentScreenLocatorsGamma.SAVE).click();
}
verifyDocumentNote(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.DOCUMENT_NOTE).eq(0).should('have.text', 'Test Comments 123')
}
expandGroup(){
  cy.get(reviewDocumentScreenLocatorsGamma.EXPAND_ICON).eq(0).click();
}
typeExtractedValues(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.III).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.EXTRACTED_VALUES).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.EXTRACTED_VALUES_TEXTBOX).invoke('show').clear().type('11941');

  cy.xpath(reviewDocumentScreenLocatorsGamma.EXTRACTED_VALUES_TWO).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.EXTRACTED_VALUES_TEXTBOX_TWO).invoke('show').clear().type('2699');
}
downloadPDFInView(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.MORE_OPTIONS).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.PDF_IN_VIEW).click();
}
downloadOriginalPDF(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.MORE_OPTIONS).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.ORIGINAL_PDF).click();
}
filterApprovedDocuments(){
  cy.get(reviewDocumentScreenLocatorsGamma.FILTER_DROPDOWN).click();
  cy.get(reviewDocumentScreenLocatorsGamma.APPROVED).click();
  cy.wait(20000);
}
unapproveDocument(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.UNAPPROVE_BTN).should('have.text','Unapprove');
  cy.xpath(reviewDocumentScreenLocatorsGamma.UNAPPROVE_BTN).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.UNAPPROVE).click();
}
approvePrerequisite(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.APPROVE_BTN).should('have.text','Approve');
  cy.xpath(reviewDocumentScreenLocatorsGamma.APPROVE_BTN).click();
  cy.xpath(reviewDocumentScreenLocatorsGamma.APPROVE).click();
}
searchDocument(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.SEARCH_DOCUMENT_TEXTBOX).type('2021 Lucille Bluth K1_1_14.pdf')
  cy.wait(20000);
}
addAttachments(){
  cy.get(reviewDocumentScreenLocatorsGamma.SLIDEOUT_CLOSE_BTN).click();
  cy.wait(3000);
  cy.xpath(reviewDocumentScreenLocatorsGamma.ATTACHMENTS_ICON).eq(6).click()
  cy.xpath(reviewDocumentScreenLocatorsGamma.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/2021 George Bluth K1.pdf',{force: true});
  cy.xpath(reviewDocumentScreenLocatorsGamma.UPLOADED_FILE_NAME).eq(0).should('have.text','2021 George Bluth K1.pdf')
  cy.xpath(reviewDocumentScreenLocatorsGamma.UPLOADED_BY).eq(0).should('have.text','gadoautoma001')
}
verifyEditIconDisability(){
  cy.xpath(reviewDocumentScreenLocatorsGamma.EDIT_ICON).should('not.exist');
}
}

export default ReviewDocumentScreenFunctionsGamma