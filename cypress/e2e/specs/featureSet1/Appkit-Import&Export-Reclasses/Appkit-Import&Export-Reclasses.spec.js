import ProcessingFunctions from "../../../pages/Processing.page";
import AppkitImportAndExportReclassesFunctions from "../../../pages/Appkit-Import&Export-Reclasses.Page"

var processingFunctions = new ProcessingFunctions
var appkitImportAndExportReclassesFunctions = new AppkitImportAndExportReclassesFunctions

Given("I open the application", ()=>{
    processingFunctions.openTheApp();
})

When("I click on existing engagement", ()=>{
    processingFunctions.openEngagement();
})
 
Then("I click on Import & Export Data and open Reclasses section",()=>{
    appkitImportAndExportReclassesFunctions.openReclasses();
})
 
And("I verify new look and feel is implemented",()=>{
    appkitImportAndExportReclassesFunctions.verifyReclassesUI();
})

And("I apply some filters",()=>{
    appkitImportAndExportReclassesFunctions.applyFilters();
})

Then("I verify filter results",()=>{
    appkitImportAndExportReclassesFunctions.verifyFilterResults();
})