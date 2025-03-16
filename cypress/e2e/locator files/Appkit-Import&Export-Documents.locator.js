class AppkitImportAndExportDocumentsLocators{
    IMPORT_AND_EXPORT_DATA = "//span[contains(text(),' Import & Export Data ')]"
    DOCUMENTS = "(//span[contains(text(),'Documents')])[3]"
    DOCUMENTS_UI = "//div[@class='import-export-documents-page appkit-page infinite-frozen-appkit-page']"
    FILE_NAME = "//td[@aria-colindex='1']//input"
    INVESTOR_NAME = "//td[@aria-colindex='7']//input"
    INVESTMENT_NAME = "//td[@aria-colindex='8']//input"
    FILE_NAME_VALUE = "//tr[@aria-rowindex='1']//td[@aria-colindex='1']"
    INVESTOR_NAME_VALUE = "//tr[@aria-rowindex='1']//td[@aria-colindex='7']"
    INVESTMENT_NAME_VALUE = "//tr[@aria-rowindex='1']//td[@aria-colindex='8']"
    }
    
    export default AppkitImportAndExportDocumentsLocators;
    