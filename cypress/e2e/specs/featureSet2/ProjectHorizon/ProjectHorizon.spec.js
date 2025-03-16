import ProcessingFunctions from "../../../pages/Processing.page";
import ScheduleManagementFunctions from "../../../pages/ScheduleManagement.page";
import ProjectHorizonFunctions from "../../../pages/ProjectHorizon.pages";
import Form8621Functions from "../../../pages/Form8621.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";
import Form8621P2Functions from "../../../pages/Form8621P2.pages";
import DocumentCenterDocumentsFunctions from "../../../pages/DocumentCenterDocuments.page";
import FoFAutomationFunctions from "../../../pages/FoFAutomation.pages";

var processingFunctions = new ProcessingFunctions
var scheduleManagementFunctions = new ScheduleManagementFunctions
var projectHorizonFunctions = new ProjectHorizonFunctions
var form8621Functions = new Form8621Functions
var enagegementSetupFunctions = new EnagegementSetupFunctions
var approvalFunctions = new ApprovalFunctions
var form8621P2Functions = new Form8621P2Functions
var documentCenterDocumentsFunctions = new DocumentCenterDocumentsFunctions
var foFAutomationFunctions = new FoFAutomationFunctions

Given("I open the application", ()=>{
    processingFunctions.openTheApp();
 })

When("I click on existing engagement", ()=>{
    processingFunctions.openEngagement();
  })

Then("I click on Admin and open Schedule Management Screen",()=>{
   scheduleManagementFunctions.openScheduleManagement();
  })

And("I click on Sync TRACK standard descriptions button",()=>{
    projectHorizonFunctions.ClickOnStandardDespBtn();
   })

And("I Choose Client Name, Tax Year & Database Name from dropdowns",()=>{
    projectHorizonFunctions.ClickOnClientNameDropDown();
    cy.wait(4000);
    projectHorizonFunctions.SelectClientName();
    cy.wait(4000);
    projectHorizonFunctions.ClickOnTaxYearDropDown();
    cy.wait(4000);
    projectHorizonFunctions.SelectTaxYear();
    cy.wait(4000);
    projectHorizonFunctions.ClickOnDbNameDropDown();
    cy.wait(4000);
    projectHorizonFunctions.SelectDbName();
   })

   And("I click on Save button",()=>{
    projectHorizonFunctions.ClickOnSaveButton();
   })

   Then("I go to Check Import Status tab",()=>{
    projectHorizonFunctions.ClickOnCheckImportStatusTab();
   })

   And("I Verify a new row is added in the Grid & verify its import status",()=>{
    projectHorizonFunctions.VerifyImportStatus();
   })

   And("I go to Manage Schedule data tab and hover over the Sync TRACK standard descriptions button & verify its tooltip message",()=>{
    projectHorizonFunctions.ClickOnManageScheduleItemTab();
    projectHorizonFunctions.MouseHoverStandardBtn();
    projectHorizonFunctions.VerifyToolTipMessage();
   })

   And("I go to a Fed k1 review page",()=>{
    form8621Functions.ClickOnUserDropdown();
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    documentCenterDocumentsFunctions.resetGrid();
    approvalFunctions.SelectFederalK1();
    form8621P2Functions.SearchDocumentNameFedK1();
    approvalFunctions.ClickOnReviewButton1();
   })

   Then("I Verify Standard Description exists for Schedule Items view",()=>{
    projectHorizonFunctions.VerifyStandardDesp();
   })

   Then("I Verify Standard Description exists for Schedule Items Details view",()=>{
    form8621Functions.ClickOnViewByDropdown();
    cy.wait(5000);
    foFAutomationFunctions.SelectScheduleItemDetails();
    cy.wait(5000);
    foFAutomationFunctions.ClickOnExpandIcon();
    cy.wait(5000);
    projectHorizonFunctions.VerifyStandardDespDetails();
   })

   Then("I Verify Standard Description exists for CSV Extract Excel File",()=>{
    projectHorizonFunctions.VerifyDetailDescriptionCSV();
   })