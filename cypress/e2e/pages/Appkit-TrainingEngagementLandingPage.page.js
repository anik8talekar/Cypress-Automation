import AppkitTrainingEngagementLandingPageLocators from "../locator files/Appkit-TrainingEngagementLandingPage.locator";

var appkitTrainingEngagementLandingPageLocators = new AppkitTrainingEngagementLandingPageLocators

class AppkitTrainingEngagementLandingPageFunctions{
      clickTrainingEngagementButton(){
        cy.xpath(appkitTrainingEngagementLandingPageLocators.TRAINING_ENTAGEMENT_BUTTON).click();
      }
      verifyNewUI(){
        cy.xpath(appkitTrainingEngagementLandingPageLocators.TRAINING_ENGAGEMENTS_UI).should('be.visible')
      }
      verifyContentResponsive(){
        cy.xpath(appkitTrainingEngagementLandingPageLocators.CREATE_TRAINING_ENGAGEMENT_BUTTON).should('be.visible').and('not.be.disabled').and('be.enabled');
      }
}

export default AppkitTrainingEngagementLandingPageFunctions;