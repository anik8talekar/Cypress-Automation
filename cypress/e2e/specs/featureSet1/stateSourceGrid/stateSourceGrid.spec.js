import ProcessingFunctions from "../../../pages/Processing.page";
import MaskedEINFunctions from "../../../pages/MaskedEIN.page";
import DocumentCenterDirectConnectFunctions from "../../../pages/documentCenter-DirectConnect.page";
import StateSourceGridFunctions from "../../../pages/stateSourceGrid.page";

var documentCenterDirectConnectFunctions = new DocumentCenterDirectConnectFunctions
var processingFunctions = new ProcessingFunctions
var maskedEINFunctions = new MaskedEINFunctions
var stateSourceGridFunctions = new StateSourceGridFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})

Then("I click on document Center and open documents section", ()=>{
    maskedEINFunctions.openDocuments();
})

Then("I search and open the required document", ()=>{
   stateSourceGridFunctions.searchAndOpenDocument();
})

Then("I select State Source from the dropdown", ()=>{
  stateSourceGridFunctions.selectStateSource();
})

Then("I select column from column chooser", ()=>{
  stateSourceGridFunctions.selectColumns();
})

Then("I click on Ready for TRACK review button", () => {  
 stateSourceGridFunctions.readyForTRACkReview();
});

Then("I verify that Taxonomy row is present in the grid", ()=>{
  stateSourceGridFunctions.verifyTaxonomyRow();
})

Then("I click on document Center and open Direct Connect section", ()=>{
  documentCenterDirectConnectFunctions.openDocumentCenter();
  documentCenterDirectConnectFunctions.openDirectConnect();
})

Then("Then I select Direct Connect Profile", ()=>{
  stateSourceGridFunctions.selectDirectConnectProfile(); 
})

Then("I select a document and click on Review Allocable Items button", ()=>{
  stateSourceGridFunctions.selectDocForReviewItem();
})

Then("I select State Taxonomy Template and verify the amount column and its values", ()=>{
 stateSourceGridFunctions.verifyAmount();
})

Then("I select a document and click on Send to TRACK button", ()=>{
  stateSourceGridFunctions.sendDocToTRACK();
})

Then("I select TRACK allocable items from dropdown", ()=>{
  stateSourceGridFunctions.selectTRACKAllocableItem();
})

Then("I click on Reapply Template button and verify the message", ()=>{
  stateSourceGridFunctions.reapplyTemplate();
})

Then("I search and open the Arizona document", ()=>{
  stateSourceGridFunctions.openArizonaDoc();
})

Then("I match unmatch and rematch the Arizona document", ()=>{
 stateSourceGridFunctions.matchUnmatchRematch();
})

Then("I edit the metadata of Arizona document", ()=>{
 stateSourceGridFunctions.editMetaDataForArizona();
})

Then("I delete the document", ()=>{
  stateSourceGridFunctions.deleteDocument();
})

Then("I search and open the Upper Tier One document", ()=>{
  stateSourceGridFunctions.openUpperTierOne();
})

Then("I expand Arizona group to edit the default values", ()=>{
  stateSourceGridFunctions.expandAndEditDefaultValues();
})

Then("I undo the edited values and verify the default value is present", ()=>{
  stateSourceGridFunctions.discardEditedValues();
})