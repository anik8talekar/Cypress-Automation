class DocCenterExpectedDocumentsLocators{
    
    DIRECT_CONNECT_DROPDOWN = "div[aria-label='Select']"
    NO_OPTION = ".dx-overlay-content dx-popup-normal dx-resizable"
    EDIT_BUTTON = ".dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex='15'] > .dx-command-edit" 
    EXPORT_ALL_DATA_BUTTON = "//span[contains(text(),' Export All Data ')]"
    CALENDAR_ICON = ":nth-child(1) > .trux-input-date > .trux-input-wrapper > .trux-input-icon"
    EDIT_PROJECTED_DATE = ".trux-calendar__mid-section-days-table--current-day"
    CLICK_NO_OPTION = 'div[role="option"]'

}
export default DocCenterExpectedDocumentsLocators;