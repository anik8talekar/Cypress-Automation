import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import Form8621Functions from "../../../pages/Form8621.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";
import FoFAutomationFunctions from "../../../pages/FoFAutomation.pages";

var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var smartK1Functions = new SmartK1Functions
var enagegementSetupFunctions = new EnagegementSetupFunctions
var form8621Functions = new Form8621Functions
var approvalFunctions = new ApprovalFunctions
var foFAutomationFunctions = new FoFAutomationFunctions

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
    foFAutomationFunctions.ClickOnGenerateFoFExtract();
    cy.wait(3000);
    foFAutomationFunctions.ClickOnExportButton();
    foFAutomationFunctions.VerifySuccessMessage();
})
Then("I go to Download Extracts tab", () => {
    foFAutomationFunctions.DownloadExtractsTab();
    foFAutomationFunctions.SearchFileNameExtracts();
    cy.wait(3000);
    foFAutomationFunctions.VerifyExtractedFileName();
    foFAutomationFunctions.VerifyCompleteStatus();
})
And("I Download the Generted FoF Extract Document", () => {
    foFAutomationFunctions.ClickOnDownloadBtn();
})
And("I go to Document Center Documents tab & Select a 2022 K-3 Doc", () => {
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    foFAutomationFunctions.ClickOnResetGridButton();
    foFAutomationFunctions.SelectFederalK3();
    foFAutomationFunctions.SelectTaxYear2022();
    foFAutomationFunctions.SelectDocument();
})
And("I Click on Actions dropdown & Check for Generate FoF Extract option", () => {
    foFAutomationFunctions.ClickOnActionsDropdown();
    cy.wait(2000);
})
Then("I verify Generate FoF Extract Option is disabled", () => {
    foFAutomationFunctions.VerifyDisableGenerateFoFExtract();
    foFAutomationFunctions.VerifyDisabledToolTip();
})
And("I go to Business Entities Tab", () => {
    foFAutomationFunctions.ClickOnBusinessEntitesTab();
})
And("I Check if the horizontal scrollbar is visible without scrolling down", () => {
    foFAutomationFunctions.VerifyBusinessEntitesScrollBar();
})
And("I Check if the horizontal scrollbar is visible without scrolling down for review page", () => {
    form8621Functions.ClickOnViewByDropdown();
    cy.wait(3000);
    foFAutomationFunctions.SelectScheduleItemDetails();
    cy.wait(3000);
    foFAutomationFunctions.ClickOnExpandIcon();
    cy.wait(3000);
    foFAutomationFunctions.VerifyBusinessEntitesScrollBar();
})
Then("I scroll to right columns & check it is scrolling up & down or not", () => {
    foFAutomationFunctions.ScrollBusinessEntitiesScrollBar();
})
And("I navigate to review page of any Document", () => {
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    foFAutomationFunctions.ClickOnResetGridButton();
    approvalFunctions.SelectFederalK1();
    form8621Functions.SearchDocumentNameFedK1();
    foFAutomationFunctions.SelectTaxYear2022();
    approvalFunctions.ClickOnReviewButton1();
})
Then("I Verify Generate FoF Extract Option is enabled", () => {
    foFAutomationFunctions.ClickOnActionsDropdown();
    cy.wait(3000);
    foFAutomationFunctions.VerifyEnabledGenerateFoFExtract();
    foFAutomationFunctions.VerifyEnabledToolTip();
})
And("I Select non-2023 Federal K-1 documents along with 2023 Federal K-1 documents", () => {
    foFAutomationFunctions.ClickOnResetGridButton();

    foFAutomationFunctions.SelectFederalK3();
    foFAutomationFunctions.SelectTaxYear2022();
    foFAutomationFunctions.SelectDocument();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    approvalFunctions.SelectFederalK1();
    foFAutomationFunctions.SelectTaxYear2023();
    foFAutomationFunctions.SelectDocument();
})
Then("I go to Download Extracts tab & verify Number of Documents sent for extratction", () => {
    foFAutomationFunctions.DownloadExtractsTab();
    foFAutomationFunctions.VerifyNoOfDocsExtracted();
})
And("I Open Review Page for the selected document", () => {
    approvalFunctions.ClickOnReviewButton1();
    cy.wait(2000);
})
And("I go to View by dropdown and select State Source", () => {
    form8621Functions.ClickOnViewByDropdown();
    cy.wait(3000);
    foFAutomationFunctions.SelectStateSource();
})
Then("I Verify Federal row is not expandable", () => {
    foFAutomationFunctions.VerifyNoExpandIconFederal();
})
