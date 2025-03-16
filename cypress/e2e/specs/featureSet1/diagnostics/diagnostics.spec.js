import ProcessingFunctions from "../../../pages/Processing.page";
import MaskedEINFunctions from "../../../pages/MaskedEIN.page";
import DocumentCenterDocumentsFunctions from "../../../pages/DocumentCenterDocuments.page";
import ReviewDocumentScreenFunctions from "../../../pages/ReviewDocumentScreen.page";
import DiagnosticsPageFunctions from "../../../pages/Diagnostics.page"

var processingFunctions = new ProcessingFunctions
var maskedEINFunctions = new MaskedEINFunctions
var documentCenterDocumentsFunctions = new DocumentCenterDocumentsFunctions
var reviewDocumentScreenFunctions = new ReviewDocumentScreenFunctions
var diagnosticsPageFunctions = new DiagnosticsPageFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})
Then("I click on document Center and open documents section", ()=>{
    maskedEINFunctions.openDocuments();
    documentCenterDocumentsFunctions.resetGrid();
  })

And("I search and select the document to Run Diagnostics", ()=>{
    reviewDocumentScreenFunctions.searchDocument();
    diagnosticsPageFunctions.selectAllDocuments();
  })

Then("I diagnose and verify the result", ()=>{
    documentCenterDocumentsFunctions.clickOnActions();
    diagnosticsPageFunctions.runDiagnostics();
  })

And("I review the document and Run Diagnostics on it", ()=>{
    reviewDocumentScreenFunctions.searchDocument();
    reviewDocumentScreenFunctions.clickOnReviewIcon();
    diagnosticsPageFunctions.diagnostics();
  })
