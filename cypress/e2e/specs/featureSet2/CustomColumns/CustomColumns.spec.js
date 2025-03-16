import CustomColumnsFunctions from "../../../pages/CustomColumns.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";

var smartK1Functions = new SmartK1Functions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var customColumnsFunctions = new CustomColumnsFunctions

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
And("I Click on Custom Columns tab",()=>{
    customColumnsFunctions.ClickOnCustomColumnTab();
})
Then("I Click on Add Custom Column Button",()=>{
    customColumnsFunctions.ClickOnAddCustomColumnButton();
})
And("I click on Add Value Button and add values under new value text field and also add column name",()=>{
    customColumnsFunctions.ClickOnAddValueButton();
    customColumnsFunctions.ClickOnValueField();
    customColumnsFunctions.TypeColumnName();
    customColumnsFunctions.TypeValue();
})
Then("I Verify the newly created column with values is visible in Document Center Documents tab",()=>{
    customColumnsFunctions.DocumentsTab();
    customColumnsFunctions.ScrollToNewColumnDocuments();
})
And("I Verify the newly created column with values is visible in Document Center Executive Review tab",()=>{
    customColumnsFunctions.ExecutiveReviewTab();
    cy.wait(3000);
    customColumnsFunctions.ScrollToNewColumnExecutiveReview();
})
Then("I Verify the newly created column with values is visible in Document Center Expected Documents tab",()=>{
    customColumnsFunctions.ExpectedDocumentsTab();
    customColumnsFunctions.ScrollToNewColumnExpectedDocuments();
})
And("I Delete newly created custom column for prerequiste step",()=>{
    expDocumentsRolloverFunctions.ClickOnAdminTab();
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
    customColumnsFunctions.ClickOnCustomColumnTab();
    customColumnsFunctions.ClickOnDeleteButton();
    customColumnsFunctions.DeletePopup();
})
And("I Go to Document Center Documents tab and click on edit button besides any document under actions column",()=>{
    customColumnsFunctions.DocumentsTabScenario2();
    customColumnsFunctions.ClickOnEditIconDocuments();
})
Then("I Go to Column Name drop down under edit document slideout and Change values of the columns",()=>{
    customColumnsFunctions.ClickOnWeekDayDropdown();
})
And("I Click on Save Button",()=>{
    customColumnsFunctions.ClickOnSaveButton();
})
Then("I Click on the dropdown besides actions dropdown and Uncheck a column name from the dropdown from Documents Tab",()=>{
    customColumnsFunctions.ClickOnColumnChooserDropdown();
    customColumnsFunctions.UncheckWeekdayColumn();
})
And("I Verify Unchecked column is not present in the grid",()=>{
    customColumnsFunctions.VerifyColumnNotPresentDoc();
})
Then("I Click on the dropdown besides actions dropdown and Uncheck a column name from the dropdown from Executive Review Tab",()=>{
    customColumnsFunctions.ExecutiveReviewTab();
    customColumnsFunctions.ClickOnColumnChooserDropdown();
    customColumnsFunctions.UncheckWeekdayColumnExReview();
})
And("I Verify Unchecked column is not present in the grid for Executive Review Tab",()=>{
    customColumnsFunctions.VerifyColumnNotPresentExReview();
})
Then("I Click on the dropdown besides actions dropdown and Uncheck a column name from the dropdown from Expected Documents Tab",()=>{
    customColumnsFunctions.ExpectedDocumentsTab();
    customColumnsFunctions.ClickOnColumnChooserDropdown();
    customColumnsFunctions.UncheckWeekdayColumnExpDoc();
})
And("I Verify Unchecked column is not present in the grid for Expected Documents Tab",()=>{
    customColumnsFunctions.VerifyColumnNotPresentExpDoc();
})
And("I Go to Document Center Documents tab and Select Multiple Documents",()=>{
    customColumnsFunctions.DocumentsTabScenario2();
    customColumnsFunctions.ClickOnCheckBoxDoc();
})
Then("I click on Set Custom Columns Option from Actions Dropdown from Documents Tab",()=>{
    customColumnsFunctions.ClickOnActionsDropdown();
    customColumnsFunctions.ClickonCustomColumnsOption();
})
And("I Set the values from the dropdowns from the set custom columns slideout",()=>{
    customColumnsFunctions.SelectWeekday();
    customColumnsFunctions.SelectTuesday();
})
Then("I Click on save button",()=>{
    customColumnsFunctions.ClickOnSaveButton();
})
And("I click on Set Custom Columns Option from Actions Dropdown from Expected Documents Tab",()=>{
    customColumnsFunctions.ExpectedDocumentsTab();
    customColumnsFunctions.ClickOnCheckBoxDoc();
    customColumnsFunctions.ClickOnActionsDropdown();
    customColumnsFunctions.ClickonCustomColumnsOption();
    customColumnsFunctions.SelectWeekdayExpDoc();
    customColumnsFunctions.SelectTuesdayExpDoc();
})
And("I Go to Document Center Documents tab and Select Multiple Documents",()=>{
    customColumnsFunctions.DocumentsTabScenario2();
    customColumnsFunctions.ClickOnCheckBoxDoc();
})