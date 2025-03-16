import ProcessingFunctions from "../../../pages/Processing.page";
import AppkitTrainingEngagementLandingPageFunctions from "../../../pages/Appkit-TrainingEngagementLandingPage.page"; 

var processingFunctions = new ProcessingFunctions
var appkitTrainingEngagementLandingPageFunctions = new AppkitTrainingEngagementLandingPageFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})

When("I click on Training Engagement button", ()=>{
    appkitTrainingEngagementLandingPageFunctions.clickTrainingEngagementButton();
 })

Then("I verify new look and feel is implemented", ()=>{
  appkitTrainingEngagementLandingPageFunctions.verifyNewUI();
 })

When('I set the viewport to {int}x{int}', (width, height) => {
   cy.viewport(width, height);
 });

Then("I verify that new content is responsive", ()=>{
 appkitTrainingEngagementLandingPageFunctions.verifyContentResponsive();
})