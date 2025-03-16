class CSVExtractLocators{
    GENERATE_CSV_DATA_EXTRACT = "//div[@class='trux-button__content']//span[contains(text(),'Generate CSV Data Extract')]"
    SUCCESS_MESSAGE = ".trux-notification__content"
    FILTER_FEDERAL_K1 = "//div[contains(text(),'Federal K-1')]"
    FILTER_FEDERAL_K3 = "//div[contains(text(),'Federal K-3')]"
    FILTER_ALL = "//div[contains(text(),'(All)')]"
    DOWNLOAD_EXTRACTS = "//a[contains(text(),' Download Extracts ')]"
    DOWNLOAD_ICON = "//a[@truxtooltip='Download']"
    EXPORT = "//div[contains(text(),' Export ')]"
    TAX_YEAR_DROPDOWN = "//td[@aria-colindex='8']//div[@class='dx-dropdowneditor-icon']"
    TAX_YEAR = "//div[contains(text(),'2022')]"
    SCHEDULE_DROPDOWN = '.dx-datagrid-filter-row > [aria-colindex="9"]'
    GENERATED_BY = "//tr[@aria-rowindex='1']//td[@aria-colindex='5']"
    GREEN_CIRCLE = "//tr[@aria-rowindex='1']//td[@aria-colindex='7']//awm-icon"
    STATUS = "//tr[@aria-rowindex='1']//td[@aria-colindex='7']//span//span[@class='processing-status-indicator__text--default']"
}
export default CSVExtractLocators;