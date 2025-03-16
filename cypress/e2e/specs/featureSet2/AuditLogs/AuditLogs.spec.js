import AuditLogsFunctions from "../../../pages/AuditLogs.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";

var enagegementSetupFunctions = new EnagegementSetupFunctions
var auditLogsFunctions = new AuditLogsFunctions
var smartK1Functions = new SmartK1Functions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var approvalFunctions = new ApprovalFunctions();

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I Click on Document Center Section",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
})
Then("I Click on Documents tab",()=>{
    enagegementSetupFunctions.ClickOnDocuments();
})
Then("I Click on Executive Review tab from document center tab",()=>{
    auditLogsFunctions.ClickOnExecutiveReviewTab();
    cy.wait(4000)
})
And("I Click on Masked EIN toggle button for Executive Review",()=>{
    auditLogsFunctions.TurnOFFToggleButton();
})
Then("I Click on Expected Documents tab from document center tab",()=>{
    auditLogsFunctions.ClickOnExpectedDocumentsTab();
})
And("I Click on Masked EIN toggle button for Expected Documents",()=>{
    auditLogsFunctions.TurnOFFToggleButton();
})
Then("I Click on Business Entities tab from side menu",()=>{
    auditLogsFunctions.ClickOnBusinessEntitiesTab();
})
And("I Click on Masked EIN toggle button for Business Entities",()=>{
    auditLogsFunctions.TurnOFFToggleButton();
})
Then("I Click on Business Entities tab from Import and Export Data tab from side menu",()=>{
    auditLogsFunctions.ClickOnImportAndExportDataTab();
})
And("I Click on Masked EIN toggle button for Import and Export Data Business Entities",()=>{
    auditLogsFunctions.TurnOFFToggleButton();
})
And("I Select multiple documents and click on approve option from actions dropdown menu",()=>{
    approvalFunctions.ClickOnResetGrid();
    auditLogsFunctions.ClickOnFirstCheckbox();
    auditLogsFunctions.ClickOnActionsDropdown();
    auditLogsFunctions.ClickOnApproveOption();
})
Then("I Click on Masked EIN toggle button",()=>{
    auditLogsFunctions.TurnOFFToggleButton();
})
And("I Click on Admin tab",()=>{
    expDocumentsRolloverFunctions.ClickOnAdminTab();
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
})
Then("I Click on audit logs tab",()=>{
    auditLogsFunctions.ClickOnAuditLogsTab();
})
And("I Click on Approval Logs tab",()=>{
    auditLogsFunctions.ClickOnApprovalLogsTab();
    cy.wait(3000)
    auditLogsFunctions.ClickOn24hPeriod();
})
Then("I Verify the Approved file name under the grid",()=>{
    auditLogsFunctions.VerifyApprovedFileName();   
})
Then("I Verify the file name under the grid",()=>{
    auditLogsFunctions.SelectDates();
    auditLogsFunctions.VerifyPageAuditLogs();   
})
And("I Click on Admin tab from side menu",()=>{
    expDocumentsRolloverFunctions.ClickOnAdminTab();
})
Then("I Click on Engagement Settings tab from admin menu",()=>{
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
})
And("I click on Document Import and Export tab",()=>{
    smartK1Functions.ClickOnImportAndExportTab();
})
Then("I click on PwC Settings tab and turn off the Enable PwC Document Collection toggle button",()=>{
    auditLogsFunctions.ClickOnPwCDocToggleBtn();
})
And("I Turn On the PwC Document Collection toggle button as a prerequisite",()=>{
    auditLogsFunctions.ClickOnPwCDocToggleBtn();
    auditLogsFunctions.ClickOnYesPopup();
})
Then("I click on Canoe Settings tab and turn off the Enable Enable Canoe Document Collection Toggle Button",()=>{
    auditLogsFunctions.ClickOnPwCDocToggleBtn();
    auditLogsFunctions.ClickOnYesPopup();
})
And("I Turn On the Canoe Document Collection  toggle button as a prerequisite",()=>{
    auditLogsFunctions.ClickOnCanoeSettingsTab();
})
Then("I click on Tax Docs Settings tab and turn off the Enable Mapping to Tax Document Engagements Toggle Button",()=>{
    auditLogsFunctions.ClickOnPwCDocToggleBtn();
    auditLogsFunctions.ClickOnYesPopup();
})
And("I Turn On the Tax Document Engagements toggle button as a prerequisite",()=>{
    auditLogsFunctions.ClickOnTaxDocsSettingsTab();
})
Then("I Click on Audit Logs tab",()=>{
    auditLogsFunctions.ClickOnAuditLogsTab();
})
And("I click on EL Language Confirmation tab",()=>{
    auditLogsFunctions.ClickOnELLanguageConfirmation();
    cy.wait(3000)
    auditLogsFunctions.ClickOn24hPeriod();
    cy.wait(3000)
    auditLogsFunctions.SelectDates();
})
Then("I verify the action under actions column",()=>{
    auditLogsFunctions.VerifyAction();
})
And("I click on EL Language Confirmation tab for verifying Canoe Settings",()=>{
    auditLogsFunctions.ClickOnELLanguageConfirmation();
    cy.wait(3000)
    auditLogsFunctions.ClickOn24hPeriod();
    auditLogsFunctions.SelectDates();
})