import ProcessingFunctions from "../../../pages/Processing.page";
import MaskedEINFunctions from "../../../pages/MaskedEIN.page";
import DocumentCenterDocumentsFunctions from "../../../pages/DocumentCenterDocuments.page";
import ReviewDocumentScreenFunctions from "../../../pages/ReviewDocumentScreen.page";
import ReconciliationFunctions from "../../../pages/Reconciliation.page";

var processingFunctions = new ProcessingFunctions
var maskedEINFunctions = new MaskedEINFunctions
var documentCenterDocumentsFunctions = new DocumentCenterDocumentsFunctions
var reviewDocumentScreenFunctions = new ReviewDocumentScreenFunctions
var reconciliationFunctions = new ReconciliationFunctions

Given("I open the application", () => {
  processingFunctions.openTheApp();
})
When("I click on existing engagement", () => {
  processingFunctions.openEngagement();
})
Then("I click on document Center and open documents section", () => {
  maskedEINFunctions.openDocuments();
  documentCenterDocumentsFunctions.resetGrid();
})

And("I search for K3 Document", () => {
reconciliationFunctions.searchK3Document();
})

Then("I open K3 Document", () => {
reviewDocumentScreenFunctions.clickOnReviewIcon();
})

And("I navigate to Part II Section 1 and 2 to verify Reconciliation tile", () => {
reconciliationFunctions.verifyReconciliationTilePartII();
})

Then("I navigate to Part X Section 1 and 2 to verify Reconciliation tile", () => {
reconciliationFunctions.verifyReconciliationTilePartX();
})

And("I navigate to Allocable Items to verify Reconciliation tile", () => {

})

And("I search for K1 Document", () => {
  reconciliationFunctions.searchK1Document();
  })
  
Then("I open K1 Document", () => {
reviewDocumentScreenFunctions.clickOnReviewIcon();
})

And("I navigate to Schedule Items to verify Reconciliation tile", () => {
  reconciliationFunctions.selectScheduleItems();
  reconciliationFunctions.verifyReconciliationTileK1();
})

Then("I navigate to Schedule Items Details to verify Reconciliation tile", () => {
  reconciliationFunctions.selectScheduleItemDetails();
  reconciliationFunctions.verifyReconciliationTileK1();
})

And("I navigate to Federal Footnotes to verify Reconciliation tile", () => {
  reconciliationFunctions.selectFederalFootnotes();
  reconciliationFunctions.verifyReconciliationTileK1();
})

Then("I navigate to Federal Reclasses to verify Reconciliation tile", () => {
  reconciliationFunctions.selectFederalReclasses();
  reconciliationFunctions.verifyReconciliationTileK1();
})

And("I navigate to State Source to verify Reconciliation tile", () => {
  reconciliationFunctions.selectStateSource();
  reconciliationFunctions.verifyReconciliationTileK1();
})