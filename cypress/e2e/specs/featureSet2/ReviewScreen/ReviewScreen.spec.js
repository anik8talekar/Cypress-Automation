import ReviewScreenFunctions from "../../../pages/ReviewScreen.pages";
import ProcessingFunctions from "../../../pages/Processing.page";
import MaskedEINFunctions from "../../../pages/MaskedEIN.page";
import DocumentCenterDocumentsFunctions from "../../../pages/DocumentCenterDocuments.page";
import ReviewDocumentScreenFunctions from "../../../pages/ReviewDocumentScreen.page";
import Form8621Functions from "../../../pages/Form8621.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import CustomColumnsFunctions from "../../../pages/CustomColumns.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";
import AuditLogsFunctions from "../../../pages/AuditLogs.pages";
import CompareDocumentFunctions from "../../../pages/CompareDocuments.pages";

var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var customColumnsFunctions = new CustomColumnsFunctions
var form8621Functions = new Form8621Functions
var reviewScreenFunctions = new ReviewScreenFunctions
var processingFunctions = new ProcessingFunctions
var maskedEINFunctions = new MaskedEINFunctions
var documentCenterDocumentsFunctions = new DocumentCenterDocumentsFunctions
var reviewDocumentScreenFunctions = new ReviewDocumentScreenFunctions
var enagegementSetupFunctions = new EnagegementSetupFunctions
var approvalFunctions = new ApprovalFunctions
var auditLogsFunctions = new AuditLogsFunctions
var compareDocumentFunctions = new CompareDocumentFunctions

