import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";
import ReclassFunctions from "../../../pages/Reclass.pages";
import ProcessingFunctions from "../../../pages/Processing.page";

var approvalFunctions = new ApprovalFunctions();
var enagegementSetupFunctions = new EnagegementSetupFunctions();
var reclassFunctions = new ReclassFunctions();
var processingFunctions = new ProcessingFunctions();

Given("I Open the Application", () => {
    enagegementSetupFunctions.openTheApp();
})
When("I click on existing engagement", () => {
    processingFunctions.openEngagement();
})
And("I Click on Document Center Section", () => {
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
})
Then("I Click on Documents tab",()=>{
    enagegementSetupFunctions.ClickOnDocuments();
})
And("I Click on Review Icon Under Actions Column", () => {
    approvalFunctions.SelectFederalK1()
    approvalFunctions.ClickOnReviewIcon()
})
Then("I Click on Approve Button from Review Screen", () => {
    approvalFunctions.ClickOnApproveButton();
    approvalFunctions.ClickOnApprovePopup();
})
And("I Click on approve from the popup",()=>{
    approvalFunctions.ClickOnApprovePopup();
    cy.wait(2000);
})
And("I Click on approve from the popup", () => {
    approvalFunctions.SelectHighestReviewLevel()
    approvalFunctions.ClickOnSaveButton()
    approvalFunctions.ClickOnApproveButton()
    approvalFunctions.ClickOnApprovePopUp()
})
And("I search for edit button for approved documents", () => {
    approvalFunctions.NoEditButton()
})
And("I Select multiple pending documents", () => {
    approvalFunctions.ClickOnResetGrid()
    approvalFunctions.ClickOnApprovedDropdown()
    approvalFunctions.ClickOnPendingOption()
    approvalFunctions.SearchDocumentName();
})
Then("I click on Actions dropdown menu and click on Approve Option", () => {
    approvalFunctions.ClickOnActionsCheckBox()
    approvalFunctions.ClickOnActionsButton()
    approvalFunctions.ClickOnApproveOption()
})
And("I check for the manage reclass rules button after documents approval", () => {
    approvalFunctions.NoManageReclassRule()
})
And("I Select a Approved Document and click on review icon", () => {
    approvalFunctions.ClickOnResetGrid()
    approvalFunctions.SelectFederalK1()
    approvalFunctions.SearchDocumentName();
    approvalFunctions.ClickOnApprovedDropdown()
    approvalFunctions.ClickOnApprovedOption()
    approvalFunctions.ClickOnReviewIcon()
})
Then("I Click on Unapprove Button from Review Screen", () => {
    approvalFunctions.ClickOnUnapproveButton()
})
And("I Click on unapprove from the popup", () => {
    approvalFunctions.ClickOnUnapprovePopup()
})
Then("I verify the document is unapproved or not from documents tab", () => {
    approvalFunctions.ClickOnDocumentCenterTabAppr()
    approvalFunctions.ClickOnResetGrid()
    approvalFunctions.SelectTaxYear2021()
    approvalFunctions.SelectFederalK1()
    approvalFunctions.VerifyUnapproveDoc()
})
And("I Select multiple pending documents", () => {
    approvalFunctions.ClickOnApprovedDropdown()
    approvalFunctions.ClickOnPendingOption()
    approvalFunctions.ClickOnApprovedOption()
})
