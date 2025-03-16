import DocCenterExpectedDocumentsFunctions from "../../../pages/DocCenterExpectedDocuments.pages";
import DirectConnectFunctions from "../../../pages/directConnect.pagesP2";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import ExpectedDocumentsFunctions from "../../../pages/ExpectedDocuments.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";

var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var directConnectFunctions = new DirectConnectFunctions
var expectedDocumentsFunctions = new ExpectedDocumentsFunctions
var enagegementSetupFunctions = new EnagegementSetupFunctions
var docCenterExpectedDocumentsFunctions = new DocCenterExpectedDocumentsFunctions
var approvalFunctions = new ApprovalFunctions();

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
   docCenterExpectedDocumentsFunctions.SearchEngagement();
})
And("I Click on Document Center Section",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
})
Then("I Click on Expected Documents tab",()=>{
    expectedDocumentsFunctions.ClickOnExpectedDocumentsDC();
})
And("I Click on add expected documnt button and turn off direct connect toggle button",()=>{
    directConnectFunctions.ClickOnAddExpectedDocButton();
})
Then("I Fill all the required information",()=>{
    docCenterExpectedDocumentsFunctions.TypeTaxYear();
    directConnectFunctions.ClickOnScheduleDropDown();
    directConnectFunctions.SelectFederalK1();
    directConnectFunctions.ClickOnInvestorDropDown();
    docCenterExpectedDocumentsFunctions.SelectInvestor();
    directConnectFunctions.ClickOnInvestmentDropDown();
    docCenterExpectedDocumentsFunctions.SelectInvestment();
    directConnectFunctions.ClickOnIsForeignOrDomDD();
    directConnectFunctions.SelectDomestic();
    directConnectFunctions.ClickOnCategoryDropDown();
    directConnectFunctions.SelectActual();
   
})
And("I Click on edit expected documnt button and edit some fields",()=>{
    docCenterExpectedDocumentsFunctions.ClickOnEditButton();
    docCenterExpectedDocumentsFunctions.ClickOnProjectedDate();
})
And("I Click on Save Button",()=>{
    directConnectFunctions.ClickOnSaveButton();
})
Then("I Verify expected document is added under expected documents tab",()=>{
    approvalFunctions.ClickOnResetGrid();
    docCenterExpectedDocumentsFunctions.VerifyInvestmentName();
    docCenterExpectedDocumentsFunctions.VerifyInvestorName();
})
And("I Click on Export All Data Button",()=>{
    docCenterExpectedDocumentsFunctions.ClickOnExportAllDataButton();
})

