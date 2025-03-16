class ImportAndExportBusinessEntitiesLocators{
    IMPORT_AND_EXPORT_DATA = "//span[contains(text(),' Import & Export Data ')]"
    BUSINESS_ENTITIES = "//div[@class='import-export-page']//span[contains(text(),'Business Entities')]"
    RECLASSES = "//span[contains(text(),'Reclasses')]"
    DOCUMENTS = "//span[contains(text(),'Documents')]"
    IS_FOREIGN_OR_DOMESTIC = "//div[@class='dx-dropdowneditor-input-wrapper dx-selectbox-container']//input[@placeholder='Select...']"
    DOMESTIC = "//div[@role='option']//div[contains(text(),'Domestic')]"
    BE_1 = "//tr[@aria-rowindex='1']//td[@aria-colindex='5']"
    BE_2 = "//tr[@aria-rowindex='2']//td[@aria-colindex='5']"
    BE_3 = "//tr[@aria-rowindex='3']//td[@aria-colindex='5']"
    BE_4 = "//tr[@aria-rowindex='4']//td[@aria-colindex='5']"
    BE_5 = "//tr[@aria-rowindex='5']//td[@aria-colindex='5']"
    BE_6 = "//tr[@aria-rowindex='6']//td[@aria-colindex='5']"
    BE_7 = "//tr[@aria-rowindex='7']//td[@aria-colindex='5']"
    BE_8 = "//tr[@aria-rowindex='8']//td[@aria-colindex='5']"
    BE_9 = "//tr[@aria-rowindex='9']//td[@aria-colindex='5']"
    BE_10 = "//tr[@aria-rowindex='10']//td[@aria-colindex='5']"
    LAST_UPDATED_DATE = '.dx-datebox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input'
    DATE_DROPDOWN = "//div[@class='dx-dropdowneditor-icon']"
}
export default ImportAndExportBusinessEntitiesLocators;