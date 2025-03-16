import DirectConnectFunctions from "../../../pages/directConnect.pagesP2";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import StandardDespFunctions from "../../../pages/StandardDesp.pages";
import MaskedEINFunctions from "../../../pages/MaskedEIN.page";
import DocumentCenterDocumentsFunctions from "../../../pages/DocumentCenterDocuments.page";
import ReviewDocumentScreenFunctions from "../../../pages/ReviewDocumentScreen.page";
import Form8621Functions from "../../../pages/Form8621.pages";

var directConnectFunctions = new DirectConnectFunctions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var standardDespFunctions = new StandardDespFunctions
var maskedEINFunctions = new MaskedEINFunctions
var documentCenterDocumentsFunctions = new DocumentCenterDocumentsFunctions
var reviewDocumentScreenFunctions = new ReviewDocumentScreenFunctions
var form8621Functions = new Form8621Functions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    standardDespFunctions.SearchEngagement();
})
When("I click on existing engagement for TRACK Allocable Item grid",()=>{
    standardDespFunctions.SearchEngagementTRACK();
})
And("I click on Admin side menu and click on engagaement settings tab",()=>{
    expDocumentsRolloverFunctions.ClickOnAdminTab();
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
})
Then("I click on Direct Connect tab",()=>{
    directConnectFunctions.ClickOnDirectConnectTab();
})
And("I click on edit button under actions column and Click on Allocable Item Templates tab",()=>{
    directConnectFunctions.ClickOnEditButton();
    standardDespFunctions.ClickOnAllocableTemplatesTab();
})
Then("I Check for Standard Description & Standard Description if Negative Column is Present",()=>{
    standardDespFunctions.CheckStandardDespColumn();
    standardDespFunctions.CheckStandardDespColumnData();
    standardDespFunctions.CheckStandardDespIfNegativeColumn();
    standardDespFunctions.CheckStandardDespIfNegativeColumnData();
})
And("I go to State tab from Allocable Item Template view",()=>{
    standardDespFunctions.ClickOnStateTab();
})
Then("I Check for Default Federal Standard Description & Default Federal Standard Description if Negative Column is Present",()=>{
    standardDespFunctions.CheckDefFedStandardDespColumn();
    standardDespFunctions.CheckDefFedStandardDespColumnData();
    standardDespFunctions.CheckDefFedStandardDespIfNegativeColumn();
    standardDespFunctions.CheckDefFedStandardDespIfNegativeColumnData();
})
And("I Select Schedule K1 from Allocable Item Templates tab",()=>{
    standardDespFunctions.VerifyScheduleK1Grid();
})
Then("I Edit some of the fields in the grid from the row dropdowns for Schedule K1",()=>{
    standardDespFunctions.EditStandardDespRow();
    standardDespFunctions.ClearStandardDesp();
    standardDespFunctions.EditStandardDesp();
    standardDespFunctions.SelectStandardDesp();
    standardDespFunctions.EditStandardDesp();
    standardDespFunctions.SelectStandardDespIfNegative();
})
And("I Click on Save Profile Button",()=>{
    standardDespFunctions.ClickOnSaveProfileButton();
})
And("I Select Schedule K3 from Allocable Item Templates tab",()=>{
    standardDespFunctions.ClickOnScheduleK3();
    standardDespFunctions.VerifyScheduleK3Grid();
})
Then("I Edit some of the fields in the grid from the row dropdowns for Schedule k3",()=>{
    standardDespFunctions.EditStandardDespRowK3();
})
And("I go to Document Center Documents tab",()=>{
    maskedEINFunctions.openDocuments();
    documentCenterDocumentsFunctions.resetGrid();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
})
Then("I Choose a Matched Fed K1 Doc & go to its review page",()=>{
    standardDespFunctions.ClickOnMatchedDropdown();
    standardDespFunctions.ChooseMatchedOption();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    standardDespFunctions.SearchFileName();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    reviewDocumentScreenFunctions.clickOnReviewIcon();
})
And("I go to view by dropdown & choose TRACK Allocable Items Option",()=>{
    form8621Functions.ClickOnViewByDropdown();
    standardDespFunctions.ClickOnTRACKAllocableItemsOption();
})
Then("I Check for TRACK Taxonomy Description Column is Present",()=>{
    standardDespFunctions.ScrollAllocableItemsGrid();
    standardDespFunctions.CheckTRACKTaxonomyDespColumn();
    standardDespFunctions.CheckTRACKTaxonomyDespRow();
})