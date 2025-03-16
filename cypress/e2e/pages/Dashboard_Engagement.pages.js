import DashboardEngagLocators from "../locator files/Dashboard_Engagement.locators";

var dashboardEngagLocators = new DashboardEngagLocators

class DashboardEngagFunctions {
    ClickOnEngagementDropdown(){
        cy.xpath(dashboardEngagLocators.ENGAGEMENT_DROPDOWN).click()
    }
    SelectCurrentEngagement(){
        cy.xpath(dashboardEngagLocators.SELECT_CURRENT_ENGAGEMENT).click()
    }
    VerifyCurrentEngagement(){
        cy.xpath(dashboardEngagLocators.VERIFY_CURRENT_ENGAGEMENT).should('contain',' DATAFLOW_QA_AUTOMATION ')
    }
    SearchDifferentEngagement(){
        cy.xpath(dashboardEngagLocators.SEARCH_ENGAGEMENT_DROPDOWN).type('Swaraj Automation Test')
    }
    SelectDifferentEngagement(){
        cy.xpath(dashboardEngagLocators.SELECT_DIFFERENT_ENGAGEMENT).click()
    }
    VerifyDifferentEngagement(){
        cy.xpath(dashboardEngagLocators.VERIFY_DIFFERENT_ENGAGEMENT).should('contain',' Swaraj Automation Test ')
    }
}
export default DashboardEngagFunctions;