import ReviewLevelFunctions from "../../../pages/ReviewLevels.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import CustomColumnsFunctions from "../../../pages/CustomColumns.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import DocCenterExpectedDocumentsFunctions from "../../../pages/DocCenterExpectedDocuments.pages";

var enagegementSetupFunctions = new EnagegementSetupFunctions
var reviewLevelFunctions = new ReviewLevelFunctions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions

var customColumnsFunctions = new CustomColumnsFunctions
var docCenterExpectedDocumentsFunctions = new DocCenterExpectedDocumentsFunctions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
   docCenterExpectedDocumentsFunctions.SearchEngagement();
})
And("I Click on Admin tab from side menu",()=>{
    expDocumentsRolloverFunctions.ClickOnAdminTab();
})
Then("I Click on Engagement Settings tab from admin menu",()=>{
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
})
And("I click on Review Levels tab",()=>{
   reviewLevelFunctions.ClickOnReviewLevelsTab();
})
Then("I Turn ON the PwC Document Review Levels toggle button and Click on Custom Review Level Description Right Arrow",()=>{
    reviewLevelFunctions.ClickOnPwCToggleBtn();
    reviewLevelFunctions.ClickOnClientToggleBtn();
    cy.wait(4000)
    reviewLevelFunctions.ClickOnPwCToggleBtn();
    cy.wait(4000)
    reviewLevelFunctions.ClickOnClientToggleBtn();
    reviewLevelFunctions.ClickOnRightArrow();   
})
And("I Click on Add Review Level Button",()=>{
    reviewLevelFunctions.ClickOnAddReviewLevelButton();
 })
 Then("I Verify Review Level is added under Review Level Grid",()=>{
    reviewLevelFunctions.VerifyReviewLevelGrid();
})
 And("I Go to Document Center Documents tab and click on edit button besides any document under actions column",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    customColumnsFunctions.ClickOnEditIconDocuments();
})
And("I Go to PwC Document Review Level Dropdown and change the existing value",()=>{
    reviewLevelFunctions.ClickOnPwCReviewLevelDropdown();
 })
 Then("I Go to Client Review Level Dropdown and change the existing value",()=>{
    reviewLevelFunctions.ClickOnPwCClientLevelDropdown();
 })
 And("I Go to PwC Document Review Level Dropdown and Set the highest Review Level value",()=>{
   reviewLevelFunctions.ChooseHighestPwCLevel();
})
Then("I Go to Client Review Level Dropdown and set the highest Review Level value",()=>{
   reviewLevelFunctions.ChooseHighestClientLevel();
})
 And("I Click on Save Button",()=>{
    reviewLevelFunctions.ClickOnSaveButton();
    cy.wait(5000)
 })
 And("I Go to PwC Document Review Level Dropdown and Set its level to lowest",()=>{
    reviewLevelFunctions.ChooseLowestPwCLevel();
 })
 Then("I Go to Client Review Level Dropdown and Set its level to lowest",()=>{
    reviewLevelFunctions.ChooseLowestClientLevel();
 })
 Then("I Select that document and check for diasbled approve button under actions dropdown",()=>{
   reviewLevelFunctions.ClickOnDocumentsPage();
    reviewLevelFunctions.ClickOnActionsDropdown();
    reviewLevelFunctions.DisabledApproveOption();
 })
 Then("I Expand the Custom Review Level Description Right Arrow and click on edit button under actions column",()=>{
   reviewLevelFunctions.ClickOnRightArrow();
 })
 And("I Edit Custom Description from Edit Review Level Slideout",()=>{
   reviewLevelFunctions.ClickOnEditIcon();
   reviewLevelFunctions.TypeCustomDescription();
 })
 Then("I Verify Review Levels Description from the grid",()=>{
   reviewLevelFunctions.VerifyCustomDescriptionGrid();
   cy.wait(3000)
   reviewLevelFunctions.ClickOnEditIcon();
   cy.wait(3000)
   reviewLevelFunctions.ClearCustomDescription();
 })
