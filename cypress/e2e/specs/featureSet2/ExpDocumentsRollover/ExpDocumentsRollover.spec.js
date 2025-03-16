import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import DocCenterExpectedDocumentsFunctions from "../../../pages/DocCenterExpectedDocuments.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";

var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var docCenterExpectedDocumentsFunctions = new DocCenterExpectedDocumentsFunctions
var smartK1Functions = new SmartK1Functions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I Click on Admin tab from side menu",()=>{
    expDocumentsRolloverFunctions.ClickOnAdminTab();
})
Then("I Click on Engagement Settings tab from admin menu",()=>{
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
})
And("I click on Expected Documents Rollover tab",()=>{
    expDocumentsRolloverFunctions.ClickOnExpectedDocumentsRolloverTab();
})
Then("I Select Tax Year from Tax Year drop down",()=>{
    expDocumentsRolloverFunctions.ClickOnTaxYearDropDown({ multiple: true });
    expDocumentsRolloverFunctions.ClickOnTaxYear();
})
And("I Select Document by clicking on checkbox besides the Document",()=>{
    expDocumentsRolloverFunctions.ClickOnScheduleCheckBox();
})
Then("I Click on Roll Over Button",()=>{
    expDocumentsRolloverFunctions.ClickOnRollOverButton();
})
And("I Click on Yes Option from the popup",()=>{
    expDocumentsRolloverFunctions.ClickOnYesPopup();
})
Then("I choose a Direct Connect Profile from Drop Down",()=>{
   expDocumentsRolloverFunctions.ClickOnDirectConnectProfileDropDown();
   expDocumentsRolloverFunctions.ClickOnOption1();
}) 
And("I Select All the profiles and click on Bulk Assign Button",()=>{
   expDocumentsRolloverFunctions.ClickOnBulkAssignCheckBox();
   expDocumentsRolloverFunctions.ClickOnBulkAssignButton();
})
Then("I Select Options from drop down for Direct Connect Profile,Taxonomy Template and Assign in TRACK to",()=>{
    expDocumentsRolloverFunctions.ClickOnDirectConnectProfile();
    expDocumentsRolloverFunctions.ClickOnOption1BulkAssign();
})
And("I Click on Assign Button",()=>{
    expDocumentsRolloverFunctions.ClickOnAssignButton();
})
Then("I Click on Roll Over Button for Bulk Assign",()=>{
    expDocumentsRolloverFunctions.ClickOnRollOverButton();
})