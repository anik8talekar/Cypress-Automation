import SmartK1Functions from "../../../pages/Smart-K1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import AuditLogsFunctions from "../../../pages/AuditLogs.pages";

var auditLogsFunctions = new AuditLogsFunctions
var smartK1Functions = new SmartK1Functions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var enagegementSetupFunctions = new EnagegementSetupFunctions
var auditLogsFunctions = new AuditLogsFunctions

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
And("I click on Document Import and Export tab",()=>{
    smartK1Functions.ClickOnImportAndExportTab();
})
And("I Select a Tax Year from dropdown",()=>{
    smartK1Functions.ClickOnTaxYearDropDown();
    smartK1Functions.Select2021();
})
Then("I Click on Request Entity dropdown and choose a Entity",()=>{
    smartK1Functions.ClickOnRequestEntityDropDown();
    cy.wait(3000)
    smartK1Functions.SelectLucilleBluthFundEntity(); 
    cy.wait(3000)
})
And("I Click on Request Button",()=>{
    cy.wait(3000)
    smartK1Functions.ClickOnRequestButton();
})
Then("I check for the status of entity under Approval Status column",()=>{
    smartK1Functions.CheckApprovalStatus();
})
Then("I Click on Delete Button under actions column",()=>{
    smartK1Functions.ClickOnDeleteIcon();
})
And("I verify the entity is deleted",()=>{
    smartK1Functions.VerifyEntityIsDeleted();
})
Then("I click on PwC Settings tab and turn on and off the Enable PwC Document Collection toggle button",()=>{
    smartK1Functions.ClickOnToggleButton();
    smartK1Functions.ClickOnYesPopup();
})
And("I Click on Audit logs from admin side menu",()=>{
    smartK1Functions.ClickOnAuditLogs();
})
Then("I Click on EL Language Confirmation tab",()=>{
    smartK1Functions.ClickOnELLanguageConfirmation();
    cy.wait(4000)
    auditLogsFunctions.ClickOn24hPeriod();
})
And("I Check for actions column",()=>{
    smartK1Functions.VerifyActionColumn();
})
And("I Select 2021 Tax Year from dropdown",()=>{
    smartK1Functions.ClickOnTaxYearDropDown();
    smartK1Functions.Select2021();
})
Then("I Click on Request Entity dropdown and choose a LUCILLE BLUTH FUND Entity",()=>{
    smartK1Functions.ClickOnRequestEntityDropDown();
    smartK1Functions.SelectLucilleBluthFundEntity(); 
})
And("I Click on request button",()=>{
    cy.wait(3000)
    smartK1Functions.ClickOnRequestButton();
})
Then("I check for the approval requested status of entity under Approval Status column",()=>{
   smartK1Functions.ClickOnTaxYearDropDown();
   smartK1Functions.Select2021();
   smartK1Functions.VerifyApprovalRequested();
   cy.wait(240000)
   cy.reload(true);
   smartK1Functions.ClickOnTaxYearDropDown();
   smartK1Functions.Select2021();
   smartK1Functions.VerifyDocumentsCount();
})
And("I Approve the Entity from Actions Column and verify Approved Status message",()=>{
    smartK1Functions.ClickOnApproveIcon();
    cy.reload();
    smartK1Functions.ClickOnTaxYearDropDown();
    smartK1Functions.Select2021();
    smartK1Functions.VerifyApproved();
    smartK1Functions.ClickOnRejectIcon();
    smartK1Functions.ClickOnRequestAgainIcon();
})
And("I go to Document Center Available documents tab and check for the Approval Requested Counter",()=>{
 //   smartK1Functions.ClickOnUserTab();
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    smartK1Functions.ClickOnAvailableDocumentsTab();
    cy.reload();
    smartK1Functions.VerifyApprovalRequestedCounter();
})
Then("I Approve the entity from actions column under PwC settings tab and verify approved status message",()=>{
    expDocumentsRolloverFunctions.ClickOnAdminTab();
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
    smartK1Functions.ClickOnImportAndExportTab();
    smartK1Functions.ClickOnTaxYearDropDown();
    smartK1Functions.Select2021();
})
And("I go to Document Center Available documents tab and check for the Available for Retrieval Counter",()=>{
    smartK1Functions.ClickOnUserTab();
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    smartK1Functions.ClickOnAvailableDocumentsTab();
    cy.reload();
    smartK1Functions.VerifyApprovalRequestedCounter();
    smartK1Functions.ClickOnDownloadIconAvailableDoc();
})
Then("I Delete the requested entity as a prequisite step",()=>{
    expDocumentsRolloverFunctions.ClickOnAdminTab();
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
    smartK1Functions.ClickOnImportAndExportTab();
    smartK1Functions.ClickOnTaxYearDropDown();
    smartK1Functions.Select2021();
    cy.wait(3000)
    smartK1Functions.ClickOnDeleteIcon();
})









