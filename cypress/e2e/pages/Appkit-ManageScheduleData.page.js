import AppkitManageScheduleDataLocators from "../locator files/Appkit-ManageScheduleData.locator"

var appkitManageScheduleDataLocators = new AppkitManageScheduleDataLocators

class AppkitManageScheduleDataFunctions{
applyFilters(){
    cy.xpath(appkitManageScheduleDataLocators.JURISDICTION).type('AK')
    cy.xpath(appkitManageScheduleDataLocators.SCHEDULE).type('K-1')
    cy.xpath(appkitManageScheduleDataLocators.TAX_YEAR).type('2020')
    cy.xpath(appkitManageScheduleDataLocators.SCHEDULE_ITEM_COUNT).type('46')
}
verifyFilters(){
    cy.xpath(appkitManageScheduleDataLocators.JURISDICTION_VALUE).should('have.text','AK')
    cy.xpath(appkitManageScheduleDataLocators.SCHEDULE_VALUE).should('have.text','K-1')
    cy.xpath(appkitManageScheduleDataLocators.TAX_YEAR_VALUE).should('have.text','2020')
    cy.xpath(appkitManageScheduleDataLocators.SCHEDULE_ITEM_COUNT_VALUE).should('have.text','46')
}
}

export default AppkitManageScheduleDataFunctions;