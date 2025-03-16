class PastDueAlertLocators {
DOCUMENT_CENTER = "//span[contains(text(),' Document Center ')]"
EXPECTED_DOCUMENTS_SECTION = "//a[contains(text(),' Expected Documents ')]"
ADD_EXPECTED_DOCUMENT_BTN = "//span[contains(text(),'Add Expected Document')]"
TAX_YEAR_TEXTBOX = "//trux-input[@formcontrolname='taxYear']//input[@type='text']"
SCHEDULE_ID_DROPDOWN = "//trux-input[@type='select' and @formcontrolname='scheduleId']"
FED_K1_OPTION = "//li[contains(text(),' Federal K-1')]"
PROJECT_RECIEVE_DATE = "//trux-input[@formcontrolname='projectedReceiveDate']//input[@type='text' and @class='trux-input-date__calendar-input']"
INVESTOR_ID_TEXTBOX = "//trux-input[@type='select' and @formcontrolname='investorId']"
OPTION = 'trux-list-single-select.ng-star-inserted > :nth-child(1)'
INVESTMENT_ID_TEXTBOX = "//trux-input[@type='select' and @formcontrolname='investmentId']"
INVESTMENT_ENTITY = "//trux-input[@type='select' and @formcontrolname='investmentEntityIsForeign']"
DOMESTIC = "//li[contains(text(),' Domestic')]"
CATEGORY = "//trux-input[@type='select' and @formcontrolname='category']"
ESTIMATE = "//li[contains(text(),' Estimate')]"
SAVE = "//div[contains(text(),' Save ')]"
DASHBOARD = "//span[contains(text(),' Dashboard ')]"
PAST_DUE_ALERTS = "//div[contains(text(),'Past Due Alerts')]"
PAST_DUE = "//a[@routerlink='past-due']"
TABLE_CELL = "//div[@role='grid']"
SUMMARY_TITLE_VALUE = '.past-due-alert-summary-tile__value'
}

export default PastDueAlertLocators