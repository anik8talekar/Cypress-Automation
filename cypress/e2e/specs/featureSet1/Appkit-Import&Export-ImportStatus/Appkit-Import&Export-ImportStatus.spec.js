import ProcessingFunctions from "../../../pages/Processing.page";
import AppkitImportAndExportImportStatusFunctions from "../../../pages/Appkit-Import&Export-ImportStatus.page";

var processingFunctions = new ProcessingFunctions
var appkitImportAndExportImportStatusFunctions = new AppkitImportAndExportImportStatusFunctions


Given("I open the application", ()=>{
    processingFunctions.openTheApp();
})

When("I click on existing engagement", ()=>{
    processingFunctions.openEngagement();
})
 
Then("I click on Import & Export Data and open Import Status section",()=>{
appkitImportAndExportImportStatusFunctions.openImportStatus();
})
 
And("I verify new look and feel is implemented",()=>{
  appkitImportAndExportImportStatusFunctions.verifyImportStatusUI();
})

And("I apply some filters",()=>{
  appkitImportAndExportImportStatusFunctions.applyFilters();
})

Then("I verify filter results",()=>{
  appkitImportAndExportImportStatusFunctions.verifyFilterResults();
})