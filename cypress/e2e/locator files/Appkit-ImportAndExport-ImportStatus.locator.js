class AppkitImportAndExportImportStatusLocators{
IMPORT_STATUS_TAB = "//span[contains(text(),'Import Status')]"
IMPORT_STATUS_UI = "//div[@class='import-export-import-status-pages appkit-page infinite-frozen-appkit-page']"
IMPORT_FILE_NAME = "//td[@aria-colindex='2']//input[@type='text']"
IMPORT_SHEET = "//td[@aria-colindex='3']//input[@type='text']"
NUMBER_OF_ERRORS = "//td[@aria-colindex='4']//input[@type='text']"
NUMBER_OF_DUPLICATES = "//td[@aria-colindex='5']//input[@type='text']"
IMPORTED_BY = "//td[@aria-colindex='7']//input[@type='text']"
IMPORT_STATUS_COLUMN = "//td[@aria-colindex='8']//input[@type='text']"
IMPORT_FILE_NAME_VALUE = "//tr[@aria-rowindex='1']//td[@aria-colindex='2']"
IMPORT_SHEET_VALUE = "//tr[@aria-rowindex='1']//td[@aria-colindex='3']"
NUMBER_OF_ERRORS_VALUE = "//tr[@aria-rowindex='1']//td[@aria-colindex='4']"
NUMBER_OF_DUPLICATES_VALUE = "//tr[@aria-rowindex='1']//td[@aria-colindex='5']"
IMPORTED_BY_VALUE = "//tr[@aria-rowindex='1']//td[@aria-colindex='7']"
IMPORT_STATUS_COLUMN_VALUE = "//tr[@aria-rowindex='1']//td[@aria-colindex='8']"
}

export default AppkitImportAndExportImportStatusLocators;