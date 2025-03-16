class DiagnosticsLocators{
        RUN_DIAGNOSTICS = "//span[contains(text(),'Run Diagnostics')]"
        VIEW_DIAGNOSTICS  = "//tr[@aria-rowindex='1']//td[@aria-colindex='2']//a[@truxtooltip='View Diagnostics']"
        MORE = "//div[@truxtooltip='More']"
        DIAGNOSTICS = "//span[contains(text(),'Diagnostics')]"
        SELECT_ALL_CHECKBOX = "//div[@aria-label='Select all']"
        RUN_DIAGNOSTICS_POPUP = '.trux-notification__content'
}
export default DiagnosticsLocators;