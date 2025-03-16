import ProcessingFunctions from "../../../pages/Processing.page";
import DocumentTrackerFunctions from "../../../pages/documentTracker.page";

var processingFunctions = new ProcessingFunctions
var documentTrackerFunctions = new DocumentTrackerFunctions


Given("I open the application", ()=>{
   processingFunctions.openTheApp();
   documentTrackerFunctions.generateName();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})

 And("I navigate to Document Tracker tab", ()=>{
   documentTrackerFunctions.openDocumentTracker();
 })

 Then("I verify required columns are visible or not in the Fund Summary", ()=>{
   documentTrackerFunctions.verifyRequiredColumns();
 })

 And("I select an investor and verify the detail summary view", ()=>{
   documentTrackerFunctions.selectAndVerifyInvestorSummary();
 })

 Then("I verify New Columns are visible or not", ()=>{
   documentTrackerFunctions.verifyNewColumns();  
})

 Then("I verify required cut off columns are visible or not in the Fund Summary", ()=>{
   documentTrackerFunctions.verifyCutOffColumns();
 })

 Then("I make sure fund cannot be selected if footnotes are not matched", ()=>{
 documentTrackerFunctions.verifyFundIsUnselectable();
})

Then("I verify recieved column is right aligned and cutoff date column is left aligned", ()=>{
  documentTrackerFunctions.verifyColumnUpdates();
 })

 Then("I select some columns from the dropdown and reload the page", ()=>{
 documentTrackerFunctions.selectColumns();
 })

And("I verify that the colums are still selected", ()=>{
 documentTrackerFunctions.openColumnChooser();
 documentTrackerFunctions.verifyIDAndNAV();
 documentTrackerFunctions.unselectColumns();
 documentTrackerFunctions.verifyInvisibility();
 })

And("I perform search operation", ()=>{
 documentTrackerFunctions.performSearchOperation();
})

Then("I save the search pattern and hit reset grid", ()=>{
 documentTrackerFunctions.saveSearchPattern();
})

And("I apply saved filters and verify the result", ()=>{
 documentTrackerFunctions.applySavedFilter();
 documentTrackerFunctions.verifySearchResult();
})

Then("I delete the saved filter", ()=>{
 documentTrackerFunctions.deleteSavedFilter();
})




 

 
