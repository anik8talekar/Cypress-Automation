import Form8621P2Functions from "../../../pages/Form8621P2.pages";
import Form8621Functions from "../../../pages/Form8621.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";
import Form8621P3Functions from "../../../pages/Form8621P3.pages";
import AuditLogsFunctions from "../../../pages/AuditLogs.pages";

var form8621P2Functions = new Form8621P2Functions
var form8621Functions = new Form8621Functions
var enagegementSetupFunctions = new EnagegementSetupFunctions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var smartK1Functions = new SmartK1Functions
var approvalFunctions = new ApprovalFunctions
var form8621P3Functions = new Form8621P3Functions
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
And("I Click on Preview icon next to one of 8621 instances",()=>{
    cy.wait(5000)
    form8621P3Functions.ClickOnPreviewIcon();
    cy.wait(5000)
})
Then("I Edit Multiple Values like Checkbox,text input,numerical value,date input",()=>{
    form8621P3Functions.ClickOnCheckbox();
    form8621P3Functions.EditTextField();
    form8621P3Functions.EditNumericalField();
    form8621P3Functions.EditDateField();
    form8621P3Functions.TypeCurrentDate();
})
And("I also edit an empty field & add an value in empty field",()=>{
    form8621P3Functions.FillEmptyTextField();
})
Then("I Verify all the edited values are reflected in grid",()=>{
    form8621P3Functions.Expand8621InstancesGrid();
    form8621P3Functions.VerifyEditedValues();
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
Then("I Verify all the edited values are reflected in grid from k-3 review page grid",()=>{
    form8621P3Functions.VerifyK3Grid();
})
And("I go to Executive Review page and Select K-1 Document having a 8621 instance",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    auditLogsFunctions.ClickOnExecutiveReviewTab();
    form8621Functions.ClickOnExecutiveReviewCheckBox();
})
And("I open 8621 details for the document selected",()=>{
    form8621Functions.ClickOnDetailsButton();
    form8621Functions.ClickOn8621();
    cy.wait(4000);
    form8621P3Functions.ClickOnReviewIcon8621Instance();
    cy.wait(4000);
})
Then("I Verify all the edited values are reflected in grid from Executive review page grid",()=>{
    form8621P3Functions.Expand8621InstancesGridExecReview();
    form8621P3Functions.VerifyExecReviewGrid();
})
