class CanoeIntegrationLocators {
    ADMIN = "//span[contains(text(),' Admin ')]"
    ENGAGEMENT_SETTINGS = "//span[contains(text(),' Engagement Settings ')]"
    DOCUMENT_IMPORT_AND_EXPORT = "//a[contains(text(),' Document Import & Export ')]"
    TOGGLE_BTN = "//div[@class='setting-toogle']//trux-toggle//label[@type='checkbox']"
    CANOE_SETTINGS = "//span[contains(text(),'Canoe Settings')]"
    ADD_CLIENT_CREDENTIAL_BTN = "//span[contains(text(),'Add Client Credential')]"
    CLIENT_ID_TEXTBOX = "//trux-input[@formcontrolname='clientId']//input"
    CLINET_SECRET_TEXTBOX = "//trux-input[@formcontrolname='clientSecret']//input"
    SAVE_BTN = "//div[contains(text(),' Save ')]"
    CHECKBOX = "//tr[@aria-rowindex='1']//span[@class='dx-checkbox-icon']"
    DELETE_BTN = "//span[contains(text(),'Delete')]"
    DELETE_YES = "//div[contains(text(),' Delete ')]"
    CLIENT_SECRET = "//tr[@aria-rowindex='1']//td[@aria-colindex='4']//span"
    LAST_RETRIEVED_DATE = "//input[@class='trux-input-date__calendar-input']"
    CONFIGURATION_SWITCH_BUTTON = "//trux-toggle//label[@type='checkbox']"
    SOURCE = "//div[@aria-colindex='19']//button"
    CANOE_FROM_SOURCE_DROPDOWN = "//div[contains(text(),'Canoe')]"
    CANOE_DOCUMENTS = "//a[contains(text(),' Canoe Documents ')]"
    STATUS_DROPDOWN = '//div[@class="dx-dropdowneditor-input-wrapper dx-selectbox-container"]//div[@class="dx-dropdowneditor-icon"]'
    SELECT_DATE = "//td[@class='dx-calendar-cell dx-calendar-today dx-calendar-contoured-date']"
    VERIFY_STATUS = "//div[@aria-rowindex='3']//div[@aria-colindex='3']//span[@class='processing-status-indicator']//span"
    DOCUMENT_CENTER = "//span[contains(text(),'Document Center')]"
    AVAILABLE_DOCUMENTS = "//a[contains(text(),' Available Documents ')]"
    USER = "//span[contains(text(),'User')]"
    DOCUMENTS_SOURCE_DROPDOWN = '[aria-colindex="6"] > :nth-child(1) > .dx-editor-container > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-widget > .dx-button-content > .dx-dropdowneditor-icon'
    SOURCE_CANOE = "//div[contains(text(),'Canoe')]"
    ACTIONS_PROCESS_1 = '//tr[@aria-rowindex="1"]//div[@class="dx-template-wrapper"]//a[@truxtooltip="Process"]'
    ACTIONS_PROCESS_2 = '//tr[@aria-rowindex="2"]//div[@class="dx-template-wrapper"]//a[@truxtooltip="Process"]'
    ACTIONS_PROCESS_3 = '//tr[@aria-rowindex="3"]//div[@class="dx-template-wrapper"]//a[@truxtooltip="Process"]'
    ACTIONS_PROCESS_4 = '//tr[@aria-rowindex="4"]//div[@class="dx-template-wrapper"]//a[@truxtooltip="Process"]'
    ACTIONS_PROCESS_5 = '//tr[@aria-rowindex="5"]//div[@class="dx-template-wrapper"]//a[@truxtooltip="Process"]'
    NOTIFICATION_POPUP = '.trux-notification__body'
    MANUAL_RETRIEVAL_BUTTON = "//span[contains(text(),'Manual Retrieval of Available Canoe Documents')]"
    LOWER_BOUND_DATE = "//input[@placeholder='Choose a date']"
    RETRIEVE_BUTTON = "//div[contains(text(),' Retrieve ')]"
    COLUMN_SELECTOR = "//div[@class='right-actions']//awm-button[@icon='container-outline' and @btntype='secondary']"
    SOURCE_OPTION = "//span[contains(text(),'Source')]"
    TYPE_OPTION = "//span[contains(text(),'Type')]"
    DATE_OPTION = "//span[contains(text(),'Date')]"
    CANOE_DOC_STATUS_1 = "//tr[@aria-rowindex='1']//td[@aria-colindex='8']"
    CANOE_DOC_STATUS_2 = "//tr[@aria-rowindex='2']//td[@aria-colindex='8']"
    CANOE_DOC_STATUS_3 = "//tr[@aria-rowindex='3']//td[@aria-colindex='8']"
    CANOE_DOC_STATUS_4 = "//tr[@aria-rowindex='4']//td[@aria-colindex='8']"
    CANOE_DOC_STATUS_5 = "//tr[@aria-rowindex='5']//td[@aria-colindex='8']"
    SOURCE_COLOUMN = "//div//div//span[contains(text(),'Source')]"
    DATE_COLOUMN = "//div//div//span[contains(text(),'Date')]"
    TYPE_COLOUMN = "//div//div//span[contains(text(),'Type')]"
    SELECT_ALL = "(//div[@ref='eSetFilterList']//input[@type='checkbox'])[1]"
    CANOE = "(//div[@ref='eSetFilterList']//input[@type='checkbox'])[2]"
}
export default CanoeIntegrationLocators;