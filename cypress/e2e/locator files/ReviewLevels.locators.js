class ReviewLevelLocators{
    REVIEW_LEVELS_TOGGLE_BUTTON = "label[type='checkbox']"
    RHS_ARROW = "svg[data-icon='angle-right']"
    REVIEW_LEVELS_GRID = ".grid-wrapper__grid"
    PWC_REVIEW_LEVEL_DROPDOWN = "//label[contains(text(),'PwC Review Level')]//following::trux-input[@class='trux-input-select']"
    CLIENT_REVIEW_LEVEL_DROPDOWN = "//label[contains(text(),'Client Review Level')]//following::trux-input[@class='trux-input-select']"
    ACTIONS_DROPDOWN_VALUES = ".trux-overlay"
    SEARCH_FILE_NAME = ".dx-texteditor-input"
    EDIT_ICON = "svg[data-icon='pen']"
    EDIT_CUSTOM_DESCRIPTION = "//form//trux-input[@formcontrolname='customLabel']"
    VERIFY_CUSTOM_DESCRIPTION = ".dx-scrollable-wrapper"
    DOCUMENTS_PAGE = ".documents-page"
    RESET_GRID = "//span[contains(text(),'Reset Grid')]"


}
export default ReviewLevelLocators;