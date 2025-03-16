class AppkitImportAndExportExpectedDocumentsLocators{
IMPORT_AND_EXPORT_DATA = "//span[contains(text(),' Import & Export Data ')]"
EXPECTED_DOCUMENT = "//span[contains(text(),'Expected Documents')]"
EXPEC_DOC_UI = "//div[@class='import-export-expected-documents-page appkit-page infinite-frozen-appkit-page']"
TAX_YEAR = "//td[@aria-colindex='1']//input[@type='text']"
INVESTOR_NAME = "//td[@aria-colindex='3']//input[@type='text']"
INVESTMENT_NAME = "//td[@aria-colindex='4']//input[@type='text']"
TAX_YEAR_VALUE = "//tr[@aria-rowindex='1']//td[@aria-colindex='1']"
INVESTOR_NAME_VALUE = "//tr[@aria-rowindex='1']//td[@aria-colindex='3']"
INVESTMENT_NAME_VALUE = "//tr[@aria-rowindex='1']//td[@aria-colindex='4']"
}

export default AppkitImportAndExportExpectedDocumentsLocators;