class ReviewDocumentScreenLocatorsGamma{
    REVIEW_ICON = "//tr[@aria-rowindex='1']//td[@aria-colindex='2']//a[@awmtooltip='Review']"
    SCHEDULE_DROPDOWN = '.review-toolbar__view-by-input > .trux-input-wrapper > .trux-input-icon > .trux-input-select__icon-down'
    SCHEDULE_ITEM_DETAILS = "//li[contains(text(),' Schedule Item Details')]"
    EXPAND_ICON = "//div[@class='dx-datagrid-group-closed']" 
    HIDE_UNHIDE_ZERO_VALUES_TOGGLE_BTN = ".schedule-item-toolbar__toggle > trux-toggle > .trux-switch > .trux-switch__content > .trux-switch__handler"
    NOTES_ICON = "//tr[@aria-rowindex='7']//td[@aria-colindex='1']//mezz-action-icon[@tooltip='Notes']"
    MORE_OPTIONS = "//div[@truxtooltip='More']"
    PDF_IN_VIEW = "//span[contains(text(),'Download PDF in View')]"
    ORIGINAL_PDF = "//span[contains(text(),'Download Original PDF')]"
    EDIT_ICON = "//a[@truxtooltip='Edit']"
    UNAPPROVE_BTN = "//button//span[contains(text(),'Unapprove')]"
    APPROVE_BTN = "//button//span[contains(text(),'Approve')]"
    OLD_REVIEW_PAGE = "//span[contains(text(),'Old Review Page')]"
    CLOSE_SLIDEOUT = "//button[@aria-label='Close slideout']"
    ORIGINAL_VALUES = "//tr[@aria-rowindex='2']//td[@aria-colindex='5']"
    ORIGINAL_VALUES_TEXTBOX = "//tr[@aria-rowindex='2']//td[@aria-colindex='5']//input[@type='text']"
    III = "//a[contains(text(),'III')]"
    FOUR_A = "//td[contains(text(),'4 A')]"
    FOUR_B = "//td[contains(text(),'4 B')]"
    FOUR_C = "//td[contains(text(),'4 C')]"
    ADD_A_NOTE = "//div[contains(text(),' Add a Note ')]"
    COMMENT_TEXTBOX = "//textarea[@tabindex='0']"
    ADD = "//span[contains(text(),'Add')]"
    TEST_COMMENT = "//div[contains(text(),'Test Comments 123')]"
    DOCUMENT_NOTES = "//button[@truxtooltip='Document Notes']"
    ADD_NOTES = "//div[contains(text(),'Add Notes')]"
    SAVE = "//div[contains(text(),' Save ')]"
    DOCUMENT_NOTE = "//tr[@aria-rowindex='1']//td[@aria-colindex='1']"
    EXTRACTED_VALUES = "//tr[@aria-rowindex='6']//td[@aria-colindex='4']"
    EXTRACTED_VALUES_TEXTBOX = "//tr[@aria-rowindex='6']//td[@aria-colindex='4']//input[@type='text']"
    EXTRACTED_VALUES_TWO = "//tr[@aria-rowindex='7']//td[@aria-colindex='4']"
    EXTRACTED_VALUES_TEXTBOX_TWO = "//tr[@aria-rowindex='7']//td[@aria-colindex='4']//input[@type='text']"
    FILTER_DROPDOWN = '.dx-first-cell > :nth-child(1) > .dx-editor-container > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-widget > .dx-button-content > .dx-dropdowneditor-icon'
    APPROVED = ':nth-child(2) > .dx-item-content'
    UNAPPROVE = "//div[@class='trux-notification__action trux-notification__action--primary ng-star-inserted' and contains(text(),'Unapprove')]"
    APPROVE = "//div[contains(text(),'Approve')]"
    SEARCH_DOCUMENT_TEXTBOX = "//td[@aria-colindex='5']//input[@role='textbox']"
    SLIDEOUT_CLOSE_BTN = '.trux-slideout-header__close-btn'
    ATTACHMENTS_ICON = "//mezz-action-icon[@tooltip='Attachments']"
    UPLOAD_FILES_AREA = "//input[@type='file' and @class='trux-file-upload__input']"
    UPLOADED_FILE_NAME = "//span[@class='file-tile__name']"
    UPLOADED_BY = "//span[@class='file-tile__user-name']"
    HIDE_UNHIDE_FILTERS = "//fa-icon[@class='ng-fa-icon ng-star-inserted']"

locators = {
    inputPDF: ()=> cy.get('.textLayer', { timeout: 30000 }),
    outputData: ()=> cy.get('.dx-scrollable-content > .dx-treelist-content > .dx-treelist-table', { timeout: 30000 }),
    viewByDropDown: ()=> cy.get('.review-toolbar__view-by-input > .trux-input-wrapper > .trux-input-select__input', { timeout: 30000 }),
    dropdownOption: ()=> cy.get('trux-list-single-select.ng-star-inserted'),
    footnotesOption: ()=> cy.contains('Footnotes'),
    overflowOtion: ()=> cy.contains('Schedule Item Details')
}
}

export default ReviewDocumentScreenLocatorsGamma