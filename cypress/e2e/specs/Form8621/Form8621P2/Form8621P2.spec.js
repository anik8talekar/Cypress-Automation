import Form8621P2Functions from "../../../pages/Form8621P2.pages";
import Form8621Functions from "../../../pages/Form8621.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";
import AuditLogsFunctions from "../../../pages/AuditLogs.pages";

var form8621P2Functions = new Form8621P2Functions
var form8621Functions = new Form8621Functions
var enagegementSetupFunctions = new EnagegementSetupFunctions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var smartK1Functions = new SmartK1Functions
var approvalFunctions = new ApprovalFunctions
var auditLogsFunctions = new AuditLogsFunctions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes Tab",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    cy.wait(4000)
    approvalFunctions.SelectFederalK1();
    cy.wait(4000)
    form8621Functions.SearchDocumentNameFedK1();
    cy.wait(4000);
    form8621Functions.SelectTaxYear2022();
    cy.wait(5000);
    approvalFunctions.ClickOnReviewButton1();
    cy.wait(5000);
    form8621Functions.ClickOnViewByDropdown();
    form8621Functions.ClickOnFootnotesOption();
})
Then("I Select multiple 8621 instances",()=>{
    form8621Functions.Select8621Instances1();
    form8621Functions.Select8621Instances2();
    form8621P2Functions.SelectInstance3();
    form8621P2Functions.SelectInstance4();   
})
And("I Click Export to GoSystem button above the grid",()=>{
    cy.wait(5000)
    form8621P2Functions.HandleGoSystemLoginPopup();
})
And("I Expand Destination dropdown",()=>{
   form8621Functions.ClickOnDestinationDropdown();
})
Then("I Select one of the destinations",()=>{
    form8621Functions.SelectDestination();
})
And("I Click on Export Button",()=>{
   form8621Functions.ClickOnExportButton();
})
And("I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to Part VII Section 1 & 2 tab",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    cy.wait(6000)
    cy.reload()
    cy.wait(6000)
    form8621Functions.SelectFedK3();
    cy.wait(6000)
    form8621Functions.ClearDocumentName();
    form8621Functions.SearchDocumentNameFedK3();
    cy.wait(6000)
    form8621Functions.SelectFEDk3Doc();
    approvalFunctions.ClickOnReviewButton1();
    cy.wait(10000);
    form8621Functions.ClickOnPartVII();
    form8621Functions.VerifyGoSystemButton();
    form8621Functions.ClickOnPartVII();
    form8621P2Functions.ClickOnSection1();
})
And("I go to Executive Review page and Select K-1 Document having a 8621 instance",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    auditLogsFunctions.ClickOnExecutiveReviewTab();
    form8621Functions.ClickOnExecutiveReviewCheckBox();
})
 And("I open 8621 details for the document selected",()=>{
    form8621Functions.ClickOnDetailsButton();
    form8621Functions.ClickOn8621();
})
Then("I Select a single 8621 instance",()=>{
    form8621P2Functions.SelectInstance3();
})
And("I Click Export to GoSystem button above the grid from Executive Review",()=>{
    cy.wait(5000)
    form8621P2Functions.HandleGoSystemLoginPopupExecReview();
})
And("I Click Export to GoSystem button above the grid from K-1 Review Page",()=>{
    cy.wait(5000)
    form8621P2Functions.HandleGoSystemLoginPopupExecReview();
})
And("I Click Export to GoSystem button above the grid from K-3 Review Page",()=>{
    cy.wait(5000)
    form8621P2Functions.HandleGoSystemLoginPopup();
})
And("I go to Document Center Documents tab & Open a 2022 K-1 Doc having more than 20 8621 instances & go to Footnotes Tab",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    cy.wait(4000)
    form8621P2Functions.SearchDocumentNameFedK1();
    cy.wait(10000);
    form8621P2Functions.SelectTaxYearAll();
    cy.wait(4000);
    form8621P2Functions.ClickOnReviewButton1();
    cy.wait(5000);
    form8621Functions.ClickOnViewByDropdown();
    form8621Functions.ClickOnFootnotesOption();
})
Then("I Select more than 20 8621 instances",()=>{
    form8621P2Functions.SelectAllK1Instances();
    cy.wait(5000);
})
And("I Try to Click Export to GoSystem button above the grid and Verify the Tooltip Message",()=>{
    form8621P2Functions.VerifyToolTipMessage21Select();
})
And("I Try to Click Export to GoSystem button above the grid and Verify the Tooltip Message for fed k1",()=>{
    form8621P2Functions.VerifyToolTipMessageK121Select();
})
And("I go to Document Center Documents tab & Open a 2022 K-3 Doc having more than 20 8621 instances & go to Part VII Section 1 tab",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    cy.wait(6000)
    cy.reload()
    cy.wait(6000)
    form8621Functions.SelectFedK3();
    cy.wait(6000)
    form8621Functions.ClearDocumentName();
    form8621P2Functions.SearchDocumentNameFedK3();
    cy.wait(6000)
    form8621Functions.SelectTaxYear2022();
    form8621P2Functions.ClickOnReviewButton1();
    cy.wait(5000);
    form8621Functions.ClickOnPartVII();
    cy.wait(5000);
  //  form8621Functions.VerifyGoSystemButton();
    form8621P2Functions.ClickOnSection1();
    cy.wait(5000);
})
Then("I Select more than 20 8621 instances from K-3 review page",()=>{
    form8621P2Functions.SelectAllK3Instances();
    cy.wait(5000);
})
Then("I Try to Click Export to GoSystem button above the grid without Selecting any 8621 instance and Verify the Tooltip Message",()=>{
    form8621P2Functions.VerifyToolTipMessageZeroSelect();
})
And("I go to Executive Review page and Select K-1 Document having more than 20 8621 instance",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    auditLogsFunctions.ClickOnExecutiveReviewTab();
    form8621Functions.ClickOnExecutiveReviewCheckBox();
})
Then("I Select more than 20 8621 instances from Executive Review page",()=>{
    form8621P2Functions.SelectAllK3Instances();
    form8621P2Functions.ClickOnPageNo2();
    form8621P2Functions.SelectAllK3Instances();
})

