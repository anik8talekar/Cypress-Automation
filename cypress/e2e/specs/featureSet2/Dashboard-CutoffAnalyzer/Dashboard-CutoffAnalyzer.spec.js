import CutoffAnalyzerFunctions from "../../../pages/Dashboard-CutoffAnalyzer.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ExecutiveReviewFunctions from "../../../pages/ExecutiveReview.pages";

var smartK1Functions = new SmartK1Functions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var cutoffAnalyzerFunctions = new CutoffAnalyzerFunctions
var enagegementSetupFunctions = new EnagegementSetupFunctions();
var executiveReviewFunctions = new ExecutiveReviewFunctions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I Click on show details button from Cutoff Analyzer card on the dashboard",()=>{
    cutoffAnalyzerFunctions.ClickOnShowDetailsButton();
})
Then("I Check for Filters Chart and the grid",()=>{
    cutoffAnalyzerFunctions.VerifyChart();
    cutoffAnalyzerFunctions.VerifyDocumentsCount();
})
Then("I Check for the dates under the grid",()=>{
    cutoffAnalyzerFunctions.VerifyDates();
})
Then("I apply filters for Investor Investment Tax Year and Cutoff Date",()=>{
    cutoffAnalyzerFunctions.SelectInvestor();
    cutoffAnalyzerFunctions.SelectInvestment();
    cutoffAnalyzerFunctions.SelectTaxYear();
    cutoffAnalyzerFunctions.SelectCutoffDate();
})
And("I Click on Save Button",()=>{
    cutoffAnalyzerFunctions.ClickOnSaveButton();
})
Then("I type a save search name and click on save button",()=>{
    cutoffAnalyzerFunctions.TypeSearchName();
    cutoffAnalyzerFunctions.ClickOnSaveButtonSlideout();
    cutoffAnalyzerFunctions.ClickOnCloseIcon();
})
And("I Verify the saved search from saved cutoffs dropdown",()=>{
    cutoffAnalyzerFunctions.VerifySavedCutoffs();
})
Then("I Delete the saved cutoff as a prequisite step",()=>{
  //  cutoffAnalyzerFunctions.DeleteSavedCutoff();
   // cutoffAnalyzerFunctions.clickOnDeletePopup();
})
Then("I Select a Saved Cutoff from saved cutoffs dropdown",()=>{
    cutoffAnalyzerFunctions.SelectSavedCutoff();
})
And("I Change Tax Year",()=>{
    cutoffAnalyzerFunctions.ChangeTaxYear();
})
Then("I Click on Save Button and click on Yes Popup",()=>{
    cutoffAnalyzerFunctions.ClickOnSaveButton();
    cutoffAnalyzerFunctions.clickOnYesPopup();
})
And("I Verify the changed Tax Year from Tax Year dropdown",()=>{
    cutoffAnalyzerFunctions.VerifyChangedTaxYear();
})
And("I Click on Reset Selection Button",()=>{
    cutoffAnalyzerFunctions.ClickOnResetSelectionButton();
})
Then("I verify all the data is cleared from the filters tab",()=>{
    cutoffAnalyzerFunctions.VerifyEmptyFilterFields();
})
And("I Click on Line Chart from View by tab and verify the data in the chart",()=>{
    cutoffAnalyzerFunctions.VerifyLineChart();
})
Then("I Click on Doughnut Chart tab from View by and verify the data in the chart",()=>{
    cutoffAnalyzerFunctions.ClickOnDoughnutChart();
    cutoffAnalyzerFunctions.VerifyDoughnutChart();
})
Then("I Select a Tax Year and also select a Cutoff date from the filters tab on LHS",()=>{
    cutoffAnalyzerFunctions.SelectCutoffDateApply();
})
And("I Click on Save Button and add name to my saved search",()=>{
    cutoffAnalyzerFunctions.ClickOnSaveButton();
    cutoffAnalyzerFunctions.TypeSearchName();
    cutoffAnalyzerFunctions.ClickOnSaveButtonSlideout();
    cutoffAnalyzerFunctions.ClickOnCloseIcon();
})
Then("I Click on Apply Cutoff Date Button",()=>{
    cutoffAnalyzerFunctions.ClickOnApplyCutoffDateButton();
    cutoffAnalyzerFunctions.clickOnYesPopup();
})
And("I go to document center Expected Documents tab and check cutoff date is applied under cutoff date column",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    cutoffAnalyzerFunctions.ExpectedDocumentsTab();
    cutoffAnalyzerFunctions.TaxYearDropdown();
    cutoffAnalyzerFunctions.ChangeTaxYearAll();
    cutoffAnalyzerFunctions.TypeCutOffDate();
    cutoffAnalyzerFunctions.VerifyCutoffDateExpDocTab();
})
And("I Click on Recalculate Button",()=>{
    cutoffAnalyzerFunctions.ClickOnRecalculateButton();
})
And("I Verify data in the grid under line chart",()=>{
    cutoffAnalyzerFunctions.VerifyDates();
})
Then("I Verify Recalculation Started Popup Message",()=>{
    cutoffAnalyzerFunctions.VerifyRecalculationStartedMsg();
    cutoffAnalyzerFunctions.VerifyRecalculationText();  
})