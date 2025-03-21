class DirectConnectLocators{
ADMIN = "//span[contains(text(),'Admin')]"
ADD_ENGAGEMENT = "//div[contains(text(),' Add Engagement ')]"
CLIENT_NAME = "//trux-input[@formcontrolname='clientName']"
ENGAGEMENT_NAME = "//trux-input[@formcontrolname='engagementName']//input[@type='text']"
LINE_OF_BUSINESS = "//trux-input[@formcontrolname='lineOfBusiness']"
ENGAGEMENT_TYPE = "//trux-input[@formcontrolname='engagementType']"
TESTORTRAIN = "//li[contains(text(),' Test/Train')]"
OK = "//div[contains(text(),' Ok ')]"
SAVE = "//div[contains(text(),' Save ')]"
SEARCH = "//input[@role='searchbox']"
HIGHLIGHT = "//span[@class='highlight']"
IMPORT_AND_EXPORT_DATA = "//span[contains(text(),' Import & Export Data ')]"
IMPORT_DATA_BUTTON = "//div[contains(text(),'Import Data')]"
UPLOAD_BTN = "//mezz-slideout//input[@type='file']"
CLOSE_SLIDEOUT = "//button[@aria-label='Close slideout']"
DIRECT_CONNECT = "//a[contains(text(),' Direct Connect ')]"
ADD_PROFILE_BTN = "//span[contains(text(),'Add Profile')]"
CLIENT_ID = "//trux-input[@formcontrolname='clientId']//input[@placeholder='Select...']"
TAX_YEAR = "//trux-input[@formcontrolname='taxYear']//input[@placeholder='Select...']"
DATABASE_NAME = "//trux-input[@formcontrolname='databaseId']//input[@placeholder='Select...']"
EDIT_ICON = "//tr[@aria-rowindex='1']//td[@aria-colindex='2']//a[@truxtooltip='Edit']"
CREATE_BE_FROM_TRACK_BTN = "//button[@class='trux-button__button trux-button__button--secondary']"
CANCEL_BTN = "//span[contains(text(),'Cancel')]"
SAVE_PROFILE_BUTTON = "//span[contains(text(),'Save Profile')]"
PROGRESS_BAR = "//div[@class='trux-progress-indicator__progress-bar-label']"
SAVE_AND_CLOSE_BTN = "//span[contains(text(),'Save and Close')]"
SELECT_CLIENT_NAME = "//li[contains(text(),' Test')]"
TESTING_TYPE = "//li[contains(text(),' Testing')]"
TAX_YEAR_VALUE = "//li[contains(text(),' 2023')]"
SELECT_DATABASE_NAME = "//li[contains(text(),' BennyTest2023_FER')]"
PROFILE_NAME = "//tr[@aria-rowindex='1']//td[@aria-colindex='3']"
CLIENT_NAME_2 = "//input[@placeholder='Search...']"
VERIFY_CLIENT_NAME ="//tr[@aria-rowindex='1']//td[@aria-colindex='4']"
VERIFY_DATABASE_NAME ="//tr[@aria-rowindex='1']//td[@aria-colindex='5']"
SELECT_TAX_YEAR = "//tr[@aria-rowindex='1']//td[@aria-colindex='6']"
MAPPING_STATUS = "//td[@aria-colindex='2']//div[@class='dx-dropdowneditor-input-wrapper dx-selectbox-container']"
SELECT_MAPPING_STATUS = "//div[contains(text(),'Unmapped')]"  
TRACK_FTE_DROPDOWN = "//tr[@aria-rowindex='1']//td[@aria-colindex='7']//div[@aria-label='Select']"
SELECT_TRACK_FTE = "//div[contains(text(),'654 - PwC Entity')]"
MAPPING_STATUS_SELECT = "//div[contains(text(),'Manually mapped')]" 
VERIFY_MAPPING_STATUS = "//tr[@aria-rowindex='1']//td[@aria-colindex='2']"
MAPPING_STATUS_1 = "//tr[@aria-rowindex='1']//td[@aria-colindex='2']"
MAPPING_STATUS_2 = "//tr[@aria-rowindex='2']//td[@aria-colindex='2']"
MAPPING_STATUS_3 = "//tr[@aria-rowindex='3']//td[@aria-colindex='2']"
MAPPING_STATUS_4 = "//tr[@aria-rowindex='4']//td[@aria-colindex='2']"
MAPPING_STATUS_5 = "//tr[@aria-rowindex='5']//td[@aria-colindex='2']"
MAPPING_STATUS_6 = "//tr[@aria-rowindex='6']//td[@aria-colindex='2']"
MAPPING_STATUS_7 = "//tr[@aria-rowindex='7']//td[@aria-colindex='2']"
MAPPING_STATUS_8 = "//tr[@aria-rowindex='8']//td[@aria-colindex='2']"
MAPPING_STATUS_COLUMN = "//div[contains(text(),'Mapping Status')]"
BUSSINESS_ENTITY_NAME_COLUMN = "//div[contains(text(),'Business Entity Name')]"
PRIMARY_ID_COLUMN = "//div[contains(text(),'Business Entity Primary ID')]"
TAX_ID_COLUMN = "//div[contains(text(),'Tax ID')]"
FOREIGN_COLUMN = "//div[contains(text(),'Is Foreign or Domestic?')]"
TRACK_FTE_COLUMN = "//div[contains(text(),'TRACK FTE Name')]"
TRACK_FTE_TAX_COLUMN = "//div[contains(text(),'TRACK FTE Tax ID')]"
MAPPING_STATUS_DROPDOWN = "//td[@aria-colindex='2']//div[@class='dx-show-invalid-badge dx-selectbox dx-textbox dx-texteditor dx-dropdowneditor-button-visible dx-editor-outlined dx-widget dx-dropdowneditor dx-dropdowneditor-field-clickable']"
FOREIGN_DOMESTIC_DROPDOWN = "//td[@aria-colindex='6']//div[@class='dx-show-invalid-badge dx-selectbox dx-textbox dx-texteditor dx-dropdowneditor-button-visible dx-editor-outlined dx-widget dx-dropdowneditor dx-dropdowneditor-field-clickable']"
SELECT_FOREIGN = "//div[@role='option']//div[contains(text(),'Foreign')]"
SELECT_DOMESTIC = "//div[@role='option']//div[contains(text(),'Domestic')]"
SELECT_ROW = "//tr[@aria-rowindex='1']//td[@aria-colindex='1']//div[@aria-label='Select row']"
RESYNC = "//button//span[contains(text(),'Resync')]"
LOADER = "//fa-icon[@truxtooltip='Please wait until data from selected database is loaded.']"
IMPORT = "//button//div[contains(text(),' Import ')]"
SELECT_ALL = "//trux-checkbox//span[contains(text(),' Select All ')]"
ALLOCABLE_ITEM_TEMPLATE = "//a[contains(text(),' Allocable Item Templates ')]"
EXPORTK3 = "//button//span[contains(text(),'Export Master K-3 Template')]"
IMPORTK3 = "//button//span[contains(text(),'Import Master K-3 Template')]"
}

export default DirectConnectLocators;