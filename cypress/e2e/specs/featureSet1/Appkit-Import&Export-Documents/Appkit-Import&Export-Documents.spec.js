import ProcessingFunctions from "../../../pages/Processing.page";
import AppkitImportAndExportDocumentsFunctions from "../../../pages/Appkit-Import&Export-Documents.Page"

var processingFunctions = new ProcessingFunctions
var appkitImportAndExportDocumentsFunctions = new AppkitImportAndExportDocumentsFunctions

Given("I open the application", ()=>{
    processingFunctions.openTheApp();
})

When("I click on existing engagement", ()=>{
    processingFunctions.openEngagement();
})
 
Then("I click on Import & Export Data and open Documents section",()=>{
    appkitImportAndExportDocumentsFunctions.openDocuments();
})
 
And("I verify new look and feel is implemented",()=>{
    appkitImportAndExportDocumentsFunctions.verifyDocumentsUI();
})

And("I apply some filters",()=>{
    appkitImportAndExportDocumentsFunctions.applyFilters();
})

Then("I verify filter results",()=>{
    appkitImportAndExportDocumentsFunctions.verifyFilterResults();
})