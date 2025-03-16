import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";
import FoFAutomationFunctions from "../../../pages/FoFAutomation.pages";
import FoFAutomationP2Functions from "../../../pages/FoFAutomationP2.pages";

var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var smartK1Functions = new SmartK1Functions
var enagegementSetupFunctions = new EnagegementSetupFunctions
var approvalFunctions = new ApprovalFunctions
var foFAutomationFunctions = new FoFAutomationFunctions
var foFAutomationP2Functions = new FoFAutomationP2Functions

Given("I Open the Application", () => {
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement", () => {
    smartK1Functions.SearchEngagement();
})
And("I go to Document Center Documents tab & Select a 2023 K-1 Doc", () => {
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    foFAutomationFunctions.ClickOnResetGridButton();
    approvalFunctions.SelectFederalK1();
    foFAutomationFunctions.SelectTaxYear2023();
    foFAutomationFunctions.SelectDocument();
})
And("I Click on Actions dropdown & Click on Generate FoF Extract option", () => {
    foFAutomationFunctions.ClickOnActionsDropdown();
    cy.wait(3000);
    foFAutomationFunctions.ClickOnGenerateFoFExtract();
    cy.wait(3000);
    foFAutomationFunctions.ClickOnExportButton();
    foFAutomationFunctions.VerifySuccessMessage();
})
Then("I go to Download Extracts tab", () => {
    foFAutomationFunctions.DownloadExtractsTab();
    foFAutomationFunctions.VerifyCompleteStatus();
})
And("I Download the Generted FoF Extract Document", () => {
    foFAutomationFunctions.ClickOnDownloadBtn();
})
Then("I check the presence of taxonomy column in the Excel", () => {
    foFAutomationP2Functions.CheckTaxonomyColumnExcel();
})
Then("I check the footnotes summary sheets in the Excel", () => {
    foFAutomationP2Functions.VerifySheetNames();
})