Given("I open the application", () => {
  processingFunctions.openTheApp();
})
When("I click on existing engagement", () => {
  processingFunctions.openEngagement();
})
Then("I click on document Center and open documents section", () => {
  maskedEINFunctions.openDocuments();
  documentCenterDocumentsFunctions.resetGrid();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
})
And("I filter out the correct document to review", () => {
  documentCenterDocumentsFunctions.filterPendingDocuments();
  reviewScreenFunctions.searchDocument();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
})
And("I click on review icon to open the review document screen", () => {
  reviewDocumentScreenFunctions.clickOnReviewIcon();
})
Then("I open Footnotes tab from view by dropdown", () => {
  form8621Functions.ClickOnViewByDropdown();
  reviewScreenFunctions.ClickOnFootnotesTab();
})
And("I expand a footnote", () => {
  reviewScreenFunctions.ClickOnExpandFootnoteIcon();
  reviewScreenFunctions.EditOtherIncomeField();
})
Then("I check the edited value is marked with yellow traingle", () => {
  reviewScreenFunctions.VerifyYellowTriangle();
})
And("I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to Part VII Section 1 & 2 Tab", () => {
  enagegementSetupFunctions.ClickOnDocumentCenterTab();
  enagegementSetupFunctions.ClickOnDocuments();
  form8621Functions.SelectFedK3();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  form8621Functions.ClearDocumentName();
  form8621Functions.SearchDocumentNameFedK3();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  form8621Functions.SelectFEDk3Doc();
  form8621Functions.ClickOnPartVII();
  form8621Functions.VerifyGoSystemButton();
  form8621Functions.ClickOnSection2();
})
Then("I check the edited value is marked with yellow traingle for K3 Footnotes tab", () => {
  reviewScreenFunctions.VerifyYellowTriangleK3();
})
Then("I open Schedule Item Details tab from view by dropdown", () => {
  form8621Functions.ClickOnViewByDropdown();
  reviewScreenFunctions.ClickOnScheduleItemDetails();
  cy.wait(2000);
  reviewScreenFunctions.ExpandReportingGroup();
})
Then("I check the edited value is marked with yellow traingle for Schedule Item Details tab", () => {
  reviewScreenFunctions.VerifyYellowTriangleK3();
})
And("I Click on Admin tab from side menu", () => {
  expDocumentsRolloverFunctions.ClickOnAdminTab();
})
Then("I Click on Engagement Settings tab from admin menu", () => {
  expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
})
And("I Click on Custom Columns tab", () => {
  customColumnsFunctions.ClickOnCustomColumnTab();
})
Then("I Click on Add Custom Column Button", () => {
  customColumnsFunctions.ClickOnAddCustomColumnButton();
})
And("I Select Datepicker option from dropdown & give name to Datepicker column", () => {
  reviewScreenFunctions.ClickOnCustomColumnDropdown();
  reviewScreenFunctions.ChooseDatePickerOption();
  cy.wait(2000)
})
And("I click on Add Value Button and add values under new value text field", () => {
  customColumnsFunctions.ClickOnAddValueButton();
  customColumnsFunctions.ClickOnValueField();
  customColumnsFunctions.TypeColumnName();
  customColumnsFunctions.TypeValue();
})
And("I Go to Document Center Documents tab and Select Multiple Documents", () => {
  form8621Functions.ClickOnUserDropdown();
  customColumnsFunctions.DocumentsTabScenario2();
  customColumnsFunctions.ClickOnCheckBoxDoc();
})
Then("I click on Set Custom Columns Option from Actions Dropdown from Documents Tab", () => {
  customColumnsFunctions.ClickOnActionsDropdown();
  customColumnsFunctions.ClickonCustomColumnsOption();
})
And("I Set the values from the dropdowns from the set custom columns slideout", () => {
  reviewScreenFunctions.SelectDatesDropdown();
  reviewScreenFunctions.TypeCurrentDateDocsTab();
})
Then("I Click on save button", () => {
  customColumnsFunctions.ClickOnSaveButton();
})
Then("I verify the date is set to newly created datepicker column in docs tab", () => {
  reviewScreenFunctions.VerifyDocsTabDateColumn()
})
And("I click on Set Custom Columns Option from Actions Dropdown from Expected Documents Tab", () => {
  customColumnsFunctions.ExpectedDocumentsTab();
  documentCenterDocumentsFunctions.resetGrid();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  customColumnsFunctions.ClickOnCheckBoxDoc();
  customColumnsFunctions.ClickOnActionsDropdown();
  customColumnsFunctions.ClickonCustomColumnsOption();
  reviewScreenFunctions.SelectDatesDropdown()
  reviewScreenFunctions.TypeCurrentDateDocsTab();
})
Then("I verify the date is set to newly created datepicker column in Exp docs tab", () => {
  reviewScreenFunctions.VerifyExpDocsTabDateColumn();
})
And("I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to it's review page", () => {
  enagegementSetupFunctions.ClickOnDocumentCenterTab();
  enagegementSetupFunctions.ClickOnDocuments();
  documentCenterDocumentsFunctions.resetGrid();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  approvalFunctions.SelectFederalK1();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  form8621Functions.SearchDocumentNameFedK1();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  approvalFunctions.ClickOnReviewButton1();
})
And("I Check for the rows are not showing zero values after Turning Off the Toggle Button", () => {
  reviewScreenFunctions.VerifyNonZeroValues();
  reviewScreenFunctions.ClickOnRowsWithoutValuesToggle();
})
Then("I Check for the rows are showing zero values after Turning On the Toggle Button", () => {
  reviewScreenFunctions.ClickOnRowsWithoutValuesToggle();
  reviewScreenFunctions.VerifyZeroValues();
  cy.wait(4000);
})
And("I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to it's review page", () => {
  enagegementSetupFunctions.ClickOnDocumentCenterTab();
  enagegementSetupFunctions.ClickOnDocuments();
  documentCenterDocumentsFunctions.resetGrid();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  form8621Functions.SelectFedK3();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  form8621Functions.ClearDocumentName();
  form8621Functions.SearchDocumentNameFedK3();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  form8621Functions.SelectFEDk3Doc();
})
And("I Go To Part 2 Section 2", () => {
  reviewScreenFunctions.ClickOnPartII();
  reviewScreenFunctions.ClickOnSection2();
})
And("I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes tab", () => {
  enagegementSetupFunctions.ClickOnDocumentCenterTab();
  enagegementSetupFunctions.ClickOnDocuments();
  documentCenterDocumentsFunctions.resetGrid();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  approvalFunctions.SelectFederalK1();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  form8621Functions.SearchDocumentNameFedK1();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  approvalFunctions.ClickOnReviewButton1();
  cy.wait(2000);
  form8621Functions.ClickOnViewByDropdown();
  form8621Functions.ClickOnFootnotesOption();
})
And("I Click on Show Preview 8621 icon", () => {
  reviewScreenFunctions.ClickOnEyeIcon8621();
})
And("I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Schedule Item Details tab", () => {
  enagegementSetupFunctions.ClickOnDocumentCenterTab();
  enagegementSetupFunctions.ClickOnDocuments();
  documentCenterDocumentsFunctions.resetGrid();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  approvalFunctions.SelectFederalK1();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  form8621Functions.SearchDocumentNameFedK1();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
  approvalFunctions.ClickOnReviewButton1();
  cy.wait(2000);
  form8621Functions.ClickOnViewByDropdown();
})
And("I Click on Form 1040 icon above the grid", () => {
  reviewScreenFunctions.clickOnScheduleItemDEtails();
  reviewScreenFunctions.ClickOnForm1040Button();
})
And("I Click on Document Center Section", () => {
  enagegementSetupFunctions.ClickOnDocumentCenterTab();
})
Then("I Click on Documents tab", () => {
  enagegementSetupFunctions.ClickOnDocuments();
  cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
})
And("I Select Multiple documents", () => {
  auditLogsFunctions.ClickOnFirstCheckbox();
})
Then("I Click On Actions Button", () => {
  auditLogsFunctions.ClickOnActionsDropdown();
})
And("I Click on view side by side option", () => {
  compareDocumentFunctions.ClickOnViewSideBySideOption();
})
And("I Check for the rows are not showing zero values after Turning Off the Toggle Button for form 8621", () => {
  reviewScreenFunctions.VerifyNonZeroValuesForm8621();
})
And("I Check for the rows are not showing zero values after Turning Off the Toggle Button for form 1040", () => {
  reviewScreenFunctions.VerifyNonZeroValuesForm8621();
})
Then("I Check for the rows are showing zero values after Turning On the Toggle Button for for Comparison Page", () => {
  reviewScreenFunctions.ClickOnRowsWithoutValuesToggleCompare();
  //  reviewScreenFunctions.VerifyZeroValues();
  cy.wait(3000);
})
And("I Right Click on the Review Button for selected document", () => {
  reviewScreenFunctions.RightclickOnReviewIcon();
})
Then("I Click on the popup option", () => {
 reviewScreenFunctions.ClickOnRightclickPopup();
})
And("I Ctrl + Click on the Review Button for selected document", () => {
  reviewScreenFunctions.CtrlClickPopup();
})
And("I Check for the rows are not showing zero values after Turning Off the Toggle Button for Comparison page", () => {
  reviewScreenFunctions.VerifyNonZeroValuesComparison();
})
