import ReviewDocumentScreenLocators from "../locator files/ReviewDocumentScreen.locator";

var reviewDocumentScreenLocators = new ReviewDocumentScreenLocators

class ReviewDocumentScreenFunctions {
  clickOnReviewIcon() {
    cy.xpath(reviewDocumentScreenLocators.REVIEW_ICON).eq(0).click({ force: true });
    cy.wait(5000);
  }
  openScheduleItemDetails() {
    cy.xpath(reviewDocumentScreenLocators.SCHEDULE_DROPDOWN).click();
    cy.xpath(reviewDocumentScreenLocators.SCHEDULE_ITEM_DETAILS).click();
  }
  expandReportingGroup() {
    cy.xpath(reviewDocumentScreenLocators.EXPAND_ICON).eq(0).click();
  }
  typeOriginalvalues() {
    cy.xpath(reviewDocumentScreenLocators.ORIGINAL_VALUES).click();
    cy.xpath(reviewDocumentScreenLocators.ORIGINAL_VALUES_TEXTBOX).invoke('show').clear().type('164');
  }
  clearOriginalValues() {
    cy.xpath(reviewDocumentScreenLocators.ORIGINAL_VALUES).click();
    cy.xpath(reviewDocumentScreenLocators.ORIGINAL_VALUES_TEXTBOX).invoke('show').clear();
  }
  unhideAndVerify() {
    cy.xpath(reviewDocumentScreenLocators.III).click();
    cy.get(reviewDocumentScreenLocators.HIDE_UNHIDE_ZERO_VALUES_TOGGLE_BTN).eq(0).click();
    cy.get(reviewDocumentScreenLocators.HIDE_UNHIDE_ZERO_VALUES_TOGGLE_BTN).eq(0).click();
    cy.get(reviewDocumentScreenLocators.HIDE_UNHIDE_ZERO_VALUES_TOGGLE_BTN).eq(0).click({force:true});
    cy.wait(5000);
    cy.xpath(reviewDocumentScreenLocators.FOUR_A).should('be.visible');
    cy.xpath(reviewDocumentScreenLocators.FOUR_B).should('be.visible');
    cy.xpath(reviewDocumentScreenLocators.FOUR_C).should('be.visible');
  }
  hideAndVerify() {
    cy.get(reviewDocumentScreenLocators.HIDE_UNHIDE_ZERO_VALUES_TOGGLE_BTN).click();
    cy.xpath(reviewDocumentScreenLocators.FOUR_A).should('not.exist');
    cy.xpath(reviewDocumentScreenLocators.FOUR_B).should('not.exist');
    cy.xpath(reviewDocumentScreenLocators.FOUR_C).should('not.exist');
  }
  openAddNote() {
    cy.xpath(reviewDocumentScreenLocators.HIDE_UNHIDE_FILTERS).click();
    cy.xpath(reviewDocumentScreenLocators.III).click();
    cy.xpath(reviewDocumentScreenLocators.NOTES_ICON).click({force:true});
    cy.xpath(reviewDocumentScreenLocators.ADD_A_NOTE).should('be.visible');
  }
  addComment() {
    cy.xpath(reviewDocumentScreenLocators.COMMENT_TEXTBOX).type('Test Comments 123')
    cy.xpath(reviewDocumentScreenLocators.ADD).click();
  }
  verifyComment() {
    cy.xpath(reviewDocumentScreenLocators.TEST_COMMENT).eq(0).should('have.text', 'Test Comments 123')
  }
  openOldReviewPage() {
    cy.wait(3000);
    cy.xpath(reviewDocumentScreenLocators.OLD_REVIEW_PAGE).click();
  }
  openDocumentNotes() {
    cy.xpath(reviewDocumentScreenLocators.DOCUMENT_NOTES).click();
    cy.xpath(reviewDocumentScreenLocators.ADD_NOTES).should('be.visible');
  }
  addDocumentNote() {
    cy.xpath(reviewDocumentScreenLocators.COMMENT_TEXTBOX).type('Test Comments 123')
    cy.xpath(reviewDocumentScreenLocators.SAVE).click();
  }
  verifyDocumentNote() {
    cy.xpath(reviewDocumentScreenLocators.DOCUMENT_NOTE).eq(0).should('have.text', 'Test Comments 123')
  }
  expandGroup() {
    cy.get(reviewDocumentScreenLocators.EXPAND_ICON).eq(0).click();
  }
  typeExtractedValues() {
    cy.xpath(reviewDocumentScreenLocators.III).click();
    cy.xpath(reviewDocumentScreenLocators.EXTRACTED_VALUES).click();
    cy.xpath(reviewDocumentScreenLocators.EXTRACTED_VALUES_TEXTBOX).invoke('show').clear().type('11941');

    cy.xpath(reviewDocumentScreenLocators.EXTRACTED_VALUES_TWO).click();
    cy.xpath(reviewDocumentScreenLocators.EXTRACTED_VALUES_TEXTBOX_TWO).invoke('show').clear().type('2699');
  }
  downloadPDFInView() {
    cy.xpath(reviewDocumentScreenLocators.MORE_OPTIONS).click();
    cy.xpath(reviewDocumentScreenLocators.PDF_IN_VIEW).click();
  }
  downloadOriginalPDF() {
    cy.xpath(reviewDocumentScreenLocators.MORE_OPTIONS).click();
    cy.xpath(reviewDocumentScreenLocators.ORIGINAL_PDF).click();
  }
  filterApprovedDocuments() {
    cy.xpath(reviewDocumentScreenLocators.SEARCH_DOCUMENT_TEXTBOX).type('2023 -STANLEY SITWELL 1 7_1_6.pdf')
    cy.wait(3000);
    cy.get(reviewDocumentScreenLocators.FILTER_DROPDOWN).click();
    cy.get(reviewDocumentScreenLocators.APPROVED).click();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  }
  unapproveDocument() {
    cy.xpath(reviewDocumentScreenLocators.UNAPPROVE_BTN).should('have.text', 'Unapprove');
    cy.xpath(reviewDocumentScreenLocators.UNAPPROVE_BTN).click();
    cy.xpath(reviewDocumentScreenLocators.UNAPPROVE).click();
  }
  approvePrerequisite() {
    cy.xpath(reviewDocumentScreenLocators.APPROVE_BTN).should('have.text', 'Approve');
    cy.xpath(reviewDocumentScreenLocators.APPROVE_BTN).click();
    cy.xpath(reviewDocumentScreenLocators.APPROVE).click();
  }
  searchDocument() {
    cy.xpath(reviewDocumentScreenLocators.SEARCH_DOCUMENT_TEXTBOX).type('2023 -STANLEY SITWELL 1 7_1_6.pdf')
    cy.wait(5000);
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  }
  addAttachments() {
    cy.get(reviewDocumentScreenLocators.SLIDEOUT_CLOSE_BTN).click();
    cy.wait(3000);
    cy.xpath(reviewDocumentScreenLocators.ATTACHMENTS_ICON).eq(6).click()
    cy.xpath(reviewDocumentScreenLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/2023 -STANLEY SITWELL 1 7_1_6.pdf', { force: true });
    cy.xpath(reviewDocumentScreenLocators.UPLOADED_FILE_NAME).eq(0).should('have.text', '2023 -STANLEY SITWELL 1 7_1_6.pdf')
    cy.xpath(reviewDocumentScreenLocators.UPLOADED_BY).eq(0).should('have.text', 'dautomatio004')
  }
  verifyEditIconDisability() {
    cy.xpath(reviewDocumentScreenLocators.EDIT_ICON).should('not.exist');
  }
}

export default ReviewDocumentScreenFunctions