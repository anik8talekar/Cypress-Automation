class AppkitContactsLocators{
ADD_CONTACT_SLIDEOUT = "//div[@class='awm-slideout']"
EDIT_ICON = "//tr[@aria-rowindex='1']//span[@class='awm-icon Appkit4-icon icon-pencil-outline ap-font-16']"
NAME = "//awm-text-input[@title='Name']//input[@type='text']"
EMAIL = "//awm-text-input[@title='Email']//input[@type='text']"
PHONE = "//awm-text-input[@type='phone']//input[@type='phone']"
COMPANY_NAME = "//awm-text-input[@title='Company']//input[@type='text']"
PORTAL_URL = "//awm-text-input[@title='Portal URL']//input[@type='text']"
SAVE_EDIT = "//div[@class='slideout-footer']//button[@type='submit']"
SAVE_BUTTON = "//div[contains(text(),' Save ')]"
REQUIRED_FIELD = "//span[@class='contact-slideout__error-label ng-star-inserted']"
ADMIN = "//span[contains(text(),' Admin ')]"
AUDIT_LOGS = "//span[contains(text(),' Audit Logs ')]"
SCHEDULE_CHANGE_LOGS = "//a[contains(text(),' Schedule Change Logs ')]"
SEARCH_USER = "//tr[@class='dx-row dx-column-lines dx-datagrid-filter-row']//td[@aria-colindex='1']//input[@type='text']"
TAX_YEAR_DROPDOWN = "//tr[@class='dx-row dx-column-lines dx-datagrid-filter-row']//td[@aria-colindex='4']//div[@aria-label='Select']"
TAXYEAR_2023 = "//div[@role='option']//div[contains(text(),'2023')]"
FOOTER = "//footer[@class='mez-footer']"
}

export default AppkitContactsLocators;