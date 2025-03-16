class DashboardYearLocators{

    SHOW_DETAILS_BUTTON = "//a[contains(text(),' Details ')]"
    TAX_YEAR_DROPDOWN = "input[placeholder='Select...']"
    VERIFY_CHART = ".received-document-chart__chart > .trux-chart > .trux-chart__chart-container > .trux-chart__chart > .trux-chart__chart-canvas"
    VERIFY_INVESTMENT_NAME = "td[aria-label='Column Investment Name']"
    VERIFY_INVESTOR = "td[aria-label='Column Investor']"
    VERIFY_SCHEDULE_NAME = "td[aria-label='Column Schedule Name']"
    VERIFY_PRIOR_YEAR_RECEIPT_DATE = "td[aria-label='Column Prior Year Receipt Date']"
    VERIFY_EXPECTED_RECEIPT_DATE = "td[aria-label='Column Expected Receipt Date']"
    VERIFY_ACTUAL_RECEIPT_DATE = "td[aria-label='Column Actual Receipt Date']"
    TAX_YEAR_DROPDOWN_DETAILS = "input[placeholder='Select...']"
    INVESTMENT_NAME_DETAILS = ":nth-child(3) > .trux-input > .trux-input-wrapper > .trux-input__input"
    DATE_FILTER_DETAILS = "input[placeholder='Choose a date']"
    VERIFY_SIDE_FILTERS = "tr[aria-rowindex='1']"
    DISPLAY_EXP_YEAR = 'trux-list[displayexpr="name"]'
}
export default DashboardYearLocators;