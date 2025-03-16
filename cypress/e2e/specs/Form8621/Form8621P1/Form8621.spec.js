import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import Form8621Functions from "../../../pages/Form8621.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";
import AuditLogsFunctions from "../../../pages/AuditLogs.pages";

var enagegementSetupFunctions = new EnagegementSetupFunctions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var smartK1Functions = new SmartK1Functions
var form8621Functions = new Form8621Functions
var approvalFunctions = new ApprovalFunctions
var auditLogsFunctions = new AuditLogsFunctions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I click on Admin tab and go to Engagement Settings tab",()=>{
    expDocumentsRolloverFunctions.ClickOnAdminTab();
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
})
Then("I Click on Document Import & Export tab & go to GoSystem Settings tab",()=>{
    smartK1Functions.ClickOnImportAndExportTab();
    form8621Functions.ClickOnGoSystemSettingsTab();
})
And("I Click on Add Destination Button & fill the required information in slideout",()=>{
    cy.wait(4000)
    form8621Functions.TypeUserEmail();
})
And("I Turn off Enable Mapping to GoSystem toggle button",()=>{
    cy.wait(4000)
    form8621Functions.TurnOffGoSytemToggleBtn();
    cy.wait(4000)
})
And("I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes tab",()=>{
    form8621Functions.ClickOnUserDropdown();
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
Then("I Check for Export to GoSystem 8621 instances or above the grid are disabled",()=>{
    form8621Functions.VerifyGoSystemButton();
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
    form8621Functions.ClickOnPartVII();
    form8621Functions.VerifyGoSystemButton();
    form8621Functions.ClickOnSection2();
})
And("I go to Executive Review page and open 8621 details for both 2022 K-1 and K-3",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    auditLogsFunctions.ClickOnExecutiveReviewTab();
    form8621Functions.ClickOnExecutiveReviewCheckBox();
    form8621Functions.ClickOnDetailsButton();
    form8621Functions.ClickOn8621();
})
Then("I Check for Export to GoSystem 8621 instances or above the grid are enabled",()=>{
    form8621Functions.VerifyGoSystemButtonExist();
})
And("I Turn on Enable Mapping to GoSystem toggle button",()=>{
    form8621Functions.TurnOffGoSytemToggleBtn();
})
And("I Click on Delete Destination Button",()=>{
    form8621Functions.ClickOnDeleteIcon();
    form8621Functions.ClickOnDeletePopup();
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
Then("I Select two 8621 instances with the same PFIC Name",()=>{
    form8621Functions.Select8621Instances1();
    form8621Functions.Select8621Instances2();
})
And("I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to Part VII Section 1 & 2 Tab",()=>{
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
    form8621Functions.ClickOnPartVII();
})
And("I Click Export to GoSystem button above the grid",()=>{
    cy.wait(5000)
    form8621Functions.HandleGoSystemLoginPopup();
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
Then("I Check selected destination in GoSystem",()=>{
    
})
And("I go to Document Center Documents tab & Open a 2021 K-1 Doc & go to Footnotes Tab",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    cy.wait(4000)
    approvalFunctions.SelectFederalK1();
    cy.wait(4000)
    form8621Functions.SelectTaxYear2021();
    cy.wait(5000);
    approvalFunctions.ClickOnReviewButton1();
    cy.wait(5000);
    form8621Functions.ClickOnViewByDropdown();
    form8621Functions.ClickOnFootnotesOption();   
 })
 Then("I Check Export to GoSystem, Preview & Generate Excel File Buttons are inactive with a message",()=>{
    
 })
 And("I go to Document Center Documents tab & Open a 2021 K-3 Doc & go to Part VII Section 1 tab",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    cy.wait(6000)
    cy.reload()
    cy.wait(6000)
    form8621Functions.SelectFedK3();
    cy.reload()
    cy.wait(6000)
    form8621Functions.ClearDocumentName();
    form8621Functions.SelectTaxYear2021();
    form8621Functions.SearchDocumentNameFedK3();
    cy.wait(6000)
    approvalFunctions.ClickOnReviewButton1();
    form8621Functions.ClickOnPartVII();
    form8621Functions.VerifyGoSystemButton();
    form8621Functions.ClickOnSection2();
 })
 And("I go to Executive Review page and open 8621 details for both 2021 K-1 and K-3",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    auditLogsFunctions.ClickOnExecutiveReviewTab();
    form8621Functions.ClickOnExecutiveReviewCheckBox();
    form8621Functions.ClickOnDetailsButton();
    form8621Functions.ClickOn8621();
 })
 And("I go to Document Center Documents tab & Open a 2022 K-1 Doc with a 8621 instance with address field exceeding 35 characters",()=>{
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
 })
 Then("I Go to Footnotes tab of Same Document",()=>{
    form8621Functions.ClickOnViewByDropdown();
    form8621Functions.ClickOnFootnotesOption();
 })
 And("I Click Export to GoSystem button next to a 8621 instance",()=>{
    form8621Functions.Select8621Instances2();
    form8621Functions.HandleGoSystemLoginPopup();
 })
 And("I go to Executive Review page and Select K-1 & K-3 Documents having multiple 8621 instances having same PFIC name",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    auditLogsFunctions.ClickOnExecutiveReviewTab();
    form8621Functions.ClickOnExecutiveReviewCheckBox();
    cy.wait(5000)
    form8621Functions.ClickOnScheduleDropdown();
    cy.wait(10000)
    form8621Functions.ClickOnExecutiveReviewCheckBox();
 })
 Then("I open 8621 details for both the documents selected",()=>{
    form8621Functions.ClickOnDetailsButton();
    form8621Functions.ClickOn8621();
 })
 And("I Select multiple 8621 instances from both K-1 & K-3 having same PFIC name",()=>{
    form8621Functions.Select8621Instances1();
    form8621Functions.Select8621Instances3();
 })
 And("I go to Executive Review page and Select K-1 & K-3 Documents having multiple 8621 instances",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    auditLogsFunctions.ClickOnExecutiveReviewTab();
    form8621Functions.ClickOnExecutiveReviewCheckBox();
    cy.wait(5000)
    form8621Functions.ClickOnScheduleDropdown();
    cy.wait(6000)
    form8621Functions.ClickOnExecutiveReviewCheckBox();
 })
 Then("I Select multiple 8621 instances from both K-1 & K-3",()=>{
    form8621Functions.Select8621Instances3();
    form8621Functions.ClickOnExecutiveReviewCheckBox();
 })
