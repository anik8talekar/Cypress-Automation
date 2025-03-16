class ExpectedDocumentsLocators{
    EXPECTED_DOCUMENTS_DROPDOWN = "//trux-input[@formcontrolname='expectedDocumentId']"
    EXPECTED_DOCUMENTS_OPTIONS = ".expected-document-list-item__item-text"
    VERIFY_MATCHED_EXPECTED_DOCUMENTS = ".documents-page"
    INTELLIGENT_MATCHING = ".expected-document-list-item__item-text"
    EXPECTED_DOCUMENTS_DC = "a[tabindex='0']"
    BULK_ACTIONS_CHECKBOX = "div[role='checkbox']"
    ACTIONS_MENU_BUTTON = ".expected-document-grid__left-toolbar__item"
    UNMATCH_DROPDOWN_OPTION = "svg[data-icon='link-slash']"
    UNMATCH_POPUP = ".trux-notification__action--primary"
    SELECT_EXPECTED_DOCUMENT = ".dx-checkbox-icon"
    SET_DATES_OPTION = "svg[data-icon='calendar-day']"
    CALENDAR_LOGO = "input[placeholder='Choose a date']"
    CALENDAR = ".trux-calendar__mid-section"
    CLOSE_BUTTON = ".trux-slideout-body"
    EXPECTED_DOCUMENT_NAME_DROPDOWN = "div[class='trux-list__scrollable-viewport']"
    SWARAJ_AUTOMATION_TEST = "//div[contains(text(),'Swaraj Automation Test')]"
    EXPECTED_DOCUMENT_NAME_CELL = ':nth-child(1) > .expected-document-list-item > .expected-document-list-item__item-text > span'
    MATCH_BTN = '.trux-button'
    SEARCH_FILE_NAME = "[aria-colindex='5'] > .dx-editor-with-menu > .dx-editor-container > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    SELECT_TAX_YEAR = "div[role='button'][aria-label='Select']"
    SELECT_2021_YEAR = "//div[contains(text(),'2021')]"
    RESET_GRID_BUTTON = "//span[contains(text(),'Reset Grid')]"

    }
    export default ExpectedDocumentsLocators