class AuditLogsLocators{

    SELECT_FIRST_DOC = ".dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex='1'] > .dx-command-select"
    SELECT_SECOND_DOC = ".dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex='2'] > .dx-command-select"
    PERIOD_24h = "//awm-date-picker[@title='Period']//button[@type='submit']"
    MASKED_EIN_TOGGLE_BUTTON = "trux-toggle[statemanagement='manual']"
    APPROVAL_LOGS = "//a[contains(text(),' Approval Logs ')]"
    VERIFY_FILE_NAME = "div[class='grid-wrapper__grid']"
    VERIFY_PAGE = ".publish-k1-log-grid"
    PWC_DOC_COLLECTION_TOGGLE_BTN = ".setting-toogle > trux-toggle > .trux-switch > .trux-switch__content"
    UNMASKING_EIN_LOG_GRID = "//mezz-grid-wrapper[@class='unmasking-ein-log-grid']"
    TRUX_DATE_PICKER = "span[aria-label='Choose date']"
    SELECT_DATE_1 = "//span[@value='1']"
    SELECT_DATE_28 = "//span[@value='28']"
    VERIFY_UNMASK = "//tr[@aria-rowindex='145']//td[@aria-colindex='2']"
}
export default AuditLogsLocators;