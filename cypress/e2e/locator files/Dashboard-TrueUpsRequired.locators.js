
class DashboardTrueUpsRequiredLocators {

    TAXYEARDROPDOWN = "//div[contains(text(),' True Ups Required ')]//following::trux-input-icon"
    TAXYEAR = "//ul[@class='trux-list']//li[contains(text(),'2022')]"
    VERIFYCHART = "//div[@class='true-ups-required-chart-legend']//div[contains(text(),' Summary Information ')]"
    SHOWDETAILS = "//div[@class='trux-card-toolbar trux-card-toolbar--right ng-star-inserted']//a[@routerlink='true-ups-required']"
    TAXYEARDROPDOWN_2 = "//trux-input[@type='select']"
    SELECTTAXYEAR = "//li[contains(text(),' 2022')]"
    PROCESSDATE = "//input[@placeholder='Choose a date']"
    FINALDATE = "//input[@placeholder='Choose a date']"
    SOURCEPAGE = "//div[@class='true-ups-required-table-container__tabs']"
    SUMMARY = "//trux-collapsible-header[@class='mezz-dashboard-true-ups-required__chart-view-header']"
    COULMN_1 = "//td[@aria-colindex='1']//div[contains(text(),'Investment Name')]"
    COLUMN_2 = "//td[@aria-colindex='2']//div[contains(text(),'Investment Tax ID')]"
    COLUMN_3 = "//td[@aria-colindex='3']//div[contains(text(),'Investor Tax ID')]"
    COLUMN_4 = "//td[@aria-colindex='4']//div[contains(text(),'Investor Name')]"
    COLUMN_5 = "//td[@aria-colindex='5']//div[contains(text(),'Estimate Taxable Income')]"
    COLUMN_6 = "//td[@aria-colindex='6']//div[contains(text(),'Estimate Process Date')]"
    COLUMN_7 = "//td[@aria-colindex='7']//div[contains(text(),'Final Taxable Income')]"
    COLUMN_8 = "//td[@aria-colindex='8']//div[contains(text(),'Final Process Date')]"
    TRUEUPSWIDGET = "//div[contains(text(),' True Ups Required ')]"
    ESTIMATE = "//div[@class='true-ups-required-chart-legend']//span[contains(text(),' Estimate ')]"
    ACTUAL = "//span[contains(text(),' Actual ')]"
    DIFFERENCE = "//span[contains(text(),' Difference ')]"
}
export default DashboardTrueUpsRequiredLocators;