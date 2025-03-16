class Smartk1Locators{
    SEARCH_ENGAGEMENT = "//input[@role='searchbox']"
    CLICK_ENGAGEMENT = ".highlight"
    EXISTING_ENGAGEMENT = "//div[contains(text(),'DATAFLOW_QA_AUTOMATION')]"
    IMPORT_AND_EXPORT_TAB = "//a[contains(text(),' Document Import & Export ')]"
    TAX_YEAR_DROPDOWN = "//trux-input[@type='select']"
    REQUEST_ENTITY_DROPDOWN = ".trux-button__content"
    SELECT_ENTITY_CHECKBOX = ".trux-checkbox__checkmark"
    VERIFY_APPROVAL_STATUS = "tr[aria-rowindex='5']"
    ACTIONS_CHECKBOX = "//td[@aria-colindex='1']//span[@class='dx-checkbox-icon']"
    DELETE_BUTTON = "//tr[@aria-rowindex='2']//a[@truxtooltip='Delete']" 
    VERIFY_DELETED_ENTITY = ".dx-cell-focus-disabled"
    TOGGLE_BUTTON = ".setting-toogle > trux-toggle > .trux-switch > .trux-switch__content"
    YES_POPUP = ".mezz-notification__action"
    AUDIT_LOGS_TAB = ".mezz-sidebar-item__label"
    EL_LANG_CONFIRMATION_TAB = ".trux-tabs__tab-link"
    VERIFY_ACTION = "//div[@class='grid-wrapper__grid']"
    VERIFY_APPROVAL_REQUESTED = ".grid-wrapper__grid"
    VERIFY_DOCUMENTS_COUNTER = "[class='dx-datagrid-content']"
    USER_TAB = "svg[data-icon='hevron-down']"
    APPROVAL_REQUESTED_COUNTER = ".tile-indicator__content"
    APPROVAL_REQUESTED_TEXT = ".tile-indicator__status-indicator"
    LUCILLE_BLUTH_FUND_ENTITY = ".trux-list__scrollable-viewport"
    APPROVE_ICON = "a[truxtooltip='Approve']"
    DELETE_ICON = "a[truxtooltip='Delete']"
    REJECT_ICON = "svg[data-icon='circle-xmark']"
    REQUEST_AGAIN_ICON = "a[truxtooltip='Request again']" 
    AVAILABLE_DOCUMENTS_COUNTER = "//div[@class='available-track-documents-summary-container']//mezz-tile-indicator[@label='Approval Requested']"
    PROCESS_ICON = "a[truxtooltip='Process']"
    DOWNLOAD_ICON = "a[truxtooltip='Download']"
    DATE_PICKER = 'span[aria-label="Choose date"]'
    DATE_CELL_1  = '//div[@class="ap-datepicker-cells"]//span[@value="1"]'
    DATE_CELL_30  =  '//div[@class="ap-datepicker-cells"]//span[@value="30"]'
    DATES = '.ng-tns-c42-72'
    
}
export default Smartk1Locators;