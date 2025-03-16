import ReclassFunctions from "../../../pages/Reclass.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";

var enagegementSetupFunctions = new EnagegementSetupFunctions();
var reclassFunctions = new ReclassFunctions();
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions();
var smartK1Functions = new SmartK1Functions();
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
And("I Click on Review Icon Under Actions Column",()=>{
    approvalFunctions.ClickOnResetGrid();
    reclassFunctions.ClickOnScheduleDropdownSearch();
    reclassFunctions.SelectFederalK1();
    reclassFunctions.TypeFileName();
    reclassFunctions.ClickOnTaxYearDropdownSearch();
    reclassFunctions.SelectTaxYear2021();
    reclassFunctions.ClickOnReviewIcon();
})
Then("I Click on Reclass Form Icon under the actions column from part III from RHS",()=>{
    cy.wait(3000);
    reclassFunctions.ClickOnInfoIconReviewScreen();
    reclassFunctions.ClickOnReclassFormIcon();
})
And("I Type Name and select Schedule item from drop down",()=>{
    reclassFunctions.TypeReclassName();
    reclassFunctions.SelectToScheduleItemAdd();
})
Then("I Fill the Reclass amount under This Reclass textbox",()=>{
    reclassFunctions.FillAmountThisReclass();
})
And("I click on save Button to save reclass",()=>{
    reclassFunctions.ClickOnSaveButton();
    cy.wait(2000);
})
Then("I verify Reclass under the Reclass grid",()=>{
    reclassFunctions.clickOnExpandIcon();
    reclassFunctions.VerifyReclasses();
})
And("I Delete the reclass as a Prerequisite",()=>{
    reclassFunctions.ClickOnDeleteIcon();
    reclassFunctions.ClickOnDeletePopup();
})
Then("I Select Reclasses from view by dropdown from the RHS of the review screen",()=>{
    cy.wait(3000)
    reclassFunctions.ClickOnViewByDropDown();
    cy.wait(5000)
    reclassFunctions.SelectReclassesOption();
})
And("I Click on Add Reclasses Button Logo",()=>{
   reclassFunctions.ClickOnAddReclassIcon();
})
Then("I Type Name and select Schedule item from Dropdown",()=>{
    reclassFunctions.TypeReclassName();
    reclassFunctions.SelectToScheduleItemReclass();
})
And("I Fill the Reclass amount under This Reclass TextBox",()=>{
    reclassFunctions.FillAmountThisReclass();
})
Then("I click on save Button",()=>{
    cy.wait(2000);
    reclassFunctions.ClickOnSaveButton({force:true});
    cy.wait(3000);
})
And("I verify Reclass under the Reclass grid for Reclass tab",()=>{
    reclassFunctions.clickOnExpandIcon();
    reclassFunctions.VerifyReclassesTab();
})
Then("I Delete the reclass as a Prerequisite for Reclass tab",()=>{
    reclassFunctions.ClickOnDeleteIcon();
    reclassFunctions.ClickOnDeletePopup();
})
And("I Click on Review Icon Under Actions Column for editing",()=>{
    approvalFunctions.ClickOnResetGrid();
    reclassFunctions.ClickOnScheduleDropdownSearch();
    reclassFunctions.SelectFederalK1();
    reclassFunctions.TypeFileName();
    reclassFunctions.ClickOnTaxYearDropdownSearch();
    reclassFunctions.SelectTaxYear2021();
    reclassFunctions.ClickOnReviewIcon();
})
Then("I Select Reclasses from view by dropdown from the RHS of the review screen for editing",()=>{
    reclassFunctions.ClickOnViewByDropDown();
    cy.wait(2000)
    reclassFunctions.SelectReclassesOption();
})
And("I Click on Add Reclasses Button Logo for editing",()=>{
    reclassFunctions.ClickOnAddReclassIcon();
 })
 Then("I Type Name and select Schedule item from Dropdown for editing",()=>{
    reclassFunctions.TypeReclassName();
    reclassFunctions.SelectToScheduleItemReclass();
})
And("I Fill the Reclass amount under This Reclass TextBox for editing",()=>{
    reclassFunctions.FillAmountThisReclass();
})
Then("I click on save Button for editing",()=>{
    reclassFunctions.ClickOnSaveButtonEdit();
    cy.wait(2000);
})
And("I click on Edit Button Icon under actions column and edit some fields",()=>{
    reclassFunctions.ClickOnEditIcon();
    reclassFunctions.EditReclassName();  
})
Then("I verify Reclass under the Reclass grid for Edited Reclass",()=>{
    reclassFunctions.ClickOnNoOfReclasses();
    reclassFunctions.VerifyEditedReclassName();
})
And("I Delete the reclass as a Prerequisite for Reclass tab for editing",()=>{
   reclassFunctions.ClickOnDeleteIcon();
   reclassFunctions.ClickOnDeletePopup();
})
And("I Click on Admin tab from side menu",()=>{
    expDocumentsRolloverFunctions.ClickOnAdminTab();
})
Then("I Click on Engagement Settings tab from admin menu",()=>{
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
})
And("I Click on Reclass rules tab",()=>{
    reclassFunctions.ClickOnReclassRulesTab();
    cy.wait(2000)
})
Then("I click on Edit Icon Under Actions column",()=>{
    reclassFunctions.ClickOnEditIconSlideout();
})
And("I Change From and To from the Reclass Slideout",()=>{
    reclassFunctions.ClickOnToSlideout();
    reclassFunctions.ChangeToSlideout();
    reclassFunctions.ClickOnFromSlideout();
    reclassFunctions.ChangeFromSlideout();
})
And("I verify From and to Schedule names from the reclass grid",()=>{
    reclassFunctions.VerifyToSlideout();
})
And("I Click on Reclass rules tab for adding reclass rules",()=>{
    reclassFunctions.ClickOnReclassRulesTab();
    cy.wait(2000)
})
Then("I click on Add Reclass Rule Button",()=>{
    reclassFunctions.ClickOnAddReclassRuleButton();
})
And("I Select Tax Year Schedule From and To",()=>{
    reclassFunctions.ClickOnTaxYearDropdown();
    reclassFunctions.Select2021();
    reclassFunctions.ClickOnScheduleDropdown();
    reclassFunctions.SelectFederalK1Reclass();
    reclassFunctions.ClickOnFromDropdown();
    cy.wait(2000)
    reclassFunctions.SelectQualifiedDividends();
    reclassFunctions.ClickOnToDropdown();
    reclassFunctions.SelectQualifiedDividendsTo();
})
Then("I click on save Button for adding reclass rules",()=>{
    reclassFunctions.ClickOnSaveButtonEdit();
    cy.wait(2000);
})
And("I Verify reclasses is added in the reclass rules grid",()=>{
    reclassFunctions.VerifyReclassAddedUnderGrid();
})
And("I verify Reclass Rules from Document Center Documents",()=>{
    reclassFunctions.ClickOnUserTab();
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    reclassFunctions.ClickOnScheduleDropdownSearch();
    reclassFunctions.SelectFederalK1();
    reclassFunctions.SelectDocument();
    reclassFunctions.ClickOnActionsDropdown();
})
Then("I Select a document and select Add reclass rules option from the actions dropdown",()=>{
    reclassFunctions.ClickOnAddreclassRulesOption();
})
And("I Click on the checkbox to assign rule to the document",()=>{
    reclassFunctions.ClickOnAssignRuleCheckbox();
})
Then("I Click on Save button for adding the reclass rules",()=>{
    reclassFunctions.ClickOnSaveButtonEdit();
})
Then("I Delete the reclass as a Prerequisite for creating reclasses",()=>{
    reclassFunctions.ClickOnOK();
    expDocumentsRolloverFunctions.ClickOnAdminTab();
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
    reclassFunctions.ClickOnReclassRulesTab();
    reclassFunctions.ClickOnDeleteIconReclassRules();
    reclassFunctions.ClickOnDeletePopup();
})
Then("I click on Add Reclass Rule Button for editing reclass Slideout",()=>{
    reclassFunctions.ClickOnAddReclassRuleButton();
})
And("I Select Tax Year Schedule From and To for editing reclass Slideout",()=>{
    reclassFunctions.ClickOnTaxYearDropdown();
    reclassFunctions.Select2021();
    reclassFunctions.ClickOnScheduleDropdown();
    reclassFunctions.SelectFederalK1Reclass();
    reclassFunctions.ClickOnFromDropdown();
    cy.wait(2000)
    reclassFunctions.SelectQualifiedDividends();
    reclassFunctions.ClickOnToDropdown();
    reclassFunctions.SelectQualifiedDividendsTo();
})
Then("I click on save Button for adding reclass rules for editing reclass Slideout",()=>{
    reclassFunctions.ClickOnSaveButtonEdit();
})
And("I Save The Reclass and edit it",()=>{
    
})
And("I Delete the reclass as a Prerequisite for creating reclasses for editing reclass Slideout",()=>{
    reclassFunctions.ClickonDeleteIconPrerequiste();
    reclassFunctions.ClickOnDeletePopup();
})